/*
Code taken and modified from https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_raycasting_points.html
*/

import React from "react";
import { useEffect } from "react";
import HoverCard from "../components/HoverCard";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

interface initializer {}
class SceneInit {
  fov: number = 0;
  canvasId: string = "";

  scene: THREE.Scene | undefined;
  stats: Stats | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  controls: OrbitControls | undefined;
  renderer: THREE.WebGLRenderer | undefined;
  clock: THREE.Clock | undefined;

  pointclouds: any;
  raycaster: any;
  intersection: any;
  spheresIndex: number = 0;
  toggle: number = 0;

  pointer: THREE.Vector2 = new THREE.Vector2();
  spheres: Array<THREE.Mesh> = [];

  threshold: number = 0.1;
  pointSize: number = 0.05;
  width: number = 80;
  length: number = 160;
  rotateY = new THREE.Matrix4().makeRotationY(0.005);

  constructor(canvasId: string) {
    this.fov = 45;
    this.canvasId = canvasId;

    this.scene = undefined;
    this.stats = undefined;
    this.camera = undefined;
    this.controls = undefined;
    this.renderer = undefined;
    this.clock = undefined;
  }
  generatePointCloudGeometry = (
    color: THREE.Color,
    width: number,
    length: number
  ) => {
    const geometry = new THREE.BufferGeometry();
    const numPoints = width * length;

    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);

    let k = 0;

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < length; j++) {
        const u = i / width;
        const v = j / length;
        const x = u - 0.5;
        const y = (Math.cos(u * Math.PI * 4) + Math.sin(v * Math.PI * 8)) / 20;
        const z = v - 0.5;

        positions[3 * k] = x;
        positions[3 * k + 1] = y;
        positions[3 * k + 2] = z;

        const intensity = (y + 0.1) * 5;
        colors[3 * k] = color.r * intensity;
        colors[3 * k + 1] = color.g * intensity;
        colors[3 * k + 2] = color.b * intensity;

        k++;
      }
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.computeBoundingBox();

    return geometry;
  };

  generatePointcloud = (color: THREE.Color, width: number, length: number) => {
    const geometry = this.generatePointCloudGeometry(color, width, length);
    const material = new THREE.PointsMaterial({
      size: this.pointSize,
      vertexColors: true,
    });

    return new THREE.Points(geometry, material);
  };

  generateIndexedPointcloud = (
    color: THREE.Color,
    width: number,
    length: number
  ) => {
    const geometry = this.generatePointCloudGeometry(color, width, length);
    const numPoints = width * length;
    const indices = new Uint16Array(numPoints);

    let k = 0;

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < length; j++) {
        indices[k] = k;
        k++;
      }
    }

    geometry.setIndex(new THREE.BufferAttribute(indices, 1));

    const material = new THREE.PointsMaterial({
      size: this.pointSize,
      vertexColors: true,
    });

    return new THREE.Points(geometry, material);
  };

  generateIndexedWithOffsetPointcloud = (
    color: THREE.Color,
    width: number,
    length: number
  ) => {
    const geometry = this.generatePointCloudGeometry(color, width, length);
    const numPoints = width * length;
    const indices = new Uint16Array(numPoints);

    let k = 0;

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < length; j++) {
        indices[k] = k;
        k++;
      }
    }

    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    geometry.addGroup(0, indices.length);

    const material = new THREE.PointsMaterial({
      size: this.pointSize,
      vertexColors: true,
    });

    return new THREE.Points(geometry, material);
  };

  onPointerMove = (event: any) => {
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  onWindowResize = () => {
    if (this.camera) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    }

    if (this.renderer)
      this.renderer.setSize(window.innerWidth, window.innerHeight);
  };
  initialize = () => {
    const container = document.getElementById("threejsroot");

    this.scene = new THREE.Scene();

    this.clock = new THREE.Clock();

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );

    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(this.scene.position);

    this.camera.updateMatrix();

    const pcBuffer = this.generatePointcloud(
      new THREE.Color(1, 0, 0),
      this.width,
      this.length
    );
    pcBuffer.scale.set(5, 10, 10);
    pcBuffer.position.set(-5, 0, 0);
    this.scene.add(pcBuffer);

    const pcIndexed = this.generateIndexedPointcloud(
      new THREE.Color(0, 1, 0),
      this.width,
      this.length
    );
    pcIndexed.scale.set(5, 10, 10);
    pcIndexed.position.set(0, 0, 0);
    this.scene.add(pcIndexed);

    const pcIndexedOffset = this.generateIndexedWithOffsetPointcloud(
      new THREE.Color(0, 1, 1),
      this.width,
      this.length
    );
    pcIndexedOffset.scale.set(5, 10, 10);
    pcIndexedOffset.position.set(5, 0, 0);
    this.scene.add(pcIndexedOffset);

    this.pointclouds = [pcBuffer, pcIndexed, pcIndexedOffset];

    const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    for (let i = 0; i < 40; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      this.scene.add(sphere);
      this.spheres.push(sphere);
    }

    //

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container?.appendChild(this.renderer.domElement);

    //

    this.raycaster = new THREE.Raycaster();
    this.raycaster.params.Points.threshold = this.threshold;

    //

    this.stats = Stats();
    if (this.stats) container?.appendChild(this.stats.dom);

    //

    window.addEventListener("resize", this.onWindowResize);
    document.addEventListener("pointermove", this.onPointerMove);
  };
  renderCanvas = () => {
    if (this.camera) {
      this.camera.applyMatrix4(this.rotateY);
      this.camera.updateMatrixWorld();
    }

    this.raycaster.setFromCamera(this.pointer, this.camera);

    const intersections = this.raycaster.intersectObjects(
      this.pointclouds,
      false
    );
    this.intersection = intersections.length > 0 ? intersections[0] : null;

    if (this.toggle > 0.02 && this.intersection !== null) {
      this.spheres[this.spheresIndex].position.copy(this.intersection.point);
      this.spheres[this.spheresIndex].scale.set(1, 1, 1);
      this.spheresIndex = (this.spheresIndex + 1) % this.spheres.length;

      this.toggle = 0;
    }

    for (let i = 0; i < this.spheres.length; i++) {
      const sphere = this.spheres[i];
      sphere.scale.multiplyScalar(0.98);
      sphere.scale.clampScalar(0.01, 1);
    }

    if (this.clock) this.toggle += this.clock.getDelta();

    if (this.renderer && this.scene && this.camera)
      this.renderer.render(this.scene, this.camera);
  };
  animate = () => {
    requestAnimationFrame(this.animate);

    this.renderCanvas();
    if (this.stats) this.stats.update();
  };
}
const Hero = () => {
  let complete = false;
  useEffect(() => {
    if (!complete) {
      const sceneInit = new SceneInit("myThreeJsCanvas");
      sceneInit.initialize();
      sceneInit.animate();
      complete = true;
    }

    // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // sceneInit.scene?.add(boxMesh);
  }, []);
  return (
    <div id="threejsroot" className="relative">
      <HoverCard
        title="Alle Menschen sind frei und gleich an Würde und Rechten"
        subtitle="But in a much more real sense, I have no idea what I'm doing"
      />
      <canvas id="myThreeJsCanvas" />
    </div>
  );
};

export default Hero;

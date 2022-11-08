/*
Code taken and modified from https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_raycasting_points.html
*/

import React from "react";
import { useEffect } from "react";

import { createNoise2D } from "simplex-noise";
import HoverCard from "../components/HoverCard";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

class SceneInit {
  fov: number = 0;
  canvasId: string = "";

  scene: THREE.Scene | undefined;
  stats: Stats | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  controls: OrbitControls | undefined;
  renderer: THREE.WebGLRenderer | undefined;
  raycaster: THREE.Raycaster | undefined;
  intersected: THREE.PointsMaterial | undefined;
  rotateY = new THREE.Matrix4().makeRotationY(0.001);

  pointer: THREE.Vector2 = new THREE.Vector2();

  width: number;
  height: number;
  numCols: number;
  numRows: number;

  material: THREE.PointsMaterial | undefined;
  points: THREE.Points | undefined;
  geometry: THREE.BufferGeometry | undefined;
  noise2D = createNoise2D();

  constructor(canvasId: string) {
    this.fov = 45;
    this.canvasId = canvasId;
    this.scene = undefined;
    this.stats = undefined;
    this.camera = undefined;
    this.controls = undefined;
    this.renderer = undefined;
    this.geometry = undefined;
    this.material = undefined;
    this.points = undefined;
    this.raycaster = undefined;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.numCols = this.width / 10;
    this.numRows = this.width / 10;
  }

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

    this.raycaster = new THREE.Raycaster();

    this.pointer = new THREE.Vector2();

    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      1000
    );

    this.camera.position.set(10, 3, 10);
    this.camera.lookAt(this.scene.position);

    this.camera.updateMatrix();

    const points = [];
    const coordinates = [];
    const colors = [];
    let x = 0;
    let y = 0;
    let z = 0;
    let vertex;
    const gap = 0.5;
    const offset = { x: -30, y: -30 };
    for (let i = 0; i < this.numCols; i += 1) {
      for (let j = 0; j < this.numRows; j += 1) {
        x = offset.x + i * gap;
        z = offset.y + j * gap;
        y = this.noise2D(x, z);

        let vertex = new THREE.Vector3(x, y, z);
        points.push(vertex);
        let col = new THREE.Color(255, 0, 0);
        colors.push(255, 255, 255);
        coordinates.push(x, y, z);
      }
    }

    this.geometry = new THREE.BufferGeometry().setFromPoints(points);
    this.geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );
    this.material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });
    this.points = new THREE.Points(this.geometry, this.material);

    this.scene?.add(this.points);

    let lineMat = new THREE.LineDashedMaterial({
      opacity: 0.2,
      transparent: true,
    });

    const line = new THREE.Line(this.geometry, lineMat);

    this.scene?.add(line);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container?.appendChild(this.renderer.domElement);

    window.addEventListener("resize", this.onWindowResize);
    document.addEventListener("pointermove", this.onPointerMove);
  };
  renderCanvas = () => {
    if (this.camera && this.points) {
      this.camera.applyMatrix4(this.rotateY);
      this.camera.updateMatrixWorld();
    }
    if (this.renderer && this.scene && this.camera)
      this.renderer.render(this.scene, this.camera);
  };
  animate = () => {
    requestAnimationFrame(this.animate);

    this.renderCanvas();
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
  }, []);
  return (
    <div id="threejsroot" className="relative">
      <HoverCard
        title="Cameron Dickie"
        subtitle="But in a much more real sense, I have no idea what I'm doing"
      />
      <canvas id="myThreeJsCanvas" />
    </div>
  );
};

export default Hero;

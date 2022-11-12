/*
Code taken and modified from https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_raycasting_points.html
*/

import React from "react";
import { useEffect } from "react";
import moutain from "../public/mountain-static.jpg";
import h_map from "../public/height.png";
import a_map from "../public/alpha.png";

import { createNoise2D } from "simplex-noise";
import HoverCard from "../components/HoverCard";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { Plane } from "three";

class SceneInit {
  fov: number = 0;
  canvasId: string = "";

  scene: THREE.Scene | undefined;
  stats: Stats | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  clock: THREE.Clock | undefined;
  controls: OrbitControls | undefined;
  renderer: THREE.WebGLRenderer | undefined;
  raycaster: THREE.Raycaster | undefined;
  intersected: THREE.PointsMaterial | undefined;
  plane: THREE.Mesh | undefined;
  rotateY = new THREE.Matrix4().makeRotationY(0.001);

  pointer: THREE.Vector2 = new THREE.Vector2();

  width: number;
  height: number;
  numCols: number;
  numRows: number;

  material: THREE.MeshStandardMaterial | undefined;
  points: THREE.Points | undefined;
  geometry: THREE.BufferGeometry | undefined;
  noise2D = createNoise2D();

  constructor(canvasId: string) {
    this.fov = 45;
    this.canvasId = canvasId;
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.clock = undefined;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.numCols = this.width / 10;
    this.numRows = this.width / 10;
  }

  onPointerMove = (event: any) => {
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  animateTerrain = (event: any) => {
    this.pointer.y = event.clientY;
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

    //Textures
    const loader = new THREE.TextureLoader();
    const texture = loader.load(moutain.src);
    const height = loader.load(h_map.src);
    const alpha = loader.load(a_map.src);
    //Objects
    this.geometry = new THREE.PlaneGeometry(3, 3, 64, 64);

    //Materials
    this.material = new THREE.MeshStandardMaterial({
      color: "gray",
      map: texture,
      displacementMap: height,
      displacementScale: 0.1,
      alphaMap: alpha,
      transparent: true,
      depthTest: false,
    });

    this.plane = new THREE.Mesh(this.geometry, this.material);

    this.scene.add(this.plane);

    this.plane.rotation.x = 181;
    //Mesh

    //Lights
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.x = 0.2;
    pointLight.position.y = 10;
    pointLight.position.z = 4.4;

    //setting light color
    pointLight.color.set(0xfd1d66);
    this.scene.add(pointLight);

    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      100
    );

    this.camera.position.set(0, 0, 2);
    this.camera.lookAt(this.scene.position);

    this.camera.updateMatrix();

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container?.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();

    window.addEventListener("resize", this.onWindowResize);
    document.addEventListener("mousemove", this.animateTerrain);
    // document.addEventListener("pointermove", this.onPointerMove);
  };
  renderCanvas = () => {
    if (this.clock) {
      const elapsedTime = this.clock?.getElapsedTime();
      if (this.plane) {
        this.plane.rotation.z = 0.15 * elapsedTime;
        //no idea why typescript linter thinks this is an error but this is working...
        this.plane.material.displacementScale =
          0.3 + (this.pointer.y / this.width) * 0.15;
      }
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
      {/* no clue why i dont need this??? <canvas id="myThreeJsCanvas" className="h-100" /> */}
    </div>
  );
};

export default Hero;

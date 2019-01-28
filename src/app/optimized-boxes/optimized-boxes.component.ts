import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { BoxService } from "../box.service";
import * as THREE from "three";
// import { OrbitControls } from "three-orbitcontrols-ts";
// let OrbitControls = require("three-orbit-controls")(THREE);
import OrbitControls from "three-orbitcontrols";

@Component({
  selector: "app-optimized-boxes",
  templateUrl: "./optimized-boxes.component.html",
  styleUrls: ["./optimized-boxes.component.css"]
})
export class OptimizedBoxesComponent implements OnInit {
  @ViewChild("rendererContainer") rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;
  controls = null;

  constructor(private boxService: BoxService) {
    this.scene = new THREE.Scene();
    let xPosition = 0;
    let lastWidth = 0;
    this.boxService.boxes.forEach(box => {
      for (let index = 0; index < box.qty; index++) {
        const geometry = new THREE.BoxGeometry(
          box.width,
          box.height,
          box.depth
        );

        const material = new THREE.MeshLambertMaterial({
          color: Math.random() * 0xffffff,
          wireframe: false
        });
        this.mesh = new THREE.Mesh(geometry, material);

        this.mesh.position.y = 0;
        this.mesh.position.z = 0;

        xPosition += 0.5 * box.width + 0.5 * lastWidth;
        this.mesh.position.x = xPosition;

        lastWidth = box.width;

        this.scene.add(this.mesh);
      }
    });
    // let axesHelper = new THREE.AxesHelper(100);
    // this.scene.add(axesHelper);
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.camera.position.z = 2000;
    this.camera.position.x = (xPosition + 0.5 * lastWidth) / 2;
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target = new THREE.Vector3(this.camera.position.x, 0, 0);

    // How far you can dolly in and out ( PerspectiveCamera only )
    this.controls.minDistance = 0;
    this.controls.maxDistance = Infinity;

    this.controls.enableZoom = true; // Set to false to disable zooming
    this.controls.zoomSpeed = 1.0;

    this.controls.enablePan = true; // Set to false to disable panning (ie vertical and horizontal translations)

    // this.controls.enablePan = true;
    // this.controls.enableZoom = true;
    this.controls.update();

    const ambientLight = new THREE.AmbientLight(0x404040, 3); // soft white light
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0x404040, 0.5);
    directionalLight.position.set(1, 1, 0);
    this.scene.add(directionalLight);
    this.scene.background = new THREE.Color(0xffffff);
  }
  ngOnInit() {}

  ngAfterViewInit() {
    console.log("....................");
    console.log(this.boxService.boxes);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    // this.mesh.rotation.x += 0.01;
    // this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
    // this.controls.update();
  }
}

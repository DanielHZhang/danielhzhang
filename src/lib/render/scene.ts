import * as THREE from 'three';
import { Timer } from 'three/addons/misc/Timer.js';
import starTextureUrl from '../assets/textures/star.png';
import { colors } from '$lib/config/constants';

export class App {
	renderer: THREE.WebGLRenderer;
	camera: THREE.PerspectiveCamera;
	textureLoader = new THREE.TextureLoader();
	scene = new THREE.Scene();
	timer = new Timer();
	private animationId: number = 0;
	private mouse: { x: number; y: number } = { x: 0, y: 0 };
	private windowExtents: { halfX: number; halfY: number };

	constructor(canvas: HTMLCanvasElement) {
		this.windowExtents = {
			halfX: window.innerWidth / 2,
			halfY: window.innerHeight / 2,
		};

		this.renderer = new THREE.WebGLRenderer({ alpha: true, canvas });
		this.renderer.setClearColor(new THREE.Color(colors.ground));
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		this.scene.fog = new THREE.FogExp2(0x000000, 0.001);

		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
		this.camera.position.z = 5;

		const starTexture = this.textureLoader.load(starTextureUrl);
		starTexture.colorSpace = THREE.SRGBColorSpace;
		const material = new THREE.PointsMaterial({
			size: 2,
			sizeAttenuation: true,
			map: starTexture,
			depthTest: false,
			alphaTest: 0.5,
			transparent: true,
		});
		material.color.setHex(0xa0c9f4, THREE.SRGBColorSpace);

		const geometry = new THREE.BufferGeometry();
		const vertices: number[] = [];
		for (let i = 0; i < 1000; i += 1) {
			for (let j = 0; j < 3; j += 1) {
				const x = THREE.MathUtils.randFloatSpread(200);
				vertices.push(x);
			}
		}
		geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

		const particles = new THREE.Points(geometry, material);
		this.scene.add(particles);

		window.addEventListener('resize', this.onWindowResize);
		document.addEventListener('pointermove', this.onPointerMove);
	}

	start() {
		this.timer.reset();
		this.render();
	}

	stop() {
		cancelAnimationFrame(this.animationId);
	}

	render = (timestamp?: number) => {
		// Request animation frame before update
		this.animationId = requestAnimationFrame(this.render);
		this.timer.update(timestamp);
		const deltaTime = this.timer.getDelta();

		// Perform frame updates
		this.camera.position.x += (this.mouse.x - this.camera.position.x) * 0.005 * deltaTime;
		this.camera.position.y += (-this.mouse.y - this.camera.position.y) * 0.005 * deltaTime;
		this.camera.lookAt(this.scene.position);

		// Render scene
		this.renderer.render(this.scene, this.camera);
	};

	private onPointerMove = (event: MouseEvent) => {
		this.mouse.x = event.clientX - this.windowExtents.halfX;
		this.mouse.y = event.clientY - this.windowExtents.halfY;
	};

	private onWindowResize = () => {
		this.windowExtents.halfX = window.innerWidth / 2;
		this.windowExtents.halfY = window.innerHeight / 2;
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	};

	dispose = () => {
		window.removeEventListener('resize', this.onWindowResize);
		document.removeEventListener('pointermove', this.onPointerMove);
		cancelAnimationFrame(this.animationId);

		const disposeMaterial = (material: THREE.Material) => {
			for (const key in material) {
				const value = (material as any)[key];
				if (value && value instanceof THREE.Texture) {
					value.dispose();
				}
			}
			material.dispose();
		};
		this.scene.traverse((object) => {
			if (object instanceof THREE.Mesh) {
				if (object.geometry) {
					object.geometry.dispose();
				}
				if (Array.isArray(object.material)) {
					object.material.forEach((material) => {
						disposeMaterial(material);
					});
				} else if (object.material) {
					disposeMaterial(object.material);
				}
			}
		});
		this.timer.dispose();
		this.renderer.dispose();
	};
}

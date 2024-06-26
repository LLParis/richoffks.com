document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to RichOffKs - 3D Model Test');

    const canvasContainer = document.getElementById('canvasContainer');
    if (!canvasContainer) {
        console.error('Canvas container not found');
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasContainer.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    const loader = new THREE.GLTFLoader();
    loader.load('models/lamborghini_huracan_twin_turbo_lost.glb', (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);  // Adjust the scale as needed
        scene.add(model);

        function animate() {
            requestAnimationFrame(animate);
            model.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();
    }, undefined, (error) => {
        console.error('An error happened while loading the model:', error);
    });

    camera.position.z = 5;
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to RichOffKs');

    const canvasContainer = document.getElementById('canvasContainer');
    if (!canvasContainer) {
        console.error('Canvas container not found');
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 300, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 300);
    canvasContainer.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    const loader = new THREE.GLTFLoader();
    loader.load('models/revolver_magnum_357.glb', (gltf) => {
        const model = gltf.scene;
        model.scale.set(2, 2, 2); // Scale the model
        scene.add(model);

        function animate() {
            requestAnimationFrame(animate);
            model.rotation.x += 0.01;
            model.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();
    }, undefined, (error) => {
        console.error('An error happened while loading the model:', error);
    });

    camera.position.z = 5;
});

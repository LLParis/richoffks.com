document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to RichOffKs');

    const canvasContainer = document.getElementById('canvasContainer');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    load3DModel();
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(canvasContainer);
    } else {
        load3DModel();
    }

    function load3DModel() {
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

        canvasContainer.classList.add('lazyloaded');
    }

    // Initialize Slick carousel
    $('.carousel').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
});


        // Three.js basic setup
        let scene, camera, renderer, controls;

        function init() {
            // Scene
            scene = new THREE.Scene();

            // Camera
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 5);

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('three-container').appendChild(renderer.domElement);

            // Controls
            controls = new THREE.OrbitControls(camera, renderer.domElement);

            // Add images as textures on planes
            const textureLoader = new THREE.TextureLoader();
            const img1 = textureLoader.load('medicina-estetica.png');
            const img2 = textureLoader.load('medicina-estetica-2.jpg');
            const img3 = textureLoader.load('medicina-estetica-3.jpg');

            // Create planes
            const geometry = new THREE.PlaneGeometry(2, 2);
            const material1 = new THREE.MeshBasicMaterial({ map: img1 });
            const material2 = new THREE.MeshBasicMaterial({ map: img2 });
            const material3 = new THREE.MeshBasicMaterial({ map: img3 });

            const plane1 = new THREE.Mesh(geometry, material1);
            const plane2 = new THREE.Mesh(geometry, material2);
            const plane3 = new THREE.Mesh(geometry, material3);

            plane1.position.set(-3, 0, 0);
            plane2.position.set(0, 0, 0);
            plane3.position.set(3, 0, 0);

            scene.add(plane1);
            scene.add(plane2);
            scene.add(plane3);

            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            }

            animate();
        }

        // Resize handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Initialize the scene
        init();

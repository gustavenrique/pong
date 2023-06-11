import { loading } from '/assets/js/main.js';

loading(true)

const canvas = document.querySelector('.three')
canvas.addEventListener('mousewheel', e => e.preventDefault())
canvas.addEventListener('mouseenter', () => canvas.style.cursor = 'grab')
canvas.addEventListener('mousedown', () => canvas.style.cursor = 'grabbing')
canvas.addEventListener('mouseup', () => canvas.style.cursor = 'grab')

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x1a2935)

// lights
const spotLight = new THREE.SpotLight(0xffffff, 4)
scene.add(spotLight)

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, -2, -2);
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xffffff, 1);
pointLight2.position.set(0, 2, -2);
scene.add(pointLight2);

const dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
dirLight.position.set( 0, 2, 10 );
scene.add( dirLight );

// camera
let camera
const perspective = () => {
    camera = new THREE.PerspectiveCamera(30, innerWidth/innerHeight, .1, 1000)
    camera.position.set(2, 1, 2)

    scene.add(camera)
}

perspective()

// rendering
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })

const rendering = () => {
    renderer.toneMapping = THREE.ReinhardToneMapping
    renderer.toneMappingExposure = 3
    renderer.shadowMap.enabled = true
    renderer.setSize(innerWidth, innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.outputEncoding = THREE.sRGBEncoding
}

rendering()

// orbit controls
let controls
const controling = () => {
    controls = new THREE.OrbitControls( camera, renderer.domElement)
    controls.autoRotate = true
    controls.autoRotateSpeed = 5
}

controling()

// responsiveness
window.addEventListener('resize', () => {
    rendering()
    perspective()
    controling()
})

// loading the 3D model
new THREE.GLTFLoader().load('/assets/3d/pongcoin.glb', 
    glb => {
        scene.add(glb.scene)
        loading(false)
    },

    bytes => console.log((bytes.loaded/bytes.total * 100).toFixed(2) + '% loaded'),

    err => console.error(err)
)

// the animation loop itself
const animate = () => {
    controls.update()
    renderer.render(scene, camera)

    requestAnimationFrame(animate)
}

animate()
'use strict';

var _g3d = require('g3d');

var _g3d2 = _interopRequireDefault(_g3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myCanvas = document.getElementById('myCanvas');
var canDemo = run(_g3d2.default, myCanvas);
var time = setInterval(function () {
    canDemo();
}, 100);

function run(G3D, canvas) {
    // create 3d engine
    var engine = new G3D.Engine(canvas);

    // create a scene
    var scene = new G3D.Scene(engine);

    // create camera
    var camera = new G3D.ArcRotateCamera(scene);
    camera.alpha = 45;
    camera.beta = 30;
    camera.radius = 12;
    camera.fov = 60;

    // create 3 lights
    var light1 = new G3D.DirectionalLight(scene);
    light1.direction.x = -1;
    light1.direction.y = 0;
    light1.direction.z = 1;

    var light2 = new G3D.HemisphereLight(scene);

    // create mesh
    var mesh = G3D.MeshBuilder.createCube(scene, 6);

    Object.assign(mesh.materials.default.diffuseColor, { r: 200, g: 100, b: 100 });
    Object.assign(mesh.materials.default.specularColor, { r: 200, g: 100, b: 100 });
    mesh.materials.default.glossiness = 10;

    return function () {
        mesh.rotation.y += 1;
        console.log('mesh.rotation.y', mesh.rotation.y);
        scene.render();
    };
}
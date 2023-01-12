import {imageTargetPortalComponent} from './components/image-target-portal'

import {characterMoveComponent} from './components/character-movement'

import {navMeshComponent} from './components/nav-mesh'

import {myHiderMaterialComponent} from './components/hider-material'

import {resetButtonComponent} from './components/reset-character'
import * as AFRAME from 'aframe';
import './main.css'

AFRAME.registerComponent('image-target-portal', imageTargetPortalComponent())
AFRAME.registerComponent('character-move', characterMoveComponent)
AFRAME.registerComponent('navmesh-constraint', navMeshComponent)
AFRAME.registerComponent('my-hider-material', myHiderMaterialComponent)
AFRAME.registerComponent('reset-button', resetButtonComponent)


function PortalAR() {
    return (

        <>
<div id="overlay" style="z-index: 2">
    <h3>DRAG TO MOVE</h3>
  </div>
  <div id="recenterButtonContainer">
    {/* <img src="./assets/images/recenter.png"> */}
  </div>
  <a-scene
    reset-button
    landing-page
    xrextras-loading
    xrextras-gesture-detector
    xrextras-runtime-error
    renderer="colorManagement:true"
    gltf-model="dracoDecoderPath: https://cdn.8thwall.com/web/aframe/draco-decoder/"
    xrweb>
    
    <a-assets>
      <a-asset-item id="sky" src="assets/models/sky.glb"></a-asset-item>
      <a-asset-item id="robot_model" src="assets/models/robot.glb"></a-asset-item>
      <a-asset-item id="hider-wall" src="assets/models/hider-wall.glb"></a-asset-item>
      <a-asset-item id="border" src="assets/models/border.glb"></a-asset-item>
      <a-asset-item id="navmesh-glb" src="./assets/models/nav-mesh.glb"></a-asset-item>
      <a-asset-item id="model-glb" src="./assets/models/environment-model.glb"></a-asset-item>
    </a-assets>
    
    <a-camera id="camera" position="0 1 1"></a-camera>
    
    <a-entity image-target-portal="name: image-target">
    <a-entity
      light="
        type: directional;
        shadowBias: -0.0001
        intensity: 0.65;
        castShadow: true;
        shadowMapHeight:2048;
        shadowMapWidth:2048;
        shadowCameraTop: 20;
        shadowCameraBottom: -20;
        shadowCameraRight: 20;
        shadowCameraLeft: -20;
        target: #model"
      xrextras-attach="target: model; offset: 8 15 4"
      position="1 4.3 2.5"
      shadow>
    </a-entity>
    <a-light type="ambient" intensity="0.4"></a-light>
    <a-entity gltf-model="#border"></a-entity>
    <a-entity gltf-model="#hider-wall" my-hider-material></a-entity>
    <a-entity class="navmesh" gltf-model="#navmesh-glb" visible="false" scale="0.25 0.25 0.25" position="0 -.7 0"></a-entity>
    <a-entity id="model" gltf-model="#model-glb" shadow scale="0.25 0.25 0.25" position="0 -.7 0"></a-entity>
    <a-entity
      id="character"
      navmesh-constraint="navmesh:.navmesh; fall: 2; height: 0;"
      character-move
      gltf-model="#robot_model"
      visible="false"
      scale="0.08 0.08 0.08"
      position="0 -.7 -0.5"
      shadow>
    </a-entity>
      
    <a-entity gltf-model="#sky"></a-entity>
      
    </a-entity>
    
  </a-scene>
        </>
      
    );
}
PortalAR();

export default PortalAR;
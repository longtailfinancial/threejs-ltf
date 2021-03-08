import React, {useRef, useState} from "react";
//R3F
import {Canvas, useFrame} from "react-three-fiber";
// Deai - R3F
import {softShadows, MeshWobbleMaterial, OrbitControls} from "drei";
//Components
// Styles
import "./App.scss";
// React Spring
import {useSpring, a} from "react-spring/three";

// import SpinningMesh from "./components/SpinningMeshWabble/"
import SpinningMeshWobble from "./scenes/SpinningMeshWobble/"
import SunshineCubes from "./scenes/SunshineCubes/"
// import GLTFExample from "./scenes/GLTFExample/"

// soft Shadows
softShadows();

const App = () => {
  return (
    <>
      {/* <SpinningMeshWobble /> */}
      <SunshineCubes />
    </>
  );
};

export default App;


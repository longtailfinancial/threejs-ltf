import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import {Canvas} from "react-three-fiber";
import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";

const SunshineCubes = () => {
  return (
    <>
      <Canvas
        id="SunshineCubes"
      >
        <Cubes />
        <Lights />
        <Environment />
      </Canvas>
    </>
  );
}

export default SunshineCubes;


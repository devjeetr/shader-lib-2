import * as Immutable from "immutable";
import * as R from "ramda";

import {
  bindVao,
  createProgramAndCompileShaders,
  createVao,
  drawArrays,
  fetchContext,
  logState,
  setViewPort,
  useProgram,
  configureAttribute,
  initAttribute,
  initUniform,
  updateUniform,
  createBuffer,
  bindBuffer,
  setBufferData
} from "./GPX/Commands/core";
import { fragmentShader, vertexShader } from "./demos/shaders/hello_world";

import { GPX } from "./GPX/shader";
// import { initAttribute, configureAttribute } from "./GPX/Commands/attribute";
// import { initUniform, updateUniform } from "./GPX/Commands/uniform";
// import { createBuffer, bindBuffer, setBufferData } from "./GPX/Commands/buffer";

const canvas = document.createElement("canvas");

document.body.appendChild(canvas);

const gl = canvas.getContext("webgl2");
gl.canvas.height = 500;
gl.canvas.width = 500;
canvas.style.height = "500px";
canvas.style.width = "500px";

const initProgram = GPX.Compose(
  fetchContext(canvas),
  createProgramAndCompileShaders({ vs: vertexShader, fs: fragmentShader }),
  useProgram(),
  createVao(),
  bindVao()
);

const state = GPX(
  initProgram(),
  initAttribute("a_position", {size: 2}),
  initUniform("u_resolution"),
  updateUniform("u_resolution", (gl: WebGLRenderingContext, location: WebGLUniformLocation) => {
    gl.uniform2fv(location, [500, 500])
  }),
  GPX.pipeFirst("a_position", createBuffer, bindBuffer, [
    setBufferData,
    new Float32Array([250, 250])
  ]),
  // setBufferData("a_position", new Float32Array([0.5, 0.5])),
  configureAttribute("a_position"),
  setViewPort(),
  drawArrays({ count: 1 })
);


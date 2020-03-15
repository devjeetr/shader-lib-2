import * as Immutable from "immutable";
import * as R from "ramda";

import { bindBuffer, bindVao, configureAttribute, createBuffer, createProgramAndCompileShaders, createVao, drawArrays, fetchContext, initAttribute, logState, setBufferData, setViewPort, useProgram } from "./GPX/Commands/core";
import { fragmentShader, vertexShader } from "./demos/shaders/hello_world";

import { GL_VERTEX_ARRAY_BINDING } from "./GPX/webgl/constants";
import { GPX } from "./GPX/shader";
import { createProgramWithShaders } from "./GPX/utils";
import {produce} from "immer";

const canvas = document.createElement("canvas");

document.body.appendChild(canvas);

const gl = canvas.getContext("webgl2");
gl.canvas.height = 500;
gl.canvas.width = 500;
canvas.style.height = "500px";
canvas.style.width = "500px";

// const state: any = {
//   a: 22,
// }
// // @ts-ignore
// const nextState = produce(state, (draftState) => {
//   draftState.a = 22;
// })
GPX(
    fetchContext(canvas),
    createProgramAndCompileShaders({vs: vertexShader, fs: fragmentShader}),
    useProgram(),
    createVao(),
    bindVao(),
    initAttribute("a_position"),
    createBuffer("a_position"),
    bindBuffer("a_position"),
    setBufferData("a_position", new Float32Array([0.5, 0.5])),
    configureAttribute("a_position", {size: 2}),
    setViewPort(),
    drawArrays({count: 1})
);
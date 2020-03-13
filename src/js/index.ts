import { DrawConfigTypes } from "./GPX/primitives";
import { createApp } from "./GPX/shader";
import { hello_world_demo } from "./demos/hello_world";
import { instanced_triangles_demo } from "./demos/instanced_trianges";

const canvas = document.createElement("canvas");

document.body.appendChild(canvas);

const gl = canvas.getContext("webgl2");
gl.canvas.height = 500;
gl.canvas.width = 500;
canvas.style.height = "500px";
canvas.style.width = "500px";

instanced_triangles_demo(gl);
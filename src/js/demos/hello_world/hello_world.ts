import {fragmentShader, vertexShader} from './shaders';

import { DrawConfigTypes } from "../../GPX/primitives";
import { createApp } from "../../GPX/shader";

export const hello_world_demo = (gl: WebGL2RenderingContext) => {

const drawTriangle = createApp({
    gl,
    vertexShader,
    fragmentShader,
    attributes: [
      {
        name: "a_position",
        target: gl.ARRAY_BUFFER,
        data: (_, { data }) => {
          return new Float32Array(data);
        },
        size: 2,
        type: gl.FLOAT,
        normalized: false,
        stride: 0,
        offset: 0,
        usage: gl.STATIC_DRAW
      }
    ],
    uniforms: [
      {
        name: "u_offset",
        data: (_, { offset }) => {
          return offset;
        },
        type: "uniform4fv"
      }
    ],
    draw: {
      kind: DrawConfigTypes.drawArrays,
      mode: gl.TRIANGLES,
      first: 0,
      count: 3,
    }
  });
  
  drawTriangle({ data: [0, 0, 0, 0.5, 0.3, 0], offset: [0.3, 0.2, 0, 0] });
}
  
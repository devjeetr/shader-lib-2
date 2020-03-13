import { fragmentShader, vertexShader } from "./shaders";

import { DrawConfigTypes } from "../../GPX/primitives";
import { createApp } from "../../GPX/shader";
export const circles_demo = (gl: WebGL2RenderingContext) => {
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
    draw: {
      kind: DrawConfigTypes.drawArrays,
      mode: gl.TRIANGLES,
      first: 0,
      count: 6
    }
  });
  // prettier-ignore
  drawTriangle({ data: [-0.5, -0.5, // triangle 0
                        0.5, 0.5, 
                        0.5, -0.5,
                        -0.5, -0.5,
                        0.5, 0.5,
                        -0.5, 0.5], 
    offset: [0.0, 0.0, 
              0, 0] });
};

// const createRect = (x: number, y: number, height: number, width: number) => {
//     return [

//     ]
// }

import { fragmentShader, vertexShader } from "./shaders";

import { DrawConfigTypes } from "../../GPX/primitives";
import { GPX } from "../../GPX/shader";

export const circles_demo = (gl: WebGL2RenderingContext) => {
  const drawTriangle = GPX({
    gl,
    fragmentShader,
    vertexShader,
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
  drawTriangle({ data: [-0.5, -0.5, // vertex 0
                        0.5, 0.5,   // vertex 1
                        0.5, -0.5,  //vertex 2
                        -0.5, 0.5   //vertex 3
                        ], 
    offset: [0.0, 0.0, 
              0, 0] });
};
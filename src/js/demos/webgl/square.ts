import { fragmentShader, vertexShader } from "../shaders/square";

import { createProgramWithShaders } from "../../GPX/utils";

export const square_demo = (gl: WebGL2RenderingContext) => {
    const program = createProgramWithShaders(gl, vertexShader, fragmentShader);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    const positionLoc = gl.getAttribLocation(program, "a_position");
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-0.5, -0.5, // triangle 0
        0.5, 0.5, 
        0.5, -0.5,
        -0.5, -0.5,
        0.5, 0.5,
        -0.5, 0.5]), gl.STATIC_DRAW);

    gl.vertexAttribPointer(positionLoc, 0, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
};
// export const circles_demo = (gl: WebGL2RenderingContext) => {
//   const drawTriangle = GPX({
//     gl,
//     vertexShader,
//     fragmentShader,
//     attributes: [
//       {
//         name: "a_position",
//         target: gl.ARRAY_BUFFER,
//         data: (_, { data }) => {
//           return new Float32Array(data);
//         },
//         size: 2,
//         type: gl.FLOAT,
//         normalized: false,
//         stride: 0,
//         offset: 0,
//         usage: gl.STATIC_DRAW
//       }
//     ],
//     draw: {
//       kind: DrawConfigTypes.drawArrays,
//       mode: gl.TRIANGLES,
//       first: 0,
//       count: 6
//     }
//   });
//   // prettier-ignore
//   drawTriangle({ data: [-0.5, -0.5, // triangle 0
//                         0.5, 0.5, 
//                         0.5, -0.5,
//                         -0.5, -0.5,
//                         0.5, 0.5,
//                         -0.5, 0.5], 
//     offset: [0.0, 0.0, 
//               0, 0] });
// };

// const createRect = (x: number, y: number, height: number, width: number) => {
//     return [

//     ]
// }

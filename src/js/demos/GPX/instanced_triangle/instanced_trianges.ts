// import {fragmentShader, vertexShader} from '../../shaders/instanced_traingles';

// import { DrawConfigTypes } from "../../../GPX/primitives";
// import { GPX } from "../../../GPX/shader";

// export const instanced_triangles_demo = (gl: WebGL2RenderingContext) => {
//   const draw = GPX({
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
//       },
//       {
//         name: "a_offset",
//         target: gl.ARRAY_BUFFER,
//         data: (_, { offset }) => {
//           return new Float32Array(offset);
//         },
//         size: 2,
//         type: gl.FLOAT,
//         normalized: false,
//         stride: 0,
//         offset: 0,
//         usage: gl.DYNAMIC_DRAW,
//         divisor: 1
//       }
//     ],
//     draw: {
//       kind: DrawConfigTypes.drawArraysInstanced,
//       mode: gl.TRIANGLES,
//       first: 0,
//       count: 3,
//       instanceCount: 5
//     }
//   });

//   draw({
//     data: [0, 0, 0, 0.5, 0.3, 0],
//     offset: [0.3, 0.2, -0.9, -0.2, -0.2, -0.1, 0.5, 0.2, -0.4, -0.2]
//   });
// };

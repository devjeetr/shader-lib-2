// import { constructBuffer } from "../GPX/buffer/buffer";

// describe("buffer tests", () => {
//     it("should only update specified properties", () => {
//         const data = new Float32Array([0.4, 0.2, 0.5, 0.9, 0.4, 0.7]);
//         const createBuffer = jest.fn();
//         const gl = {};
//         createBuffer.bind(gl);

//         // @ts-ignore
//         const bufferState = constructBuffer(gl, {
//             data: [2, 3, 4],
//             target: 0,
//             usage: 0,
//         });
        
//         expect(createBuffer).toBeCalled();
//     })
// })
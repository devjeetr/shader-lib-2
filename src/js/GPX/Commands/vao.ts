import { createResolver } from "./helpers";
import { ProgramState } from "./types";

export const createVao = () => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl } = state;
    state.vao = gl.createVertexArray();
  })
});

export const bindVao = () => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, vao } = state;

    gl.bindVertexArray(vao);
  })
});

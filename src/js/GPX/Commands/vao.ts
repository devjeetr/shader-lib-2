import { Command, ProgramState } from "./types";

import { createResolver } from "./helpers";

export const createVao = (): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl } = state;
    state.vao = gl.createVertexArray();
  })
});

export const bindVao = (): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, vao } = state;

    gl.bindVertexArray(vao);
  })
});

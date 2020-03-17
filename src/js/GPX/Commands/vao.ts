import { Command } from "./types";
import { ProgramState } from "../GPX";
import { createResolver } from "./helpers";

export const createVao = (): Command =>
  createResolver((state: ProgramState) => {
    const { gl } = state;
    state.vao = gl.createVertexArray();
  });

export const bindVao = (): Command =>
  createResolver((state: ProgramState) => {
    const { gl, vao } = state;

    gl.bindVertexArray(vao);
  });

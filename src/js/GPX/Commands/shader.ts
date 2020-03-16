import { Command, ProgramState } from "./types";

import { createProgramWithShaders } from "../utils";
import { createResolver } from "./helpers";
import { instrumentContext } from "../webgl/instrumenter";

export interface ShaderSources {
  vs: string;
  fs: string;
}

/**
 * Creates a command that:
 * * compiles the provided vertex and fragment shaders,
 * * creates a new program
 * * links the compiled shaders to the program
 * @param sources 
 * @param sources.vs The source code for the vertex shader
 * @param sources.fs the source code for the fragment shader
 * @returns a command
 */
export const createProgramAndCompileShaders = ({ vs, fs }: ShaderSources): Command => {
  return {
    opts: {},
    resolve: createResolver((state: ProgramState) => {
      const { gl } = state;
      const program = createProgramWithShaders(gl, vs, fs);
      state.program = program;
    })
  };
};

export const fetchContext = (canvas: HTMLCanvasElement): Command => {
  return {
    opts: {},
    resolve: createResolver((state: ProgramState) => {
      const gl = instrumentContext(canvas.getContext("webgl2"));
      // TODO Check if gl was successfully retained
      state.gl = gl;
    })
  };
};

export const useProgram = (): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, program } = state;

    gl.useProgram(program);
  })
});

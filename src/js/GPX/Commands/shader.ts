import { createResolver } from "./helpers";
import { ProgramState } from "./types";
import { createProgramWithShaders } from "../utils";
import { instrumentContext } from "../webgl/instrumenter";

export interface ShaderSources {
  vs: string;
  fs: string;
}

export const createProgramAndCompileShaders = ({ vs, fs }: ShaderSources) => {
  return {
    opts: {},
    resolve: createResolver((state: ProgramState) => {
      const { gl } = state;
      const program = createProgramWithShaders(gl, vs, fs);
      state.program = program;
    })
  };
};

export const fetchContext = (canvas: HTMLCanvasElement) => {
  return {
    opts: {},
    resolve: createResolver((state: ProgramState) => {
      const gl = instrumentContext(canvas.getContext("webgl2"));
      // TODO Check if gl was successfully retained
      state.gl = gl;
    })
  };
};

export const useProgram = () => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, program } = state;

    gl.useProgram(program);
  })
});

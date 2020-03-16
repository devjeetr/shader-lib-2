import { Command, ProgramState } from "./types";

import { createResolver } from "./helpers";

/**
 * Fetches the given uniform's location.
 * @param name The name of the uniform to be initialized
 */
export const initUniform = (name: string): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, program } = state;
    const location = gl.getUniformLocation(program, name);
    console.log(location);
    if (location === null) {
      console.error(`Uniform location not found: ${name}`);
    }
    state.uniforms[name] = {
      location
    };
  })
});

export type UniformUpdateType =
    "uniform1f"
  | "uniform1ui"
  | "uniform2ui"
  | "uniform3ui"
  | "uniform4ui"
  | "uniform1fv"
  | "uniform2fv"
  | "uniform3fv"
  | "uniform4fv"
  | "uniform1iv"
  | "uniform2iv"
  | "uniform3iv"
  | "uniform4iv"
  | "uniform1uiv"
  | "uniform2uiv"
  | "uniform3uiv"
  | "uniform4uiv";

export interface UniformUpdateConfig {
  type: UniformUpdateType;
  data: any;
  offset?: number;
  length?: number;
}
/**
 * Takes a callback that is provided the
 * WebGL context and uniform location, and
 * must update the uniform.
 * @param name the name of the uniform
 * @param fn the function used to update the uniform
 */
export const updateUniform = (
  name: string,
  { type, data, offset, length }: UniformUpdateConfig
): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, uniforms } = state;
    const location = uniforms[name].location;

    switch (type) {
      case "uniform1ui":
      case "uniform1f":
        gl[type](location, data[0]);
        break;
      case "uniform2ui":
        gl.uniform2ui(location, data[0], data[1]);
        break;
      case "uniform3ui":
        gl.uniform3ui(location, data[0], data[1], data[2]);
        break;
      case "uniform4ui":
        gl.uniform4ui(location, data[0], data[1], data[2], data[3]);
        break;
      case "uniform1fv":
      case "uniform2fv":
      case "uniform3fv":
      case "uniform4fv":
      case "uniform1iv":
      case "uniform2iv":
      case "uniform3iv":
      case "uniform4iv":
      case "uniform1uiv":
      case "uniform2uiv":
      case "uniform3uiv":
      case "uniform4uiv":
        gl[type](location, data, offset,);
        break;
      default:
        throw new Error(`Invalid uniform update type passed: ${type}`);
    }
  })
});


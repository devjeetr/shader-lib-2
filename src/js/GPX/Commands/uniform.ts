import { createResolver } from "./helpers";
import { ProgramState } from "./types";

/**
 * Fetches the given uniform's location.
 * @param name The name of the uniform to be initialized
 */
export const initUniform = (name: string) => ({
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

/**
 * Takes a callback that is provided the 
 * WebGL context and uniform location, and
 * must update the uniform.
 * @param name the name of the uniform
 * @param fn the function used to update the uniform
 */
export const updateUniform = (name: string, fn: Function) => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, uniforms } = state;
    fn(gl, uniforms[name].location);
  })
});

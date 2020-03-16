import { Command, ProgramState } from "./types";

import GPX from "../GPX";
import { createResolver } from "./helpers";

export type BufferOptions = Omit<Buffer, "bufferHandle">;

/**
 *
 * Generates a command that creates a new Buffer.
 * @param name A unique string name for the buffer.
 * @param opts Optional arguments to create the buffer.
 * @returns the generated command
 */
export const createBuffer = (name: string, opts?: BufferOptions): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl } = state;
    const bufferHandle = gl.createBuffer();

    state.buffers[name] = {
      handle: bufferHandle,
      target: gl.ARRAY_BUFFER,
      usage: gl.STATIC_DRAW,
      ...opts
    };
  })
});

/**
 * Generates a command that binds the given buffer to
 * the buffer's target.
 * @param name The name of the buffer to be bound.
 * @returns the newly generated command
 *
 */
export const bindBuffer = (name: string): Command => {
  return {
    resolve: createResolver((state: ProgramState) => {
      const { gl, buffers } = state;

      if (!buffers[name]) {
        throw new Error(`Buffer of name ${name} does has not been created`);
      }

      const buffer = buffers[name];
      gl.bindBuffer(buffer.target, buffer.handle);
    })
  };
};

/**
 * Creates a command that transfers the given data to
 * the buffer with the given name.
 * @param name the name of the buffer
 * @param data the data to be transmitted to the buffer
 */
export const setBufferData = (name: string, data: any): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, buffers } = state;
    const buffer = buffers[name];
    gl.bufferData(buffer.target, data, buffer.usage);
  })
});

export const buffer = (name: string, data?: any, opts?: BufferOptions) =>
  GPX.Compose(
    createBuffer(name, opts),
    bindBuffer(name),
    setBufferData(name, data)
  )();

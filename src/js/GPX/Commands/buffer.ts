import { createResolver } from "./helpers";
import { ProgramState } from "./types";

export type BufferOptions = Omit<Buffer, "bufferHandle">;
export const createBuffer = (name: string, opts?: BufferOptions) => ({
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

export const bindBuffer = (name: string) => {
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

export const setBufferData = (name: string, data: any) => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, buffers } = state;
    const buffer = buffers[name];
    gl.bufferData(buffer.target, data, buffer.usage);
  })
});

import { Command, ProgramState } from "./types";
import { original, produce } from "immer";

import { createProgramWithShaders } from "../utils";
import { instrumentContext } from "../webgl/instrumenter";

const createResolver = (fn: (state: ProgramState) => void) => (
  state: ProgramState
): ProgramState => produce(state, (draftState: ProgramState) => fn(draftState));

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

export const logState = (message: string): Command => ({
  resolve: createResolver((state: ProgramState) => {
    console.log(message);
    console.log(original(state));
  })
});

export const useProgram = () => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, program } = state;

    gl.useProgram(program);
  })
});

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

export const initAttribute = (name: string) => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, program, attributes } = state;
    const location = gl.getAttribLocation(program, name);

    if (location === -1) {
      throw new Error(`getAttribLocation returned -1 from attribute ${name}.`);
    }

    attributes[name] = {
      location
    };
  })
});

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
    console.log(data);
    gl.bufferData(buffer.target, data, buffer.usage);
  })
});

export interface VertexConfigOptions {
  size: number;
  type?: GLenum;
  divisor?: number;
  offset?: number;
  stride?: number;
  normalized?: boolean;
}

export const configureAttribute = (
  name: string,
  opts: VertexConfigOptions
) => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, attributes } = state;
    const attribute = attributes[name];

    gl.enableVertexAttribArray(attribute.location);
    const defaultOptions = {
      type: gl.FLOAT,
      stride: 0,
      offset: 0,
      divisor: 0,
      normalized: false
    };

    const options = { ...defaultOptions, ...opts };

    gl.vertexAttribPointer(
      attribute.location,
      options.size,
      options.type,
      options.normalized,
      options.stride,
      options.offset
    );
  })
});

export interface ViewPortConfig {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export const setViewPort = (config: ViewPortConfig = {}) => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl } = state;
    gl.viewport(
      config.x || 0,
      config.y || 0,
      config.width || gl.canvas.width,
      config.height || gl.canvas.height
    );
  })
});

export interface DrawArraysConfig {
    type?: GLenum,
    first?: number,
    count?: number,
}
export const drawArrays = (config: DrawArraysConfig = {}) => ({
    resolve: createResolver((state: ProgramState) => {
      const { gl } = state;
      console.log("drawing!");
      gl.drawArrays(
          config.type || gl.POINTS,
          config.first || 0,
          config.count,
      )
    })
  });
  

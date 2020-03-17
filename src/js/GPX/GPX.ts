import * as R from "ramda";

import {
  Attributes,
  Buffers,
  Command,
  FrameBuffers,
  Textures,
  Uniforms
} from "./Commands/types";

import { instrumentContext } from "./webgl/instrumenter";

export * from "./resources/buffer";
export * from "./resources/framebuffer";
export * from "./resources/texture";

export * from "./Commands/core";

export const createProgramState = (): ProgramState => ({
  attributes: {},
  buffers: {},
  uniforms: {},
  textures: {},
  framebuffers: {}
});

export interface ProgramState {
  gl?: WebGL2RenderingContext;
  program?: WebGLProgram;
  vao?: WebGLVertexArrayObject;
  attributes: Attributes;
  uniforms: Uniforms;
  buffers: Buffers;
  textures: Textures;
  framebuffers: FrameBuffers;
}

const executeCommands = (state: ProgramState, ...commands: Array<Command>) => {
  for (let i = 0; i < commands.length; i++) {
    const nextState = commands[i](state);
    state = nextState;
  }

  return Object.freeze(state);
};

const GPX = (...commands: Array<Command>): ProgramState => {
  let state = createProgramState();
  return executeCommands(state, ...R.flatten(commands));
};

GPX.withState = (state: ProgramState) => (...commands: Array<Command>) =>
  executeCommands(state, ...R.flatten(commands));

GPX.Compose = (...commands: Array<Command>) => () => (state: ProgramState) =>
  executeCommands(state, ...commands); 

GPX.createState = (): ProgramState => createProgramState();

export type PipeCommands = any;
GPX.pipeFirst = (_: any, ...commands: PipeCommands) => {
  return commands.map((command: any) => {
    if (command instanceof Function) {
      return command(_);
    } else if (command instanceof Array) {
      if (!(command[0] instanceof Function)) {
        throw new Error("Invalid arguments passed to GPX.pipeFirst");
      }

      return command[0](_, ...(command as Array<any>).slice(1));
    }

    throw new Error("invalid args passed to pipeFirst");
  });
};

GPX.getContext = (canvas: HTMLCanvasElement) => {
  const gl = canvas.getContext("webgl2");
  return instrumentContext(gl);
};

export default GPX;

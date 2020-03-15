import {
  GL_ARRAY_BUFFER,
  GL_DYNAMIC_DRAW,
  GL_ELEMENT_ARRAY_BUFFER,
  GL_STATIC_DRAW
} from "../webgl/constants";

export interface ProgramState {
  gl?: WebGL2RenderingContext;
  program?: WebGLProgram;
  vao?: WebGLVertexArrayObject;
  attributes: Attributes;
  buffers: Buffers;
}

export interface Attributes {
  [key: string]: Attribute;
}

export type BufferTarget = GLenum;
export type BufferUsage = GLenum;
export interface Buffer {
  handle: WebGLBuffer;
  target: BufferTarget;
  usage: BufferUsage;
};

export interface Buffers {
  [key: string]: Buffer;
}
export interface Attribute {
  location: number;
}

export interface Command {
  opts?: any;
  resolve: (state: ProgramState) => ProgramState;
}

export type StateAndCache = [ProgramState, Cache];

export type CommandDispatcher = (...any: any[]) => Command;

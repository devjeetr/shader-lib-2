export interface ProgramState {
  gl?: WebGL2RenderingContext;
  program?: WebGLProgram;
  vao?: WebGLVertexArrayObject;
  attributes: Attributes;
  uniforms: Uniforms;
  buffers: Buffers;
}

export interface Uniform {
  location: WebGLUniformLocation;
}
export interface Uniforms {
  [key: string]: Uniform;
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
}

export interface Buffers {
  [key: string]: Buffer;
}
export interface Attribute {
  location: number;
  size: number;
  type: GLenum;
  offset: number;
  stride: number;
  normalized: boolean;
  divisor?: number;
}

export interface Command {
  opts?: any;
  resolve: (state: ProgramState) => ProgramState;
}

export type StateAndCache = [ProgramState, Cache];

export type CommandDispatcher = (...any: any[]) => Command;

import {
  GL_CLAMP_TO_EDGE,
  GL_LINEAR,
  GL_LINEAR_MIPMAP_LINEAR,
  GL_LINEAR_MIPMAP_NEAREST,
  GL_MIRRORED_REPEAT,
  GL_NEAREST,
  GL_NEAREST_MIPMAP_LINEAR,
  GL_NEAREST_MIPMAP_NEAREST,
  GL_REPEAT
} from "../webgl/constants";

import { BufferResource } from "../resources/buffer";
import { ProgramState } from "../GPX";

export interface Uniform {
  location: WebGLUniformLocation;
}
export interface Uniforms {
  [key: string]: Uniform;
}

export interface Attributes {
  [key: string]: Attribute;
}



export interface Buffers {
  [key: string]: BufferResource;
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

export interface FrameBuffer {
  handle: WebGLFramebuffer;
  attachment?: GLenum;
  level?: number;
}

export interface FrameBuffers {
  [key: string]: FrameBuffer;
}

export interface Texture {
  handle: WebGLTexture;
  height: number;
  width: number;
  format: GLenum;
  type: GLenum;
  level?: number;
  target?: GLenum;
  mag?: GL_LINEAR | GL_NEAREST;
  min?:
    | GL_LINEAR
    | GL_NEAREST
    | GL_LINEAR_MIPMAP_NEAREST
    | GL_NEAREST_MIPMAP_NEAREST
    | GL_NEAREST_MIPMAP_LINEAR
    | GL_LINEAR_MIPMAP_LINEAR;
  wrap_s?: GL_REPEAT | GL_CLAMP_TO_EDGE | GL_MIRRORED_REPEAT;
  wrap_t?: GL_REPEAT | GL_CLAMP_TO_EDGE | GL_MIRRORED_REPEAT;
}

export interface Textures {
  [key: string]: Texture;
}

export interface Command {
  opts?: any;
  resolve: (state: ProgramState) => ProgramState;
}

export type CommandDispatcher = (...any: any[]) => Command;

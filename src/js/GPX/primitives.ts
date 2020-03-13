export type GPXContextAndPropsConsumer<T> = (
  context: Context,
  props: GPXProps
) => T;

export interface GPXProps {
  [key: string]: any;
}

export enum DrawConfigTypes {
  drawArraysInstanced,
  drawArrays,
  base,
}

export interface DrawConfig {
  type: GLenum;
  first?: GLint;
  indexCount: GLsizei;
  kind: DrawConfigTypes;
}

/**
 * A draw config that specifies drawing instanced arrays.
 * Refer to MDN documentation for drawArraysInstanced.
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced
 */
export interface InstancedDrawArrayConfig extends DrawConfig {
  kind: DrawConfigTypes.drawArraysInstanced;
  instanceCount: GLsizei;
}

/**
 * Refer to MDN documentation for drawArrays:
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays
 */
export interface DrawArraysConfig extends DrawConfig {
  kind: DrawConfigTypes.drawArrays;
}

export interface Context {
  height?: number;
  width?: number;
  devicePixelRatio?: number;
}

export interface ProgramState {
  /** The webgl 2 rendering context */
  readonly gl: WebGL2RenderingContext;
  /** Reference to the current application's webgl program */
  readonly program: WebGLProgram;
  /** Holds the program's vertex attribute object */
  vao: WebGLVertexArrayObject; // TODO
  /** The active framebuffer of the shader program */
  fbos?: WebGLFramebuffer; // TODO investigate
  /** The list of AttributeStates of the current program */
  attributes?: Array<AttributeState>;
  /** List of uniforms of the current program */
  uniforms?: Array<UniformState>;
  /** Draw config */
  draw: InstancedDrawArrayConfig | DrawArraysConfig;
  /** The context of the current program, which contains things such
   *  as height, width, and overall global settings for the program.
   */
  context: Context;
}

export interface ShaderConfig {
  gl: WebGL2RenderingContext;
  vertexShader: string;
  fragmentShader: string;
  uniforms?: Array<Uniform>;
  attributes?: Array<Attribute>;
  draw: InstancedDrawArrayConfig | DrawArraysConfig;
}

/**
 *          Attributes
 */
export type AttributeSize = GLint;
export type AttributeType = GLenum;
export type AttributeData = ArrayBuffer;
export type AttributeNormalized = GLboolean;
export type AttributeStride = GLsizei;
export type AttributeOffset = GLintptr;
export type AttributeUsage = GLenum;
export type AttributeTarget = GLenum;
export type AttributeDivisor = GLint;

export interface ResolvedAttribute {
  size: AttributeSize;
  type: AttributeType;
  data: AttributeData;
  normalized: AttributeNormalized;
  stride: AttributeStride;
  offset: AttributeOffset;
  usage: AttributeUsage;
  target: AttributeTarget;
  divisor?: AttributeDivisor;
}

export interface AttributeState {
  public: Attribute;
  location: GLenum;
  buffer: WebGLBuffer;
  dirty: Boolean;
}

export type DynamicProperty<T> = T | GPXContextAndPropsConsumer<T>;

export interface Attribute {
  name: string;
  size: DynamicProperty<AttributeSize>;
  type: DynamicProperty<AttributeType>;
  data: DynamicProperty<AttributeData>;
  normalized: DynamicProperty<AttributeNormalized>;
  stride: DynamicProperty<AttributeStride>
  offset: DynamicProperty<AttributeOffset>
  usage: DynamicProperty<AttributeUsage>
  target: DynamicProperty<AttributeTarget>
  divisor?: DynamicProperty<AttributeDivisor>
}

export type AttributeUpdate = Omit<Attribute, "name">;

export type UniformType =
  | "uniform1f"
  | "uniform1fv"
  | "uniform1i"
  | "uniform1iv"
  | "uniform2f"
  | "uniform2fv"
  | "uniform2i"
  | "uniform2iv"
  | "uniform3f"
  | "uniform3fv"
  | "uniform3i"
  | "uniform3iv"
  | "uniform4f"
  | "uniform4fv"
  | "uniform4i"
  | "uniform4iv";

export type UniformData = Array<number>;
export interface Uniform {
  name: string;
  type: UniformType;
  data: UniformData | GPXContextAndPropsConsumer<UniformData>;
}

export interface UniformState {
  public: Uniform,
  location: WebGLUniformLocation;
  dirty: Boolean;
}

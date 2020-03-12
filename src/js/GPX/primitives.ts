export type GPXContextAndPropsConsumer<T> = (
  context: Context,
  props: GPXProps
) => T;

export interface GPXProps {
  [key: string]: any;
}

export interface DrawConfig {
  type: GLenum;
  offset?: GLint;
  count: GLsizei;
}

export interface Context {
  height?: number;
  width?: number;
  devicePixelRatio?: number;
}

export interface ProgramState {
  gl: WebGL2RenderingContext;
  program: WebGLProgram;
  vao: any; // TODO
  fbos?: WebGLFramebuffer; // TODO investigate
  attributes: Array<AttributeState>;
  uniforms?: Array<UniformState>;
  draw: DrawConfig;
  context: Context;
}

export interface ShaderConfig {
  gl: WebGL2RenderingContext;
  vertexShader: string;
  fragmentShader: string;
  uniforms?: Array<Uniform>;
  attributes?: Array<Attribute>;
  draw: DrawConfig;
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

export interface ResolvedAttribute {
  size: AttributeSize;
  type: AttributeType;
  data: AttributeData;
  normalized: AttributeNormalized;
  stride: AttributeStride;
  offset: AttributeOffset;
  usage: AttributeUsage;
  target: AttributeTarget;
}

export interface AttributeState {
  public: Attribute;
  location: GLenum;
  buffer: WebGLBuffer;
  dirty: Boolean;
}

export interface Attribute {
  name: string;
  size: AttributeSize | GPXContextAndPropsConsumer<GLint>;
  type: AttributeType | GPXContextAndPropsConsumer<GLenum>;
  data: AttributeData | GPXContextAndPropsConsumer<ArrayBuffer>;
  normalized: AttributeNormalized | GPXContextAndPropsConsumer<GLboolean>;
  stride: AttributeStride | GPXContextAndPropsConsumer<GLsizei>;
  offset: AttributeOffset | GPXContextAndPropsConsumer<GLintptr>;
  usage: AttributeUsage | GPXContextAndPropsConsumer<GLenum>;
  target: AttributeTarget | GPXContextAndPropsConsumer<GLenum>;
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

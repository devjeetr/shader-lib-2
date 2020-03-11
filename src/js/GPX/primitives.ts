export interface Uniform {
  initializer: string;
  name: string;
  data: number | Array<number> | Function;
}

export type GPXContextAndPropsConsumer<T> = (
  context: Context,
  props: GPXProps
) => T;

export interface GPXProps {
  [key: string]: any;
}

export interface AttributeState {
  public: Attribute;
  location: GLenum;
  buffer: WebGLBuffer;
}

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

export enum UpdateType {
  ATTRIBUTE_UPDATE
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
  uniforms?: Array<Uniform>;
  draw: DrawConfig;
  context: Context;

}

export type AttributeUpdate = Omit<Attribute, "name">;

export interface ShaderConfig {
  gl: WebGL2RenderingContext;
  vertexShader: string;
  fragmentShader: string;
  uniforms: Array<Uniform>;
  attributes: Array<Attribute>;
  draw: DrawConfig,
}

// export interface GPXInstance {
//   updateAttribute(name: string, stateConsumer: GPXPropsConsumer): number;
//   updateUniform(name: string, stateConsumer: GPXPropsConsumer): number;
// }

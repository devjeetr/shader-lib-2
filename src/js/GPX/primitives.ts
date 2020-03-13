export type PropUpdateDispatcher = (options: any) => void;
export interface PropUpdate {
  type: any,
  payload: any,
};


export type GPXContextAndPropsConsumer<T> = (
  context: Context,
  props: GPXProps,
  updateFn: PropUpdateDispatcher,
) => void;

export interface GPXProps {
  [key: string]: any;
}

export enum DrawConfigTypes {
  drawArraysInstanced,
  drawArrays,
  drawElements
}

export type DrawMode =
  | WebGL2RenderingContext["POINTS"]
  | WebGL2RenderingContext["LINE_STRIP"]
  | WebGL2RenderingContext["LINE_LOOP"]
  | WebGL2RenderingContext["LINES"]
  | WebGL2RenderingContext["TRIANGLE_STRIP"]
  | WebGL2RenderingContext["TRIANGLE_FAN"]
  | WebGL2RenderingContext["TRIANGLES"];

export type DrawConfig =
  | InstancedDrawArrayConfig
  | DrawArraysConfig
  | DrawElementsConfig;

/**
 * Refer to MDN documentation for drawArraysInstanced.
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced
 */
export interface InstancedDrawArrayConfig {
  kind: DrawConfigTypes.drawArraysInstanced;
  /** A GLenum specifying the type primitive to render */
  mode: DrawMode;
  /** A GLint specifying the starting index in the array of vector points. */
  first: GLint;
  /** A GLsizei specifying the number of indices to be rendered. */
  count: GLsizei;
  /** A GLsizei specifying the number of instances of the range of elements to execute. */
  instanceCount: GLsizei;
}

/**
 * Refer to MDN documentation for drawArrays:
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays
 */
export interface DrawArraysConfig {
  kind: DrawConfigTypes.drawArrays;
  /** A GLenum specifying the type primitive to render. */
  mode: DrawMode;
  /** A GLint specifying the starting index in the array of vector points. */
  first: GLint;
  /** A GLsizei specifying the number of indices to be rendered. */
  count: GLsizei;
}
/**
 * Refer to MDN documentation for drawArrays:
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements
 */
export interface DrawElementsConfig {
  kind: DrawConfigTypes.drawElements;
  mode: DrawMode;
  count: GLsizei;
  type:
    | WebGL2RenderingContext["UNSIGNED_BYTE"]
    | WebGL2RenderingContext["UNSIGNED_SHORT"]
    | WebGL2RenderingContext["UNSIGNED_INT"];
  offset: GLintptr;
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

export type BufferData = ArrayLike<number>;
export interface Buffer {
  data: DynamicProperty<BufferData>;
  target: DynamicProperty<AttributeTarget>;
  usage: DynamicProperty<AttributeUsage>;
};

export interface Buffers {
  [bufferName: string]: Buffer;
};

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
  public: Uniform;
  location: WebGLUniformLocation;
  dirty: Boolean;
}


export interface UpdateDescriptor {
  property: any,
  value: any,
}
export interface Update {
  type: string,
  payload: {
      resourceId: string, 
      descriptor: UpdateDescriptor
  }
}

export type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array;

export type TextureData = TypedArray;
export type TextureTarget = GLenum;
export type TextureFormat = GLenum;
export type TextureType = GLenum;

export interface TextureParameter {
    paramter: GLenum;
    value: GLfloat | GLint;
}

export type TextureParameters = Array<TextureParameter>;

export interface Texture {
  data: TextureData;
  width: number;
  height: number;
  target: TextureTarget;
  format: TextureFormat;
  type: TextureType;
  parameters: TextureParameters;
  //offset TODO
}

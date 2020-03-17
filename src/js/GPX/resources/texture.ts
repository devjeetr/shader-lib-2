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

export interface TextureResource {
  target: () => GLenum;
  handle: () => WebGLTexture;
  bind: (n: number) => void;
  init: () => void;
}

export interface TextureConfig {
  height?: number;
  width?: number;
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

export const texture = (
  gl: WebGL2RenderingContext,
  config: TextureConfig = {
    level: 0,
    target: gl.TEXTURE_2D,
    format: gl.RGBA,
    type: gl.UNSIGNED_BYTE
  }
) => {
  const handle = gl.createTexture();
    
  return {
    target: () => config.target,
    handle: () => handle,
    bind: (n: number) => {
      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(config.target, handle)},
    init: () => {
        gl.bindTexture(config.target, handle);
        
        // set wrap_s
        if (config.wrap_s) {
            gl.texParameteri(config.target, gl.TEXTURE_WRAP_S, config.wrap_s);
        }
        // set wrap_t
        if (config.wrap_t) {
            gl.texParameteri(config.target, gl.TEXTURE_WRAP_T, config.wrap_t);
        }
        // set mag
        if (config.mag) {
            gl.texParameteri(config.target, gl.TEXTURE_MAG_FILTER, config.mag);
        }
        // set min
        if (config.min) {
            gl.texParameteri(config.target, gl.TEXTURE_MIN_FILTER, config.min);
        }

        gl.texImage2D(
          config.target,
          config.level,
          config.format,
          config.width || gl.canvas.width,
          config.height || gl.canvas.height,
          0,
          config.format,
          config.type,
          null
        );
    },
  };
};

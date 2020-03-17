
export type BufferTarget = GLenum;
export type BufferUsage = GLenum;


export interface BufferConfig {
  target?: BufferTarget;
  usage?: BufferUsage;
}

export interface BufferResource {
  bind: () => void;
  bufferData: (data: any) => void;
}

export const buffer = (
  gl: WebGL2RenderingContext,
  config: BufferConfig = { target: gl.ARRAY_BUFFER, usage: gl.STATIC_DRAW }
): BufferResource => {
  let buffer = gl.createBuffer();

  return {
      /**
       * Binds the buffer to the provided target.
       */
    bind: () => {
      gl.bindBuffer(config.target, buffer);
      return this;
    },
    bufferData: (data: any) => {
      gl.bufferData(config.target, data, config.usage);

      return this;
    }
  };
};

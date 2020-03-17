import { TextureResource } from "./texture";

export interface FrameBufferConfig {
  attachment?: GLenum;
  level?: number;
}

export interface FrameBufferResource {
  bind: () => void;
  handle: () => WebGLFramebuffer;
  setTexture: (texture: TextureResource) => void;
}

export const framebuffer = (
  gl: WebGL2RenderingContext,
  config: FrameBufferConfig = { level: 0, attachment: 0 }
): FrameBufferResource => {
  const fbo = gl.createFramebuffer();

  return {
    bind: () => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    },
    handle: () => fbo,
    setTexture: (texture: TextureResource) => {
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        config.attachment,
        texture.target(),
        texture.handle(),
        config.level
      );
    }
  };
};

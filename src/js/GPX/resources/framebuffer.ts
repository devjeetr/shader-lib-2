import { TextureResource } from "./texture";

export interface FrameBufferConfig {
  attachment?: GLenum;
  level?: number;
}

export interface FrameBufferResource {
  handle: () => WebGLFramebuffer;
  setTexture: (texture: TextureResource) => void;
  bind: () => void,
}
/**
 * 
 * @param gl The webgl rendering context
 * @param config 
 */
export const framebuffer = (
  gl: WebGL2RenderingContext,
  config: FrameBufferConfig = { level: 0, attachment: gl.COLOR_ATTACHMENT0 }
): FrameBufferResource => {
  const fbo = gl.createFramebuffer();

  return {
    bind: () => gl.bindFramebuffer(gl.FRAMEBUFFER, fbo),
    handle: () => fbo,
    setTexture: (texture: TextureResource) => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        config.attachment,
        gl.TEXTURE_2D,
        texture.handle(),
        config.level
      );
    }
  };
};

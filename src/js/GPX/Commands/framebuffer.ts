import { Command, ProgramState } from "./core";

import { TextureConfig } from "./texture";
import { createResolver } from "./helpers";

export const createFrameBuffer = (
  name: string,
  opts: TextureConfig
): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl } = state;
    const fbo = gl.createFramebuffer();

    state.framebuffers[name] = {
      handle: fbo,
      attachment: gl.COLOR_ATTACHMENT0,
      level: 0,
      ...opts
    };
  })
});

export const bindFrameBuffer = (name: string): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, framebuffers } = state;
    if (!(name in framebuffers)) {
      throw new Error(`FrameBuffer ${name} not found in current program.`);
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffers[name]);
  })
});

export const setFrameBufferToTexture = (
  name: string,
  textureName: string
): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, framebuffers, textures } = state;
    if (!(name in framebuffers)) {
      throw new Error(`FrameBuffer ${name} not found in current program.`);
    }
    const framebuffer = framebuffers[name];
    if (!(textureName in textures)) {
      throw new Error(`Texture ${textureName} not found in current program.`);
    }
    const texture = textures[textureName];

    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      framebuffer.attachment,
      texture.target,
      texture.handle,
      framebuffer.level
    );
  })
});

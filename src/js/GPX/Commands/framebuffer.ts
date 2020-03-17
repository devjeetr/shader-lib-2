import { Command } from "./core";
import { FrameBufferResource } from "../resources/framebuffer";
import { ProgramState } from "../GPX";
import { TextureResource } from "../resources/texture";
import { createResolver } from "./helpers";

export const bindFrameBuffer = (fbo: FrameBufferResource): Command => ({
  resolve: createResolver((state: ProgramState) => {
    fbo.bind();
  })
});

export const setFrameBufferToTexture = (
  fbo: FrameBufferResource,
  texture: TextureResource
): Command => ({
  resolve: createResolver((state: ProgramState) => {
    fbo.setTexture(texture);
  })
});

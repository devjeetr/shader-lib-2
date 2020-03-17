import { Command } from "./core";
import { FrameBufferResource } from "../resources/framebuffer";
import { ProgramState } from "../GPX";
import { TextureResource } from "../resources/texture";
import { createResolver } from "./helpers";

export const setFrameBufferToTexture = (
  fbo: FrameBufferResource,
  texture: TextureResource
): Command => createResolver((state: ProgramState) => {
    fbo.setTexture(texture);
  })

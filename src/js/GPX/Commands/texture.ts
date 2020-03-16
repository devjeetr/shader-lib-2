import { Command, ProgramState, Texture } from "./types";

import { createResolver } from "./helpers";

export type TextureConfig = Omit<Texture, "handle">;

export const createTexture = (
  name: string,
  opts: TextureConfig
): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl } = state;
    const texture = gl.createTexture();

    state.textures[name] = {
      handle: texture,
      target: gl.TEXTURE_2D,
      ...opts
    };
  })
});

export const bindTexture = (name: string): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, textures } = state;
    if (!(name in textures)) {
      throw new Error(`Texture ${name} not found in current program.`);
    }

    const texture = textures[name];

    gl.bindTexture(texture.target, texture.handle);
  })
});

export const initTexture = (name: string): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, textures } = state;
    if (!(name in textures)) {
      throw new Error(`Texture ${name} not found in current program.`);
    }

    const texture = textures[name];

    // set wrap_s
    if (texture.wrap_s) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, texture.wrap_s);
    }
    // set wrap_t
    if (texture.wrap_t) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_R, texture.wrap_t);
    }
    // set mag
    if (texture.mag) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.mag);
    }
    // set min
    if (texture.min) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.min);
    }
  })
});

export const updateTexture = (name: string): Command => ({
  resolve: createResolver(state => {
    const { gl, textures } = state;
    if (!(name in textures)) {
      throw new Error(`Texture ${name} not found in current program.`);
    }

    const texture = textures[name];
    gl.texImage2D(
      gl.TEXTURE_2D,
      texture.level,
      texture.format,
      texture.width,
      texture.height,
      0,
      texture.format,
      texture.type,
      null
    );
  })
});

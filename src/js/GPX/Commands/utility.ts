import { Command } from "./types";
import { ProgramState } from "../GPX";
import { createResolver } from "./helpers";
import { original } from "immer";

export interface ViewPortConfig {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export const setViewPort = (config: ViewPortConfig = {}): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl } = state;
    gl.viewport(
      config.x || 0,
      config.y || 0,
      config.width || gl.canvas.width,
      config.height || gl.canvas.height
    );
  })
});

export const logState = (message: string): Command => ({
  resolve: createResolver((state: ProgramState) => {
    console.log(message);
    console.log(original(state));
  })
});

export interface ClearConfig {

}

export const clear = (config: ClearConfig) => ({
  resolve: createResolver((state: ProgramState) => {

  })
});

export interface BlendConfig {
  enable: boolean,
  func?: {
    srcRGB?: GLenum,
    srcAlpha?: number,
    dstRGB?: GLenum,
    dstAlpha?: number
  },
  equation?: {
    rgb?: GLenum,
    alpha?: GLenum,
  }
};

export const blend = (config: BlendConfig): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl } = state;
    
    if (config.func) {
      if (config.func.srcAlpha) {
        gl.blendFunc(gl.SRC_ALPHA, config.func.srcAlpha);
      }
    }

    if (config.enable) {
      gl.enable(gl.BLEND);
    }
  })
})
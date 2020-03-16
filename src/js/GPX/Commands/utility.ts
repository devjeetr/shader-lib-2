import { Command, ProgramState } from "./types";

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

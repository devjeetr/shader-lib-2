import { Command } from "./types";
import { ProgramState } from "../GPX";
import { createResolver } from "./helpers";

export interface DrawArraysConfig {
  mode?: GLenum;
  first?: number;
  count: number;
}

export const drawArrays = (config: DrawArraysConfig): Command =>
  createResolver((state: ProgramState) => {
    const { gl } = state;
    gl.drawArrays(config.mode || gl.POINTS, config.first || 0, config.count);
  });

export interface DrawArraysInstancedConfig {
  mode?: GLenum;
  first?: number;
  count: number;
  instanceCount: number;
}

export const drawArraysInstanced = (
  config: DrawArraysInstancedConfig
): Command =>
  createResolver((state: ProgramState) => {
    const { gl } = state;

    gl.drawArraysInstanced(
      config.mode || gl.POINTS,
      config.first || 0,
      config.count,
      config.instanceCount
    );
  });

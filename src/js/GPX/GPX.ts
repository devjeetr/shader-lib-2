import * as R from "ramda";

import { Command, ProgramState } from "./Commands/types";

export * from "./Commands/core";

const createProgramState = (): ProgramState => ({
  attributes: {},
  buffers: {},
  uniforms: {},
  textures: {},
  framebuffers: {},
});

const executeCommands = (state: ProgramState, ...commands: Array<Command>) => {
  for (let i = 0; i < commands.length; i++) {
    const nextState = commands[i].resolve(state);
    state = nextState;
  }

  return Object.freeze(state);
};

const GPX = (...commands: Array<Command>): ProgramState => {
  let state = createProgramState();
  return executeCommands(state, ...R.flatten(commands));
};

GPX.Compose = (...commands: Array<Command>) => () => ({
  resolve: (state: ProgramState) => executeCommands(state, ...commands)
});

export type PipeCommands = any;

GPX.pipeFirst = (_: any, ...commands: PipeCommands) => {
  return commands.map((command: any) => {
    if (command instanceof Function) {
      return command(_);
    } else if (command instanceof Array) {
      if (!(command[0] instanceof Function)) {
        throw new Error("Invalid arguments passed to GPX.pipeFirst");
      }
      
      return command[0](_, ...(command as Array<any>).slice(1));
    }

    throw new Error("invalid args passed to pipeFirst");
  });
};

export default GPX;
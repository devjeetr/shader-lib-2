import { Command, ProgramState } from "./Commands/types";

import{ produce } from "immer";

const createProgramState = (): ProgramState => ({
    attributes: {},
    buffers: {},
})

export const GPX = (...commands: Array<Command>) => {
    let state = createProgramState();
    /** @ts-ignore */
    console.log(commands[0])
    for (let i = 0; i < commands.length; i++) {
      const nextState = commands[i].resolve(state)
      state = nextState;
    }
  };
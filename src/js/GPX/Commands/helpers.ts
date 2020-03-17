import { original, produce } from "immer";

import { Command } from "./types";
import { ProgramState } from "../GPX";

// import { instrumentContext } from "../webgl/instrumenter";

export const createResolver = (fn: (state: ProgramState) => void) => (
  state: ProgramState
): ProgramState => produce(state, (draftState: ProgramState) => fn(draftState));


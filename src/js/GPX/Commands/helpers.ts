import { Command, ProgramState } from "./types";
import { original, produce } from "immer";

// import { instrumentContext } from "../webgl/instrumenter";

export const createResolver = (fn: (state: ProgramState) => void) => (
  state: ProgramState
): ProgramState => produce(state, (draftState: ProgramState) => fn(draftState));


import { Command, CommandDispatcher } from "../Commands/types";
import GPX, { ProgramState } from "../GPX";

import { createProgramState } from "../GPX";

export interface Props {
  [key: string]: any;
}

export interface Context {
  useEffect: (effect: Function, deps: Array<any>) => void;
}
export type RenderFn = (props: Props, context: Context) => CommandDispatcher;

function Hooks() {
  const cache: any = [];
  let currentIndex: number = 0;

  return {
    reset(): void {
      currentIndex = 0;
    },
    useEffect(effect: Function, deps: Array<any>) {
      const oldDeps = cache[currentIndex];
      if (oldDeps === null || oldDeps === undefined) {
        effect();
        cache[currentIndex] = deps;
      } else {
        const hasNoDeps = !deps ? true : false;
        const hasChangedDeps = !deps.every((e, i) => e === oldDeps[i]);
        if (hasNoDeps || hasChangedDeps) {
          effect();
          cache[currentIndex] = deps;
        }
      }

      currentIndex++;
    }
  };
}

export interface Model {
  init: () => void;
  render: (props: Props) => void;
}

export const Model = (init: CommandDispatcher, fn: RenderFn): Model => {
  const hooks = Hooks();
  let state: ProgramState = createProgramState();

  const context: Context = {
    useEffect: hooks.useEffect
  };

  return {
    init: () => {
      state = GPX.withState(state)(init());
    },
    render: (props: Props) => {
      const renderDispatch = fn(props, context);
      state = GPX.withState(state)(renderDispatch());
      hooks.reset();
    }
  };
};

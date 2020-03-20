import { AttributeConfig, initAttribute } from "./attribute";
import { UniformConfig, initUniform } from "./uniform";
import { bindVao, createVao } from "./vao";
import { createProgramAndCompileShaders, useProgram } from "./shader";

import {GPX} from "../GPX";
import { createResolver } from "./helpers";

export interface ProgramConfig {
    vs: string,
    fs: string,
    attributes: { [key: string]: AttributeConfig},
    uniforms: { [key: string]: UniformConfig},
}

export const fromConfig = (config: ProgramConfig) => createResolver((state) => {
    const init = GPX.Compose(
        createProgramAndCompileShaders({vs: config.vs, fs: config.fs}),
        useProgram(),
        createVao(),
        bindVao(),
    );

    const initAttributes = GPX.Compose(
        ...Object.keys(config.attributes).map(name => {
            return initAttribute(name, config.attributes[name]);
        })
    );

    const initUniforms = GPX.Compose(
        ...Object.keys(config.uniforms).map(name => {
            return initUniform(name, config.uniforms[name]);
        })
    );
    
    const newState = GPX.withState(state)(
        init(),
        initAttributes(),
        initUniforms(),
    );

    Object.keys(newState).forEach((key: string) => {
        // @ts-ignore
        state[key] = newState[key];
    })
});
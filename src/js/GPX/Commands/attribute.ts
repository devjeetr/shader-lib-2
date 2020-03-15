import { Command, ProgramState } from "./types";

import { createResolver } from "./helpers";

export interface AttributeConfig {
  size: number;
  type?: GLenum;
  divisor?: number;
  offset?: number;
  stride?: number;
  normalized?: boolean;
}

/**
 * 
 * @param name The name of the attribute
 * @param config attribute config.
 * @returns a
 */
export const initAttribute = (name: string, config: AttributeConfig): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, program, attributes } = state;
    const location = gl.getAttribLocation(program, name);

    if (location === -1) {
      throw new Error(`getAttribLocation returned -1 from attribute ${name}.`);
    }

    attributes[name] = {
      location,
      size: config.size,
      type: config.type || gl.FLOAT,
      offset: config.offset || 0,
      stride: config.stride || 0,
      normalized: config.normalized || false,
      divisor: config.divisor
    };
  })
});

export const configureAttribute = (name: string): Command => ({
  resolve: createResolver((state: ProgramState) => {
    const { gl, attributes } = state;
    const attribute = attributes[name];

    gl.enableVertexAttribArray(attribute.location);
    gl.vertexAttribPointer(
      attribute.location,
      attribute.size,
      attribute.type,
      attribute.normalized,
      attribute.stride,
      attribute.offset
    );

    if (!(attribute.divisor === null || attribute.divisor === undefined)) {
      gl.vertexAttribDivisor(attribute.location, attribute.divisor);
    }
  })
});

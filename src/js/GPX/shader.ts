import * as R from "ramda";

import {
  Attribute,
  AttributeState,
  DrawConfigTypes,
  GPXProps,
  ProgramState,
  ShaderConfig,
  Uniform,
  UniformState
} from "./primitives";
import { createProgramWithShaders, resize } from "./utils";

import { updateAttributes } from "./attribute/attribute";
import { updateUniforms } from "./uniform/uniforms";

const buildAttributeState = (
  gl: WebGL2RenderingContext,
  program: WebGLProgram,
  attributes: Array<Attribute>
): Array<AttributeState> => {
  const attributeState: Array<AttributeState> = [];

  attributes.forEach(attribute => {
    const location = gl.getAttribLocation(program, attribute.name);
    if (location === -1) {
      throw new Error(`Attribute location not found for ${attribute.name}`);
    }

    attributeState.push({
      public: attribute,
      location,
      buffer: gl.createBuffer(),
      dirty: true
    });
  });

  return attributeState;
};

const buildUniformState = (
  gl: WebGL2RenderingContext,
  program: WebGLProgram,
  uniforms: Array<Uniform>
) => {
  const uniformState: Array<UniformState> = [];

  uniforms.forEach(uniform => {
    const location = gl.getUniformLocation(program, uniform.name);

    uniformState.push({
      public: uniform,
      location,
      dirty: true
    });
  });

  return uniformState;
};

export const createApp = ({
  gl,
  vertexShader,
  fragmentShader,
  attributes,
  uniforms,
  draw
}: ShaderConfig) => {
  // compile shaders
  const program = createProgramWithShaders(gl, vertexShader, fragmentShader);

  // create vertex attrib array
  const vao = gl.createVertexArray();
  const attributeState = attributes
    ? buildAttributeState(gl, program, attributes)
    : [];
  const uniformState = uniforms ? buildUniformState(gl, program, uniforms) : [];
  // resize(gl);
  // initialize uniforms
  // initUniforms(uniforms);
  let programState: ProgramState = {
    gl,
    program,
    vao,
    attributes: attributeState,
    uniforms: uniformState,
    context: {
      // TODO
    },
    draw
  };

  // initialize framebuffers
  return function(props: GPXProps): void {
    window.requestAnimationFrame(() => {
      const { gl, vao, context, draw } = programState;
      if (programState.fbos) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, programState.fbos);
      }
      
      // TODO: only update viewport when necessary
      // resize(gl);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      // TODO: only use program when necessary
      gl.useProgram(programState.program);
      gl.bindVertexArray(vao);

      updateAttributes(programState, context, props);
      // TODO
      updateUniforms(programState, context, props);

      switch(draw.kind) {
        case DrawConfigTypes.drawArrays:
          gl.drawArrays(draw.type, draw.first, draw.indexCount);
          // console.log("draw arrays")
          break;
        case DrawConfigTypes.drawArraysInstanced:
          gl.drawArraysInstanced(draw.type, draw.first, draw.indexCount, draw.instanceCount);
        default:
          break;
      }
    });
  };
};

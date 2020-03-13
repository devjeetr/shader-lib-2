import * as R from "ramda";

import {
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

export const GPX = ({
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
      updateUniforms(programState, context, props);

      switch(draw.kind) {
        case DrawConfigTypes.drawArrays:
          gl.drawArrays(draw.mode, draw.first, draw.count);
          break;
        case DrawConfigTypes.drawArraysInstanced:
          gl.drawArraysInstanced(draw.mode, draw.first, draw.count, draw.instanceCount);
        default:
          break;
      }
    });
  };
};

import * as R from "ramda";

import {
  Attribute,
  AttributeState,
  GPXProps,
  ProgramState,
  ShaderConfig
} from "./primitives";

import { createProgramWithShaders } from "./utils";
import { updateAttributes } from "./attribute";

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
      dirty: true,
    });
  });

  return attributeState;
};

export const createApp = ({
  gl,
  vertexShader,
  fragmentShader,
  attributes,
  draw
}: ShaderConfig) => {
  // compile shaders
  const program = createProgramWithShaders(gl, vertexShader, fragmentShader);

  // create vertex attrib array
  const vao = gl.createVertexArray();
  const attributeState = buildAttributeState(gl, program, attributes)

  // initialize uniforms
  // initUniforms(uniforms);
  let programState: ProgramState = {
    gl,
    program,
    vao,
    attributes: attributeState,
    context: {
      
    },
    draw,
  };

  // initialize framebuffers
  return function(props: GPXProps): void {
    window.requestAnimationFrame(() => {
      const { gl, vao, context, draw } = programState;
      gl.viewport(0, 0, context.width || gl.canvas.width, context.height || gl.canvas.height);

      gl.useProgram(programState.program);
      console.log("binding vertex array")
      gl.bindVertexArray(vao);

      updateAttributes(programState, context, props);
      // updateUniforms(programState, context, props, );
      gl.drawArrays(draw.type, draw.offset, draw.count);
    })
  };
};

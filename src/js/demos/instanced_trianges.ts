import { DrawConfigTypes } from "../GPX/primitives";
import { createApp } from "../GPX/shader";

export const instanced_triangles_demo = (gl: WebGL2RenderingContext) => {
  const draw = createApp({
    gl,
    vertexShader: `#version 300 es
      
      // an attribute is an input (in) to a vertex shader.
      // It will receive data from a buffer
      in vec4 a_position;
      in vec4 a_offset;
      // all shaders have a main function
      void main() {
       
        // gl_Position is a special variable a vertex shader
        // is responsible for setting
        gl_Position = a_position + a_offset;
      }`,
    fragmentShader: `#version 300 es
   
      // fragment shaders don't have a default precision so we need
      // to pick one. mediump is a good default. It means "medium precision"
      precision mediump float;
       
      // we need to declare an output for the fragment shader
      out vec4 outColor;
       
      void main() {
        // Just set the output to a constant reddish-purple
        outColor = vec4(1, 0, 0.5, 1);
      }`,
    attributes: [
      {
        name: "a_position",
        target: gl.ARRAY_BUFFER,
        data: (_, { data }) => {
          return new Float32Array(data);
        },
        size: 2,
        type: gl.FLOAT,
        normalized: false,
        stride: 0,
        offset: 0,
        usage: gl.STATIC_DRAW
      },
      {
        name: "a_offset",
        target: gl.ARRAY_BUFFER,
        data: (_, { offset }) => {
          return new Float32Array(offset);
        },
        size: 2,
        type: gl.FLOAT,
        normalized: false,
        stride: 0,
        offset: 0,
        usage: gl.DYNAMIC_DRAW,
        divisor: 1
      }
    ],
    draw: {
      kind: DrawConfigTypes.drawArraysInstanced,
      mode: gl.TRIANGLES,
      first: 0,
      count: 3,
      instanceCount: 5
    }
  });

  draw({
    data: [0, 0, 0, 0.5, 0.3, 0],
    offset: [0.3, 0.2, -0.9, -0.2, -0.2, -0.1, 0.5, 0.2, -0.4, -0.2]
  });
};

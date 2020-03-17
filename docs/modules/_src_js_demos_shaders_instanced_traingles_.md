[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/demos/shaders/instanced_traingles"](_src_js_demos_shaders_instanced_traingles_.md)

# External module: "src/js/demos/shaders/instanced_traingles"

## Index

### Variables

* [fragmentShader](_src_js_demos_shaders_instanced_traingles_.md#const-fragmentshader)
* [vertexShader](_src_js_demos_shaders_instanced_traingles_.md#const-vertexshader)

## Variables

### `Const` fragmentShader

• **fragmentShader**: *"#version 300 es
   
      // fragment shaders don't have a default precision so we need
      // to pick one. mediump is a good default. It means "medium precision"
      precision mediump float;
       
      // we need to declare an output for the fragment shader
      out vec4 outColor;
       
      void main() {
        // Just set the output to a constant reddish-purple
        outColor = vec4(1, 0, 0.5, 1);
      }"* = `#version 300 es
   
      // fragment shaders don't have a default precision so we need
      // to pick one. mediump is a good default. It means "medium precision"
      precision mediump float;
       
      // we need to declare an output for the fragment shader
      out vec4 outColor;
       
      void main() {
        // Just set the output to a constant reddish-purple
        outColor = vec4(1, 0, 0.5, 1);
      }`

*Defined in [src/js/demos/shaders/instanced_traingles.ts:15](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/demos/shaders/instanced_traingles.ts#L15)*

___

### `Const` vertexShader

• **vertexShader**: *"#version 300 es
      
      // an attribute is an input (in) to a vertex shader.
      // It will receive data from a buffer
      in vec4 a_position;
      in vec4 a_offset;
      // all shaders have a main function
      void main() {
       
        // gl_Position is a special variable a vertex shader
        // is responsible for setting
        gl_Position = a_position + a_offset;
      }"* = `#version 300 es
      
      // an attribute is an input (in) to a vertex shader.
      // It will receive data from a buffer
      in vec4 a_position;
      in vec4 a_offset;
      // all shaders have a main function
      void main() {
       
        // gl_Position is a special variable a vertex shader
        // is responsible for setting
        gl_Position = a_position + a_offset;
      }`

*Defined in [src/js/demos/shaders/instanced_traingles.ts:1](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/demos/shaders/instanced_traingles.ts#L1)*
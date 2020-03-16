[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/demos/shaders/hello_world"](_src_js_demos_shaders_hello_world_.md)

# External module: "src/js/demos/shaders/hello_world"

## Index

### Variables

* [fragmentShader](_src_js_demos_shaders_hello_world_.md#const-fragmentshader)
* [vertexShader](_src_js_demos_shaders_hello_world_.md#const-vertexshader)

## Variables

### `Const` fragmentShader

• **fragmentShader**: *"#version 300 es

precision mediump float;
out vec4 outColor;
void main(void) {
  float r = 0.0, delta = 0.0, alpha = 1.0;
  vec2 cxy = 2.0 * gl_PointCoord - 1.0;
  r = dot(cxy, cxy);
  delta = fwidth(r);
  alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);

  outColor = vec4(1.0, 0.0, 0.0, alpha);
}"* = `#version 300 es

precision mediump float;
out vec4 outColor;
void main(void) {
  float r = 0.0, delta = 0.0, alpha = 1.0;
  vec2 cxy = 2.0 * gl_PointCoord - 1.0;
  r = dot(cxy, cxy);
  delta = fwidth(r);
  alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);

  outColor = vec4(1.0, 0.0, 0.0, alpha);
}`

*Defined in [src/js/demos/shaders/hello_world.ts:23](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/demos/shaders/hello_world.ts#L23)*

___

### `Const` vertexShader

• **vertexShader**: *"#version 300 es
precision mediump float;     
// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
in vec4 a_position;
uniform vec2 u_resolution;
// all shaders have a main function
void main() {

  // convert the rectangle from pixels to 0.0 to 1.0
  vec2 zeroToOne = a_position.xy / u_resolution;

  // convert from 0->1 to 0->2
  vec2 zeroToTwo = zeroToOne * 2.0;

  // convert from 0->2 to -1->+1 (clipspace)
  vec2 clipSpace = zeroToTwo - 1.0;

  gl_Position = vec4(clipSpace.xy, 0.0, 1.0);
  gl_PointSize = 100.0;
}"* = `#version 300 es
precision mediump float;     
// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
in vec4 a_position;
uniform vec2 u_resolution;
// all shaders have a main function
void main() {

  // convert the rectangle from pixels to 0.0 to 1.0
  vec2 zeroToOne = a_position.xy / u_resolution;

  // convert from 0->1 to 0->2
  vec2 zeroToTwo = zeroToOne * 2.0;

  // convert from 0->2 to -1->+1 (clipspace)
  vec2 clipSpace = zeroToTwo - 1.0;

  gl_Position = vec4(clipSpace.xy, 0.0, 1.0);
  gl_PointSize = 100.0;
}`

*Defined in [src/js/demos/shaders/hello_world.ts:1](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/demos/shaders/hello_world.ts#L1)*

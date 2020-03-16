[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/index"](_src_js_index_.md)

# External module: "src/js/index"

## Index

### Variables

* [canvas](_src_js_index_.md#const-canvas)
* [gl](_src_js_index_.md#const-gl)
* [initProgram](_src_js_index_.md#const-initprogram)
* [state](_src_js_index_.md#const-state)

## Variables

### `Const` canvas

• **canvas**: *HTMLCanvasElement* = document.createElement("canvas")

*Defined in [src/js/index.ts:24](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/index.ts#L24)*

___

### `Const` gl

• **gl**: *[WebGL2RenderingContext](../interfaces/_src_js_gpx_webgl_instrumenter_.instrumentedcontext.md#webgl2renderingcontext)* = canvas.getContext("webgl2")

*Defined in [src/js/index.ts:28](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/index.ts#L28)*

___

### `Const` initProgram

• **initProgram**: *(Anonymous function)* = GPX.Compose(
  fetchContext(canvas),
  createProgramAndCompileShaders({ vs: vertexShader, fs: fragmentShader }),
  useProgram(),
  createVao(),
  bindVao()
)

*Defined in [src/js/index.ts:34](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/index.ts#L34)*

___

### `Const` state

• **state**: *[ProgramState](../interfaces/_src_js_gpx_commands_types_.programstate.md)* = GPX(
  initProgram(),
  initAttribute("a_position", {size: 2}),
  initUniform("u_resolution"),
  updateUniform("u_resolution", (gl: WebGLRenderingContext, location: WebGLUniformLocation) => {
    gl.uniform2fv(location, [500, 500])
  }),
  GPX.pipeFirst("a_position", createBuffer, bindBuffer, [
    setBufferData,
    new Float32Array([250, 250])
  ]),
  // setBufferData("a_position", new Float32Array([0.5, 0.5])),
  configureAttribute("a_position"),
  setViewPort(),
  drawArrays({ count: 1 })
)

*Defined in [src/js/index.ts:42](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/index.ts#L42)*

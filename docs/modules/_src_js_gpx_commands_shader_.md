[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/GPX/Commands/shader"](_src_js_gpx_commands_shader_.md)

# External module: "src/js/GPX/Commands/shader"

## Index

### Interfaces

* [ShaderSources](../interfaces/_src_js_gpx_commands_shader_.shadersources.md)

### Functions

* [createProgramAndCompileShaders](_src_js_gpx_commands_shader_.md#const-createprogramandcompileshaders)
* [fetchContext](_src_js_gpx_commands_shader_.md#const-fetchcontext)
* [useProgram](_src_js_gpx_commands_shader_.md#const-useprogram)

## Functions

### `Const` createProgramAndCompileShaders

▸ **createProgramAndCompileShaders**(`__namedParameters`: object): *object*

*Defined in [src/js/GPX/Commands/shader.ts:11](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/Commands/shader.ts#L11)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`fs` | string |
`vs` | string |

**Returns:** *object*

* **opts**(): *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
      const { gl } = state;
      const program = createProgramWithShaders(gl, vs, fs);
      state.program = program;
    })

___

### `Const` fetchContext

▸ **fetchContext**(`canvas`: HTMLCanvasElement): *object*

*Defined in [src/js/GPX/Commands/shader.ts:22](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/Commands/shader.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`canvas` | HTMLCanvasElement |

**Returns:** *object*

* **opts**(): *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
      const gl = instrumentContext(canvas.getContext("webgl2"));
      // TODO Check if gl was successfully retained
      state.gl = gl;
    })

___

### `Const` useProgram

▸ **useProgram**(): *object*

*Defined in [src/js/GPX/Commands/shader.ts:33](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/Commands/shader.ts#L33)*

**Returns:** *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
    const { gl, program } = state;

    gl.useProgram(program);
  })

[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/GPX/Commands/uniform"](_src_js_gpx_commands_uniform_.md)

# External module: "src/js/GPX/Commands/uniform"

## Index

### Functions

* [initUniform](_src_js_gpx_commands_uniform_.md#const-inituniform)
* [updateUniform](_src_js_gpx_commands_uniform_.md#const-updateuniform)

## Functions

### `Const` initUniform

▸ **initUniform**(`name`: string): *object*

*Defined in [src/js/GPX/Commands/uniform.ts:8](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/Commands/uniform.ts#L8)*

Fetches the given uniform's location.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the uniform to be initialized  |

**Returns:** *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
    const { gl, program } = state;
    const location = gl.getUniformLocation(program, name);
    console.log(location);
    if (location === null) {
      console.error(`Uniform location not found: ${name}`);
    }
    state.uniforms[name] = {
      location
    };
  })

___

### `Const` updateUniform

▸ **updateUniform**(`name`: string, `fn`: Function): *object*

*Defined in [src/js/GPX/Commands/uniform.ts:29](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/Commands/uniform.ts#L29)*

Takes a callback that is provided the
WebGL context and uniform location, and
must update the uniform.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | the name of the uniform |
`fn` | Function | the function used to update the uniform  |

**Returns:** *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
    const { gl, uniforms } = state;
    fn(gl, uniforms[name].location);
  })

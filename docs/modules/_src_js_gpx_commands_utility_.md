[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/GPX/Commands/utility"](_src_js_gpx_commands_utility_.md)

# External module: "src/js/GPX/Commands/utility"

## Index

### Interfaces

* [ViewPortConfig](../interfaces/_src_js_gpx_commands_utility_.viewportconfig.md)

### Functions

* [logState](_src_js_gpx_commands_utility_.md#const-logstate)
* [setViewPort](_src_js_gpx_commands_utility_.md#const-setviewport)

## Functions

### `Const` logState

▸ **logState**(`message`: string): *[Command](../interfaces/_src_js_gpx_commands_types_.command.md)*

*Defined in [src/js/GPX/Commands/utility.ts:24](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/Commands/utility.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *[Command](../interfaces/_src_js_gpx_commands_types_.command.md)*

___

### `Const` setViewPort

▸ **setViewPort**(`config`: [ViewPortConfig](../interfaces/_src_js_gpx_commands_utility_.viewportconfig.md)): *object*

*Defined in [src/js/GPX/Commands/utility.ts:12](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/Commands/utility.ts#L12)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [ViewPortConfig](../interfaces/_src_js_gpx_commands_utility_.viewportconfig.md) | {} |

**Returns:** *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
    const { gl } = state;
    gl.viewport(
      config.x || 0,
      config.y || 0,
      config.width || gl.canvas.width,
      config.height || gl.canvas.height
    );
  })

[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/GPX/Commands/draw"](_src_js_gpx_commands_draw_.md)

# External module: "src/js/GPX/Commands/draw"

## Index

### Interfaces

* [DrawArraysConfig](../interfaces/_src_js_gpx_commands_draw_.drawarraysconfig.md)
* [DrawArraysInstancedConfig](../interfaces/_src_js_gpx_commands_draw_.drawarraysinstancedconfig.md)

### Functions

* [drawArrays](_src_js_gpx_commands_draw_.md#const-drawarrays)
* [drawArraysInstanced](_src_js_gpx_commands_draw_.md#const-drawarraysinstanced)

## Functions

### `Const` drawArrays

▸ **drawArrays**(`config`: [DrawArraysConfig](../interfaces/_src_js_gpx_commands_draw_.drawarraysconfig.md)): *object*

*Defined in [src/js/GPX/Commands/draw.ts:10](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/Commands/draw.ts#L10)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [DrawArraysConfig](../interfaces/_src_js_gpx_commands_draw_.drawarraysconfig.md) | {} |

**Returns:** *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
    const { gl } = state;
    gl.drawArrays(config.type || gl.POINTS, config.first || 0, config.count);
  })

___

### `Const` drawArraysInstanced

▸ **drawArraysInstanced**(`config`: [DrawArraysInstancedConfig](../interfaces/_src_js_gpx_commands_draw_.drawarraysinstancedconfig.md)): *object*

*Defined in [src/js/GPX/Commands/draw.ts:24](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/Commands/draw.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [DrawArraysInstancedConfig](../interfaces/_src_js_gpx_commands_draw_.drawarraysinstancedconfig.md) |

**Returns:** *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
    const { gl } = state;

    gl.drawArraysInstanced(
      config.mode || gl.TRIANGLES,
      config.first || 0,
      config.count,
      config.instanceCount
    );
  })

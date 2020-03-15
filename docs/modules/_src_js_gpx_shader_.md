[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/GPX/shader"](_src_js_gpx_shader_.md)

# External module: "src/js/GPX/shader"

## Index

### Type aliases

* [PipeCommands](_src_js_gpx_shader_.md#pipecommands)

### Functions

* [GPX](_src_js_gpx_shader_.md#const-gpx)
* [createProgramState](_src_js_gpx_shader_.md#const-createprogramstate)
* [executeCommands](_src_js_gpx_shader_.md#const-executecommands)

## Type aliases

###  PipeCommands

Ƭ **PipeCommands**: *any*

*Defined in [src/js/GPX/shader.ts:29](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/shader.ts#L29)*

## Functions

### `Const` GPX

▸ **GPX**(...`commands`: Array‹[Command](../interfaces/_src_js_gpx_commands_types_.command.md)›): *[ProgramState](../interfaces/_src_js_gpx_commands_types_.programstate.md)*

*Defined in [src/js/GPX/shader.ts:20](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/shader.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`...commands` | Array‹[Command](../interfaces/_src_js_gpx_commands_types_.command.md)› |

**Returns:** *[ProgramState](../interfaces/_src_js_gpx_commands_types_.programstate.md)*

___

### `Const` createProgramState

▸ **createProgramState**(): *[ProgramState](../interfaces/_src_js_gpx_commands_types_.programstate.md)*

*Defined in [src/js/GPX/shader.ts:5](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/shader.ts#L5)*

**Returns:** *[ProgramState](../interfaces/_src_js_gpx_commands_types_.programstate.md)*

___

### `Const` executeCommands

▸ **executeCommands**(`state`: [ProgramState](../interfaces/_src_js_gpx_commands_types_.programstate.md), ...`commands`: Array‹[Command](../interfaces/_src_js_gpx_commands_types_.command.md)›): *object*

*Defined in [src/js/GPX/shader.ts:11](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/shader.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [ProgramState](../interfaces/_src_js_gpx_commands_types_.programstate.md) |
`...commands` | Array‹[Command](../interfaces/_src_js_gpx_commands_types_.command.md)› |

**Returns:** *object*

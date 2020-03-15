[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/GPX/Commands/vao"](_src_js_gpx_commands_vao_.md)

# External module: "src/js/GPX/Commands/vao"

## Index

### Functions

* [bindVao](_src_js_gpx_commands_vao_.md#const-bindvao)
* [createVao](_src_js_gpx_commands_vao_.md#const-createvao)

## Functions

### `Const` bindVao

▸ **bindVao**(): *object*

*Defined in [src/js/GPX/Commands/vao.ts:11](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/Commands/vao.ts#L11)*

**Returns:** *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
    const { gl, vao } = state;

    gl.bindVertexArray(vao);
  })

___

### `Const` createVao

▸ **createVao**(): *object*

*Defined in [src/js/GPX/Commands/vao.ts:4](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/Commands/vao.ts#L4)*

**Returns:** *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
    const { gl } = state;
    state.vao = gl.createVertexArray();
  })

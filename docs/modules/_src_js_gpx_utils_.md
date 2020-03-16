[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/GPX/utils"](_src_js_gpx_utils_.md)

# External module: "src/js/GPX/utils"

## Index

### Functions

* [createProgramWithShaders](_src_js_gpx_utils_.md#const-createprogramwithshaders)
* [getItemsToUpdate](_src_js_gpx_utils_.md#const-getitemstoupdate)
* [loadShader](_src_js_gpx_utils_.md#const-loadshader)
* [resize](_src_js_gpx_utils_.md#const-resize)

## Functions

### `Const` createProgramWithShaders

▸ **createProgramWithShaders**(`gl`: [WebGL2RenderingContext](../interfaces/_src_js_gpx_webgl_instrumenter_.instrumentedcontext.md#webgl2renderingcontext), `vertexShaderSource`: string, `fragmentShaderSource`: string): *WebGLProgram*

*Defined in [src/js/GPX/utils.ts:30](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/utils.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`gl` | [WebGL2RenderingContext](../interfaces/_src_js_gpx_webgl_instrumenter_.instrumentedcontext.md#webgl2renderingcontext) |
`vertexShaderSource` | string |
`fragmentShaderSource` | string |

**Returns:** *WebGLProgram*

___

### `Const` getItemsToUpdate

▸ **getItemsToUpdate**(`item`: object): *Set‹string›*

*Defined in [src/js/GPX/utils.ts:80](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/utils.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | object |

**Returns:** *Set‹string›*

___

### `Const` loadShader

▸ **loadShader**(`gl`: [WebGL2RenderingContext](../interfaces/_src_js_gpx_webgl_instrumenter_.instrumentedcontext.md#webgl2renderingcontext), `type`: GLenum, `source`: string): *WebGLShader*

*Defined in [src/js/GPX/utils.ts:1](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/utils.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`gl` | [WebGL2RenderingContext](../interfaces/_src_js_gpx_webgl_instrumenter_.instrumentedcontext.md#webgl2renderingcontext) |
`type` | GLenum |
`source` | string |

**Returns:** *WebGLShader*

___

### `Const` resize

▸ **resize**(`gl`: [WebGL2RenderingContext](../interfaces/_src_js_gpx_webgl_instrumenter_.instrumentedcontext.md#webgl2renderingcontext)): *void*

*Defined in [src/js/GPX/utils.ts:58](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/utils.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`gl` | [WebGL2RenderingContext](../interfaces/_src_js_gpx_webgl_instrumenter_.instrumentedcontext.md#webgl2renderingcontext) |

**Returns:** *void*

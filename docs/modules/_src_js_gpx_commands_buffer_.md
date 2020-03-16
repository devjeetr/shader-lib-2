[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/GPX/Commands/buffer"](_src_js_gpx_commands_buffer_.md)

# External module: "src/js/GPX/Commands/buffer"

## Index

### Type aliases

* [BufferOptions](_src_js_gpx_commands_buffer_.md#bufferoptions)

### Functions

* [bindBuffer](_src_js_gpx_commands_buffer_.md#const-bindbuffer)
* [createBuffer](_src_js_gpx_commands_buffer_.md#const-createbuffer)
* [setBufferData](_src_js_gpx_commands_buffer_.md#const-setbufferdata)

## Type aliases

###  BufferOptions

Ƭ **BufferOptions**: *Omit‹Buffer, "bufferHandle"›*

*Defined in [src/js/GPX/Commands/buffer.ts:4](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/Commands/buffer.ts#L4)*

## Functions

### `Const` bindBuffer

▸ **bindBuffer**(`name`: string): *object*

*Defined in [src/js/GPX/Commands/buffer.ts:19](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/Commands/buffer.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
      const { gl, buffers } = state;

      if (!buffers[name]) {
        throw new Error(`Buffer of name ${name} does has not been created`);
      }

      const buffer = buffers[name];
      gl.bindBuffer(buffer.target, buffer.handle);
    })

___

### `Const` createBuffer

▸ **createBuffer**(`name`: string, `opts?`: [BufferOptions](_src_js_gpx_commands_buffer_.md#bufferoptions)): *object*

*Defined in [src/js/GPX/Commands/buffer.ts:5](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/Commands/buffer.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`opts?` | [BufferOptions](_src_js_gpx_commands_buffer_.md#bufferoptions) |

**Returns:** *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
    const { gl } = state;
    const bufferHandle = gl.createBuffer();

    state.buffers[name] = {
      handle: bufferHandle,
      target: gl.ARRAY_BUFFER,
      usage: gl.STATIC_DRAW,
      ...opts
    };
  })

___

### `Const` setBufferData

▸ **setBufferData**(`name`: string, `data`: any): *object*

*Defined in [src/js/GPX/Commands/buffer.ts:34](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/Commands/buffer.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`data` | any |

**Returns:** *object*

* **resolve**: *(Anonymous function)* = createResolver((state: ProgramState) => {
    const { gl, buffers } = state;
    const buffer = buffers[name];
    gl.bufferData(buffer.target, data, buffer.usage);
  })

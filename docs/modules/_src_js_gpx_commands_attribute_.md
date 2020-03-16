[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/GPX/Commands/attribute"](_src_js_gpx_commands_attribute_.md)

# External module: "src/js/GPX/Commands/attribute"

## Index

### Interfaces

* [AttributeConfig](../interfaces/_src_js_gpx_commands_attribute_.attributeconfig.md)

### Functions

* [configureAttribute](_src_js_gpx_commands_attribute_.md#const-configureattribute)
* [initAttribute](_src_js_gpx_commands_attribute_.md#const-initattribute)

## Functions

### `Const` configureAttribute

▸ **configureAttribute**(`name`: string): *[Command](../interfaces/_src_js_gpx_commands_types_.command.md)*

*Defined in [src/js/GPX/Commands/attribute.ts:58](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/Commands/attribute.ts#L58)*

Configures the given attribute

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | the name of the attribute to configure  |

**Returns:** *[Command](../interfaces/_src_js_gpx_commands_types_.command.md)*

___

### `Const` initAttribute

▸ **initAttribute**(`name`: string, `config`: [AttributeConfig](../interfaces/_src_js_gpx_commands_attribute_.attributeconfig.md)): *[Command](../interfaces/_src_js_gpx_commands_types_.command.md)*

*Defined in [src/js/GPX/Commands/attribute.ts:33](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/src/js/GPX/Commands/attribute.ts#L33)*

Initializes the shader attribute with the given
name.

**`example`** 
```
 GPX(
   initAttribute("a_position",
     {
       size: 2,
     }
   )
)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the attribute |
`config` | [AttributeConfig](../interfaces/_src_js_gpx_commands_attribute_.attributeconfig.md) | attribute config. |

**Returns:** *[Command](../interfaces/_src_js_gpx_commands_types_.command.md)*

the command

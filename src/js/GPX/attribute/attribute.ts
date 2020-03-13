import * as R from "ramda";

import {
  Attribute,
  AttributeData,
  AttributeDivisor,
  AttributeNormalized,
  AttributeOffset,
  AttributeSize,
  AttributeStride,
  AttributeTarget,
  AttributeType,
  AttributeUsage,
  Context,
  DynamicProperty,
  GPXContextAndPropsConsumer,
  GPXProps,
  ProgramState,
  ResolvedAttribute
} from "../primitives";

import { getItemsToUpdate } from "../utils";

const attributeProperties = new Set([
  "name",
  "size",
  "type",
  "normalized",
  "stride"
]);

const isAttribPropertiesUpdate = R.reduce(
  (a: Boolean, b: string) => R.or(a, attributeProperties.has(b)),
  true
);

const updateIfNeeded = <T>(
  toUpdate: Set<String>,
  value: DynamicProperty<T>,
  typeName: string,
  context: Context,
  props: GPXProps
): T => {
  if (toUpdate.has(name)) {
    return (value as GPXContextAndPropsConsumer<T>)(context, props);
  } else {
    return value as T;
  }
};

/**
 * Given an attribute, resolves any dynamic properties
 * of the attribute. A dynamic property is one that is
 * defined as a function rather than a value.
 * 
 * @param attribute The attribute to be resolved
 * @param context program context used to resolve attribute
 * @param props props used to resolve attribute
 * @param dynamicAttributes list of dynamic attributes
 */
const resolveAttributes = (
  attribute: Attribute,
  context: Context,
  props: GPXProps,
  dynamicAttributes: Set<string>
): ResolvedAttribute => {
  return {
    size: updateIfNeeded<AttributeSize>(
      dynamicAttributes,
      attribute.size,
      "size",
      context,
      props
    ),
    type: updateIfNeeded<AttributeType>(
      dynamicAttributes,
      attribute.type,
      "type",
      context,
      props
    ),
    stride: updateIfNeeded<AttributeStride>(
      dynamicAttributes,
      attribute.stride,
      "stride",
      context,
      props
    ),
    data: updateIfNeeded<AttributeData>(
      dynamicAttributes,
      attribute.data,
      "data",
      context,
      props
    ),
    offset: updateIfNeeded<AttributeOffset>(
      dynamicAttributes,
      attribute.offset,
      "offset",
      context,
      props
    ),
    normalized: updateIfNeeded<AttributeNormalized>(
      dynamicAttributes,
      attribute.normalized,
      "normalized",
      context,
      props
    ),
    usage: updateIfNeeded<AttributeUsage>(
      dynamicAttributes,
      attribute.usage,
      "usage",
      context,
      props
    ),
    target: updateIfNeeded<AttributeTarget>(
      dynamicAttributes,
      attribute.target,
      "target",
      context,
      props
    ),
    divisor: attribute.divisor
      ? updateIfNeeded<AttributeDivisor>(
          dynamicAttributes,
          attribute.divisor,
          "divisor",
          context,
          props
        )
      : null
  };
};

/**
 * Updates attributes of this GPX program.
 *
 * @param state the current ProgramState
 * @param context current GPX context
 * @param props props
 */
export const updateAttributes = (
  state: ProgramState,
  context: Context,
  props: GPXProps
) => {
  const { gl, attributes } = state;

  state.attributes = attributes.map(attribute => {
    const toUpdate = getItemsToUpdate(attribute.public);
    const resolvedAttribute = resolveAttributes(
      attribute.public,
      context,
      props,
      toUpdate
    );

    // data must be transferred to buffer before vertexAttribPointer call
    if (toUpdate.has("data") || attribute.dirty) {
      gl.bindBuffer(resolvedAttribute.target, attribute.buffer);
      gl.bufferData(
        resolvedAttribute.target,
        resolvedAttribute.data,
        resolvedAttribute.usage
      );
    }

    if (isAttribPropertiesUpdate([...toUpdate]) || attribute.dirty) {
      gl.enableVertexAttribArray(attribute.location);
      gl.vertexAttribPointer(
        attribute.location,
        resolvedAttribute.size,
        resolvedAttribute.type,
        resolvedAttribute.normalized,
        resolvedAttribute.stride,
        resolvedAttribute.offset
      );
      console.log("hi")
      if (resolvedAttribute.divisor) {
        console.log("has divisor")
        gl.vertexAttribDivisor(attribute.location, resolvedAttribute.divisor);
      }
    }

    attribute.dirty = false;

    return attribute;
  });
};

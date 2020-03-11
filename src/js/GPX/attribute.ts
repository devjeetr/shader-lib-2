import * as R from "ramda";

import {
  Attribute,
  AttributeData,
  AttributeNormalized,
  AttributeOffset,
  AttributeSize,
  AttributeStride,
  AttributeTarget,
  AttributeType,
  AttributeUsage,
  Context,
  GPXContextAndPropsConsumer,
  GPXProps,
  ProgramState,
  ResolvedAttribute,
} from "./primitives";

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


const getItemsToUpdate = (item: { [key: string]: any }): Set<string> => {
  return new Set(
    Object.keys(item).filter(key => item[key] instanceof Function)
  );
};

const resolveAttributes = (
  attribute: Attribute,
  context: Context,
  props: GPXProps,
  toUpdate: Set<string>
): ResolvedAttribute => {
  return {
    size: toUpdate.has("size")
      ? (attribute.size as GPXContextAndPropsConsumer<AttributeSize>)(
          context,
          props
        )
      : (attribute.size as AttributeSize),
    type: toUpdate.has("type")
      ? (attribute.type as GPXContextAndPropsConsumer<AttributeType>)(
          context,
          props
        )
      : (attribute.type as AttributeType),
    stride: toUpdate.has("stride")
      ? (attribute.stride as GPXContextAndPropsConsumer<AttributeStride>)(
          context,
          props
        )
      : (attribute.stride as AttributeStride),
    data: toUpdate.has("data")
      ? (attribute.data as GPXContextAndPropsConsumer<AttributeData>)(
          context,
          props
        )
      : (attribute.data as AttributeData),
    offset: toUpdate.has("offset")
      ? (attribute.offset as GPXContextAndPropsConsumer<AttributeOffset>)(
          context,
          props
        )
      : (attribute.offset as AttributeOffset),
    normalized: toUpdate.has("normalized")
      ? (attribute.normalized as GPXContextAndPropsConsumer<
          AttributeNormalized
        >)(context, props)
      : (attribute.normalized as AttributeNormalized),
    usage: toUpdate.has("usage")
      ? (attribute.usage as GPXContextAndPropsConsumer<AttributeUsage>)(
          context,
          props
        )
      : (attribute.usage as AttributeUsage),
    target: toUpdate.has("target")
      ? (attribute.target as GPXContextAndPropsConsumer<AttributeTarget>)(
          context,
          props
        )
      : (attribute.target as AttributeTarget)
  };
};

export const updateAttributes = (
  state: ProgramState,
  context: Context,
  props: GPXProps
) => {
  const { gl, attributes } = state;

  state.attributes = attributes.map(attribute => {
    const toUpdate = getItemsToUpdate(attribute);
    const resolvedAttribute = resolveAttributes(
      attribute.public,
      context,
      props,
      toUpdate
    );
    
    gl.enableVertexAttribArray(attribute.location);
    if (isAttribPropertiesUpdate([...toUpdate])) {
      gl.vertexAttribPointer(
        attribute.location,
        resolvedAttribute.size,
        resolvedAttribute.type,
        resolvedAttribute.normalized,
        resolvedAttribute.stride,
        resolvedAttribute.offset
      );
    }

    if (toUpdate.has("data")) {
      gl.bindBuffer(resolvedAttribute.target, attribute.buffer);
      gl.bufferData(
        resolvedAttribute.target,
        resolvedAttribute.data,
        resolvedAttribute.usage
      );
    }

    return attribute;
  });
};

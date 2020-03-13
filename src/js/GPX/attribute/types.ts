import { GPXContextAndPropsConsumer, Update, UpdateDescriptor } from "../primitives";

/**
 *          Attributes
 */
export type AttributeSize = GLint;
export type AttributeType = GLenum;
/**
 * The name of the buffer that provides
 * data to this attribute.
 */
export type AttributeData = string;
export type AttributeNormalized = GLboolean;
export type AttributeStride = GLsizei;
export type AttributeOffset = GLintptr;
export type AttributeUsage = GLenum;
export type AttributeTarget = GLenum;
export type AttributeDivisor = GLint;
export type DynamicProperty<T> = T | GPXContextAndPropsConsumer<T>;

export interface Attribute {
  size: DynamicProperty<AttributeSize>;
  type: DynamicProperty<AttributeType>;
  data: DynamicProperty<AttributeData>;
  normalized?: DynamicProperty<AttributeNormalized>;
  stride?: DynamicProperty<AttributeStride>;
  offset?: DynamicProperty<AttributeOffset>;
  divisor?: DynamicProperty<AttributeDivisor>;
}

export interface ResolvedAttribute {
  size: AttributeSize;
  type: AttributeType;
  data: AttributeData;
  normalized: AttributeNormalized;
  stride: AttributeStride;
  offset: AttributeOffset;
  usage: AttributeUsage;
  target: AttributeTarget;
  divisor?: AttributeDivisor;
}

export interface AttributeState {
  public: Attribute;
  location: GLenum;
  id: string;
}

export interface AttributeStateCollection {
    [attributeName: string]: AttributeState;
}

export interface AttributeCollection {
  [attribtueName: string]: Attribute;
}
export interface AttributeUpdateDescriptor <T extends keyof Attribute> extends UpdateDescriptor{
    property: string,
    value: Attribute[T],
}

export interface AttributeUpdate<T extends keyof Attribute> extends Update{
    type: "ATTRIBUTE_UPDATE",
    payload: {
        resourceId: string,
        descriptor: AttributeUpdateDescriptor<T>
    }
};


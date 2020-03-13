import * as R from "ramda";

import {
  Attribute,
  AttributeCollection,
  AttributeData,
  AttributeDivisor,
  AttributeNormalized,
  AttributeOffset,
  AttributeSize,
  AttributeStateCollection,
  AttributeStride,
  AttributeTarget,
  AttributeType,
  AttributeUsage,
  DynamicProperty,
  ResolvedAttribute
} from "./types";
import {
  Context,
  GPXContextAndPropsConsumer,
  GPXProps,
  ProgramState
} from "../primitives";

import { getItemsToUpdate } from "../utils";
import uuid from 'uuid/v4';

const attributeDefaults = {
  offset: 0,
  normalized: false,
  stride: 0,
};
const createAttributeState = (attributes: AttributeCollection): AttributeStateCollection => {
  const attributeState = {};

  Object.keys(attributes)
        .forEach(attributeName => {
          let attribute = attributes[attributeName];
          attribute = {...attribute, ...attributeDefaults};

          const id = uuid();

          attributeState[id] = {
            
          }

  });


  return attributeState;
}
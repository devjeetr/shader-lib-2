import * as R from "ramda";

import {
  Attribute,
  AttributeCollection,
  AttributeData,
  AttributeDivisor,
  AttributeNormalized,
  AttributeOffset,
  AttributeSize,
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

const createAttributeState = (attributes: AttributeCollection) => {

}
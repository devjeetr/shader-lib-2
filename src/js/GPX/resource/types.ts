export type ResourceUpdateDispatch<T, K> = (payload: T, options: K) => void;
export type ResourceUpdateCb<T, K> = (
  props: string,
  context: string,
  dispatch: ResourceUpdateDispatch<T, K>
) => void;

type DynamicProp<T, K> = T | [ResourceUpdateCb<T, K>, Array<string>];

export interface ResourceUpdateMessage<T> {
  kind: string;
  payload: T;
}

export type ResourceProps<T, K> = {
  [P in keyof T]: DynamicProp<T[P], K>;
};

export type ResolvedProps<T> = {
  [P in keyof T]: T[P];
};

export interface Resource<T, K> {
  readonly props: ResourceProps<T, K>;
  lastResolvedState: ResolvedProps<T>;
  readonly id: string;
  readonly dependencies: Array<Resource<T, K>>;
}

/**
 * A ResourceUpdater computes the new resource state for a
 */
export type ResourceUpdater<T, K> = (
  props: any,
  context: any,
  resource: Resource<T, K>
) => Resource<T, K>;

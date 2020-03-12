import {
  Context,
  GPXContextAndPropsConsumer,
  GPXProps,
  ProgramState,
  UniformData
} from "../primitives";

export const updateUniforms = (
  state: ProgramState,
  context: Context,
  props: GPXProps
) => {
  const { gl, uniforms } = state;

  state.uniforms = uniforms.map(uniform => {
    if (uniform.public.data instanceof Function) {
      if (uniform.public.type.endsWith("v")) {
          // @ts-ignore
        gl[uniform.public.type](
            uniform.location,
            // @ts-ignore
            // TODO fix this ts-ignore
            (uniform.public.data as GPXContextAndPropsConsumer<UniformData>)(
            context,
            props
            )
        );
      } else {
            // @ts-ignore
        gl[uniform.public.type](
            uniform.location,
            // @ts-ignore
            // TODO fix this ts-ignore
            ...(uniform.public.data as GPXContextAndPropsConsumer<UniformData>)(
            context,
            props
            )
        );
      }
    } else if (uniform.dirty) {
      // @ts-ignore
      // TODO fix this ts-ignore
      gl[uniform.public.type](uniform.location, ...uniform.public.data);
    }

    uniform.dirty = false;

    return uniform;
  });
};

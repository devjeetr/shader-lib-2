import { create } from "domain";
import { createProgramState } from "../GPX/GPX";
import { initUniform } from "../GPX/Commands/uniform";

describe("uniform tests", () => {
  it("should find uniform location of provided name", () => {
    const mock = jest.fn(() => 1);
    const programState = createProgramState();
    // @ts-ignore
    programState.gl = {
      getUniformLocation: mock
    };

    const newState = initUniform("something", { type: "uniform1f" })(
      programState
    );

    expect(newState.uniforms["something"]).toBeDefined();
    expect(newState.uniforms["something"].location).toBe(1);
    expect(newState.uniforms["something"].type).toBe("uniform1f");
  });

  it("sets defaults correctly", () => {
    const mock = jest.fn(() => 1);
    const programState = createProgramState();
    // @ts-ignore
    programState.gl = {
      getUniformLocation: mock
    };

    const newState = initUniform("something", { type: "uniform1f" })(
      programState
    );

    expect(newState.uniforms["something"]).toBeDefined();
    expect(newState.uniforms["something"].location).toBe(1);
    expect(newState.uniforms["something"].type).toBe("uniform1f");
    expect(newState.uniforms["something"].length).toBe(0);
    expect(newState.uniforms["something"].offset).toBe(0);
  });
});

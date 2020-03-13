import { Attribute } from "../GPX/primitives"
import { resolveAttributes } from "../GPX/attribute/attribute";

describe("resolveAttribute tests", () => {
    it("should only update specified properties", () => {
        const data = new Float32Array([1, 2, 3]);
        const attribute:Attribute = {
            name: "u_position",
            size: 0,
            type: 22,
            data: (_, props) => data,
            normalized: false,
            stride: 0,
            offset: 0,
            usage: 0,
            target: 0,
        };

        const resolvedAttribute = resolveAttributes(attribute, {}, {}, new Set(["data"]));
        expect(resolvedAttribute.data).toBe(data);
    })
})
import { expect } from "chai"
import { describe, it } from "mocha";
import { areUndefined } from "../src/areUndefined.js";

describe("Tests areUndefined()", () => {

    it("Should `undefined`, `undefined` return true", () => {
        const value1 = undefined;
        const value2 = undefined;
        const result = areUndefined(value1, value2);
        expect(result).to.be.true;
    });

});
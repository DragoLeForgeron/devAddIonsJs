import { expect } from "chai"
import { describe, it } from "mocha";
import { isUndefined } from "../src/isUndefined.js";

describe("tests isUnefined", () => {

    it("Should return true", () => {
        const value = undefined;
        const result = isUndefined(value);
        expect(result).to.equal(true);
    });

})
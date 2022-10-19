import { expect } from "chai"
import { describe, it } from "mocha";
import { isNull } from "../src/isNull.js";

describe("Tests isNull()", () => {

    it("Should `null` return true", () => {
        const value = null;
        const result = isNull(value);
        expect(result).to.be.true;
    });

    const badValues = ["", undefined, 0, true, [], {}];

    for(const value of badValues) {
        it(`Should \`${value}\` return false`, () => {
            const result = isNull(value);
            expect(result).to.be.false;
        });
    }

});
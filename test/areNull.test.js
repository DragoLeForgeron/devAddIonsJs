import { expect } from "chai"
import { describe, it } from "mocha";
import { areNull } from "../src/areNull.js";

describe("Tests areNull()", () => {

    it("Should `null` and `null` return true", () => {
        const value1 = null;
        const value2 = null;
        const result = areNull(value1, value2);
        expect(result).to.be.true;
    });

    const badValues = ["", undefined, 0, true, [], {}];

    for(const value2 of badValues) {
        const value1 = null;
        it(`Should \`${value1}\` and \`${value2}\` return false`, () => {
            const result = areNull(value1, value2);
            expect(result).to.be.false;
        });
    }

});
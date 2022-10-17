import { expect } from "chai"
import { describe, it } from "mocha";
import { isUndefined } from "../src/isUndefined.js";

describe("tests isUndefined", () => {

    it("Should `undefined` return true", () => {
        const value = undefined;
        const result = isUndefined(value);
        expect(result).to.be.true;
    });

    it("Should `<notSet>` return true", () => {
        let value;
        const result = isUndefined(value);
        expect(result).to.be.true;
    });

    const badValues = ["", null, 0, true];

    for(const value of badValues) {
        it(`Should \`${value}\` return false`, () => {
            const result = isUndefined(value);
            expect(result).to.be.false;
        })
    }

});
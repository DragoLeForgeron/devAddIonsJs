import { expect } from "chai"
import { describe, it } from "mocha";
import { areUndefined } from "../src/areUndefined.js";

describe("Tests areUndefined()", () => {

    it("Should `undefined` and `undefined` return true", () => {
        const value1 = undefined;
        const value2 = undefined;
        const result = areUndefined(value1, value2);
        expect(result).to.be.true;
    });

    it("Should `undefined` and `<notSet>` return true", () => {
        const value1 = undefined;
        let value2;
        const result = areUndefined(value1, value2);
        expect(result).to.be.true;
    });

    it("Should `<notSet>` and `<notSet>` return true", () => {
        let value1;
        let value2;
        const result = areUndefined(value1, value2);
        expect(result).to.be.true;
    });

    const badValues = ["", null, 0, true, [], {}];

    for(const value2 of badValues) {
        const value1 = undefined;
        it(`Should \`${value1}\` and \`${value2}\` return false`, () => {
            const result = areUndefined(value1, value2);
            expect(result).to.be.false;
        });
    }

});
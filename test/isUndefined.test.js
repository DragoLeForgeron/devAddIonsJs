import { expect } from "chai"
import { describe, it } from "mocha";
import { isUndefined } from "../src/isUndefined.js";

describe("tests isUndefined", () => {

    it("Should return true", () => {
        const value = undefined;
        const result = isUndefined(value);
        expect(result).to.be.true;
    });

    it("Should return true", () => {
        let value;
        const result = isUndefined(value);
        expect(result).to.be.true;
    });

    it("Should return false", () => {
        const value = "";
        const result = isUndefined(value);
        expect(result).to.be.false;
    });

    it("Should return false", () => {
        const value = null;
        const result = isUndefined(value);
        expect(result).to.be.false;
    });

    it("Should return false", () => {
        const value = 0;
        const result = isUndefined(value);
        expect(result).to.be.false;
    });

    it("Should return false", () => {
        const value = true;
        const result = isUndefined(value);
        expect(result).to.be.false;
    });

});
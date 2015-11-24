var chakram = require('chakram'),
    expect = chakram.expect;

describe("Documentation examples", function() {

    it("first", function () {
        expect(true).to.be.true;
    });
    it("second, will fail", function () {
        expect(false).to.be.true;
    });
});
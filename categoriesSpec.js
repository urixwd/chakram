var chakram = require('chakram'),
    expect = chakram.expect;

describe("Documentation examples", function() {
    this.timeout(10000);

    it("should support chakram and chai assertions", function () {
        var response = chakram.get("http://ecom.slidernet.co/api/categories/all");
        expect(response).to.have.status(200);
        expect(response).not.to.have.status(404);
        return chakram.wait();
    });
});
var chakram = require('chakram'),
    expect = chakram.expect;

describe("Documentation examples", function() {
    this.timeout(10000);

    var catResponse, initialData, categoryName;

    before("Initialize the API call", function () {
        categoryName = 'all';
        initialData = {
        };
        catResponse = chakram.get('http://ecom.slidernet.co/api/categories/' + categoryName, initialData);
    });

    it("should return 200 on success", function () {
        return expect(catResponse).to.have.status(200);
    });
    it("should not return 404 on success", function () {
        return expect(catResponse).not.to.have.status(404);
    });
});
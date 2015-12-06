var _ = require('lodash');
var chakram = require('chakram'),
    expect = chakram.expect;

describe("Test slider app", function() {
    this.timeout(10000);

    var appResponse, initialData, appId, sliders;

    before("Initialize the API call", function () {
        appId = 'd93f26c2a02c878154d504bc';
        initialData = {
        };
        appResponse = chakram.get('http://my.slidernet.co/api/app/' + appId, initialData);
    });

    it("should return 200 on success", function () {
        return expect(appResponse).to.have.status(200);
    });
    it("should not return 404 on success", function () {
        return expect(appResponse).not.to.have.status(404);
    });
    it("should contain sliders", function () {
        return expect(appResponse).to.have.json('data.sliders', function(_sliders){
            sliders = _sliders;
            expect(sliders).to.have.length.of.at.least(1);

            _.each(sliders, function(slider, key){
                //TODO verify slider here
                console.log(slider);
            });
        });
    });
});
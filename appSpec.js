var _ = require('lodash');
var chakram = require('chakram'),
    expect = chakram.expect;
var schemas = require('./tests/schemas');
var validateSlider = require('./tests/validate_slider');

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
        return expect(appResponse).to.have.json('data.sliders', function (_sliders) {
            sliders = _sliders;
            expect(sliders).to.have.length.of.at.least(1);
        });
    });
    it("should obey the general schema", function () {
        return expect(appResponse).to.have.schema(schemas.generalSchema);
    });
    it("slider should obey its structure", function () {
        var bad_sliders = [];
        _.each(sliders, function(slider, key){
            if(!validateSlider.validate(slider)){
                bad_sliders.push(slider);
            }
        });
        expect(bad_sliders).to.have.length.of(0);
        if(bad_sliders.length){
            console.log('bad sliders!', bad_sliders);
        }
    });
});
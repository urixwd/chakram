var _ = require('lodash');
var chakram = require('chakram'),
    expect = chakram.expect;

module.exports = {
    checkAndTypeof: function(obj, toCheck, typeToEqual){
        var val = _.get(obj, toCheck);
        if(typeof val == 'undefined')   return false;
        else return (typeof val == typeToEqual);
    },
    validate: function(slider){
        var errors = {};

        if(!this.checkAndTypeof(slider, '_id._str', 'string')) errors['id'] = 'no id';
        if(!this.checkAndTypeof(slider, 'admin.nm', 'string')) errors['admin.nm'] = 'no admin name';
        if(!this.checkAndTypeof(slider, 'appId', 'string')) errors['appId'] = 'no app id';
        if(!this.checkAndTypeof(slider, 'attributes', 'object')) errors['attributes'] = 'no attributes';
        if(!this.checkAndTypeof(slider, 'groups', 'object')) errors['groups'] = 'no groups';
        if(!this.checkAndTypeof(slider, 'nodes', 'object')) errors['nodes'] = 'no nodes';

        //everything is good..
        return (Object.keys(errors) == 0);
    }
};

var fs = require('fs');
var path = require('path');
var filename = (new Date().getTime().toString());
var full_path = path.join(__dirname, "dist/" + filename + '.txt');

fs.writeFile(full_path, "Build succeded " + filename, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
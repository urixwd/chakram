var fs = require('fs');
var filename = (new Date().getTime().toString());
fs.writeFile("dist/" + filename + '.txt', "Build succeded " + filename, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
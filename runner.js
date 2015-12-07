var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha({
    "reporter": "mocha-jenkins-reporter",
    "reporterOptions": {
        "junit_report_name": "Slider API Test",
        "junit_report_path": "report.xml",
        "junit_report_stack": 1
    }
});

var testDir = '.';

// Add each .js file to the mocha instance
fs.readdirSync(testDir).filter(function(file){
    // Only keep the .js files
    return file.substr(-7) === 'Spec.js';

}).forEach(function(file){
    mocha.addFile(
        path.join(testDir, file)
    );
});

// Run the tests.
mocha.run(function(failures){
    process.on('exit', function () {
        process.exit(failures);
    });
});
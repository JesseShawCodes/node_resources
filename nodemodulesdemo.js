var exec = require('child_process').exec;

exec('git version', function(err, stdoud) {
    if (err) {
        throw err
    }
    console.log("listing finished");
});
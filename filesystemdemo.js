var fs = require('fs')
//Sync
var files = fs.readdirSync('./public')

//Async
fs.readdir('./public', function(err, files){
    if (err) {
        throw err
    }

    console.log(files)
})



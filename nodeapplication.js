var fs = require('fs');
fs.readFile('planets.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data.split(",").sort());
});
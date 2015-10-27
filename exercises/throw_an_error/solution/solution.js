
var invalidJson = process.argv[2];

var promise = new Promise(function(resolve, reject) {
    resolve(invalidJson);
});
promise
    .then(JSON.parse)
    .then(null, console.log);

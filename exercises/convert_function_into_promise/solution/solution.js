var invalidJson = process.argv[2];

function methodAsPromise(func) {
    return function() {
        var args = arguments;
        return new Promise(function(resolve, reject) {
            resolve(func.apply(this, args));
        });
    };
}

methodAsPromise(JSON.parse)(invalidJson)
    .then(console.log, console.log);

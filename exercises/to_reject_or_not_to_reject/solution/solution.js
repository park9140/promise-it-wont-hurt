var promise = new Promise(function(resolve, reject) {
    resolve("I FIRED");
    reject("I DID NOT FIRE");
});

promise.then(console.log, console.log);

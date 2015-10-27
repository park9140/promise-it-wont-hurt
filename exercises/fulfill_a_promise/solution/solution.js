var promise = new Promise(function(resolve) {
    setTimeout(resolve, 300, "RESOLVED!");
});
promise.then(console.log);

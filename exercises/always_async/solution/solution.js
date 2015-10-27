var promise = new Promise(function(resolve) {
    resolve("SECOND");
});
promise.then(console.log.bind(console));
console.log("FIRST");

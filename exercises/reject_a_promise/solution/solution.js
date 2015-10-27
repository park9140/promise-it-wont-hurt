var promise = new Promise(function(resolve, reject) {
    setTimeout(reject, 300, new Error("REJECTED!"));
});

function printError (err) {
  console.log(err.message);
}

promise.then(null, printError);

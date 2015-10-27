function attachTitle (name) {
  return "DR. " + name;
}
var promise = new Promise(function(resolve) { resolve("MANHATTAN"); });
promise
.then(attachTitle)
.then(console.log);

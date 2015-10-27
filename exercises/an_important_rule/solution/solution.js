function iterate (num) {
  console.log(num);
  return ++num;
};

function alwaysThrows () {
  throw new Error("OH NOES");
};

var promise = new Promise(function(resolve) {
    resolve(iterate(1));
})
promise.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);

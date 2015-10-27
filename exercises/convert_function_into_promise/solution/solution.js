function resultAsPromise(func) {
  return  function() {
      return new Promise(function(resolve, reject) {
          var result;
          try {
            result = func.apply(this, arguments);
          } catch (e) {
            reject(e);
          }

          resolve(result);
      });
  };
}

resultAsPromise(JSON.parse).bind(JSON)(process.argv[2])
    .then(null, console.log);

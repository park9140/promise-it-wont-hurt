function parsePromised (json) {
  return  new Promise(function(resolve, reject) {
      var result;
      try {
        result = JSON.parse(json);
      } catch (e) {
        reject(e);
      }

      resolve(result);
  }
};

parsePromised(process.argv[2])
.then(null, console.log)

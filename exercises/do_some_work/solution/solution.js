var request = require('request')

function httpRequest(uri) {
    return new Promise(function(resolve, reject) {
        request(uri,
            function(error, response, body) {
                if (error) {
                    reject(response);
                }
                resolve(body);
            });
    });
}

httpRequest("http://localhost:7000/")
.then(function (id) {
  return httpRequest("http://localhost:7001/" + id);
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error);

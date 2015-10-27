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

httpRequest("http://localhost:1337")
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error);

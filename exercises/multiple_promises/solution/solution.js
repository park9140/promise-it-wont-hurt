var prom1 = new Promise(function(resolve) {
    setTimeout(function () {
          resolve("PROMISES");
        }, 200);
    })
  , prom2 = new Promise(function(resolve) {
      setTimeout(function () {
        resolve("FTW");
      }, 200);
    })

function all (prom1, prom2) {

  return new Promise(function(resolve, reject) {

        var counter = 0
          , val1
          , val2;

        prom1
        .then(function (result) {
          val1 = result;
          ++counter;
          if (counter >=2) resolve([val1, val2]);
        })
        .then(null, reject)
        .done();

        prom2
        .then(function (result) {
          val2 = result;
          ++counter;
          if (counter >=2) resolve([val1, val2]);
        })
        .then(null, reject)
        .done();
    });
}

all(prom1, prom2)
.then(console.log)
.done();

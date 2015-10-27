# Using Q's `fcall` to simplify our code

Wrapping a value or synchronous function call in a promise is a
fairly easy pattern to capture in a generic way.

Different promise libraries provide this functionality, for instance
a form exists in `q.js` as `fcall`.

ES7 calls for the creation of an async keyword that will remove the
need for this by using function form, which returns a promise.

```
async function cook(meat) {
    // await allows you to write code agaist promises and
    // against other async functions in a linear manner
    var meat = await goGetSomeMeat(); //method that is async or returns a promise;
    return await tenderizeMeat(meat);      
} //by default returns a promise for the returned result.
```

In the mean time we can use promises to write code that will work with
this interface in the future

## Task

Build a method that takes in a function and returns a function that
when called returns a method that returns the result of the passed
function as a promise.

Use this function to run `JSON.parse(process.argv[2])` as a promise;

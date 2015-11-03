# What is a promise?

A promise is an object that defines a method called `then`.
The promise object represents a value (or values) that may
be available some time in the future.

When a promise is resolved, any *"success functions"* registered
with the `then` method will be called with the newly available
data as arguments.

If a promise is rejected then any *"failure functions"* registered
with the `then` method will be called with the `Error` as argument.

For now, do not be concerned with exactly **how** this works or what
the syntax is.  We are about to dive into that in detail.

## Setup

To do many of the lessons in this workshop, you will need to run node 0.12 or higher
in order to have access to Promise;

## Task

Use the es6 Promise to create a promise.

Pass `console.log` to the `then` method of your promise.

Manually resolve that promise using `setTimeout` with a delay of 300ms
and pass it a parameter of `"RESOLVED!"`.

In es6, promises are created using 'new Promise(function(resolve, reject){ })'.

Resolve

## Boilerplate

```js
var promise = new Promise(function(resolve, reject) {
  //resolve and reject are functions to resolve or reject your promise
});

promise.then(function(result) {
  //do something with result
})

```

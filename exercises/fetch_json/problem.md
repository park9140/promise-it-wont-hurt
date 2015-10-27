# Let's do something, you know, from "real life"

**Let's fetch JSON over HTTP… YAY!**

Fetching JSON data from remote machines via AJAX is commonplace
on both the server and client.  Promises also happen to map to AJAX
particularly well.  Any AJAX request may either succeed or fail,
never both.  Promises may fulfill or reject, never both.

So wow.  Much similarity.  Very promising…

Let's use create a method to wrap node http.request with promises

## Task

Fetch JSON from *http://localhost:1337* and `console.log` it.

There are several things you will want to know:

1. Import module `http` from node,
2. Use `http.request` https://nodejs.org/api/http.html#http_http_request_options_callback.
   In order to make a new method that returns a promise that rolls up the data from the
   request response into a single promise response
3. Execute your new method and then parse the returned JSON and `console.log` it for much win.

This challenge is a bit tricky but the implementation is relatively
straightforward.  If you get stuck, refer to
https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request
for info on how to make an http request and roll up the response.

This repository contains the source for the web view UI layer which will be used for menus and overlaid HUDs within [Project Trillek][trillek].

It is a single page web application that can interface with the game through a specific set of exposed API methods.

## Running in your browser

It's possible to load the UI within your browser using a small HTTP server; I like to use Python for this. Python's built in server is invoked differently between versions 2 and 3, simply `cd` to this directory and execute the appropriate command.

```bash
# Python 3
python -m http.server

# Python 2
python -m SimpleHTTPServer
```

Or use any other HTTP server of you choosing, there are even quite a few for [node][] on [npm][].

[trillek]: http://trillek.org/
[node]: http://nodejs.org/
[npm]: https://npmjs.org/
This repository contains the source for the web view UI layer which will be used for menus and overlaid HUDs within [Project Trillek][trillek].

It is a single page web application that can interface with the game through a specific set of exposed API methods.

## Dependencies

The following systems are used to fetch the dependencies.

 * [Bundler][]
 * [Bower][]

You can install the dependencies by executing these commands.

```bash
bundle install
bower install
```

## Compiling the SASS to CSS

Once you have all of the dependencies installed, you'll be able to compile the CSS. Because it is all written in SASS (a superset of CSS) you need to execute the following line to pre-process it.

```bash
compass compile
```

If you wish to work on the SASS files and have them update automatically, you can run this and leave it in the background.

```bash
compass watch
```

Now you'll be able to use the next section to open the UI in your browser.

## Viewing in your browser

Because of the way Trillek will load the web UI, without a server, all paths are relative. This means that you can actually open `index.html` directly using the `file://` protocol, without a server, and it should run absolutely fine (assuming you've compiled the SASS to CSS).

It's also possible to load the UI using a small HTTP server; I like to use Python for this. Python's built in server is invoked differently between versions 2 and 3, simply `cd` to this directory and execute the appropriate command.

```bash
# Python 3
python -m http.server

# Python 2
python -m SimpleHTTPServer
```

Or use any other HTTP server of you choosing, there are even quite a few for [node][] on [npm][].

[trillek]: http://trillek.org/
[bundler]: http://bundler.io/
[bower]: http://bower.io/
[node]: http://nodejs.org/
[npm]: https://npmjs.org/
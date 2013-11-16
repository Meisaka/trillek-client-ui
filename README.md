This repository contains the source for the web view UI layer which will be used for menus and overlaid HUDs within [Project Trillek][trillek].

It is a single page web application that can interface with the game through a specific set of exposed API methods.

## Dependencies

The following systems are used to fetch the dependencies.

 * [Bundler][]
 * [Bower][]
 * [NPM][]

You can install the dependencies by executing these commands.

```bash
bundle install
bower install
npm install
```

If you wish to build the project using [grunt][] you'll need the `grunt-cli` package installed globally. You can do this with the following command.

```bash
npm install -g grunt-cli
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

Because of the way Trillek will load the web UI, without a server, all paths are relative. This means that you can actually open `./loader.html` directly using the `file://` protocol, without a server, and it should run absolutely fine (assuming you've compiled the SASS to CSS).

It's also possible to load the UI using a small HTTP server; I like to use Python for this. Python's built in server is invoked differently between versions 2 and 3, simply `cd` to this directory and execute the appropriate command.

```bash
# Python 3
python -m http.server

# Python 2
python -m SimpleHTTPServer
```

Or use any other HTTP server of you choosing, there are even quite a few for [node][] on [npm][].

## Tests

All tests are stored within `./tests`, they use [tape][] for assertions and execution. You can run the tests on your command line with `npm test`.

## Building

Presuming you have all of the dependencies installed correctly, you can simply execute grunt.

```bash
grunt
```

That's it. That will compile and minify the SASS, plus build any requires sprite sheets, while concatenating and minifying all of the JavaScript. It also swaps out the relatively bulky [RequireJS][] script loader for it's tiny shim counterpart: [Almond][]. All in one tiny command.

Once you're built you can load the built files using `./build/loader.html` instead of `./loader.html`. The `./build/loader.html` version points to the minified JavaScript file and could feasibly contain extra optimisations in the future.

All built files are stored within `./build/assets/`, once the build is complete it will compress the contents of that directory and drop a zip file into `./dist` named using the current project name and version. For example: `trillek-ui-1.0.0.zip`.

If you have a build up of build artefacts, such as images that are no longer found within the source, you can remove them by executing `grunt clean`. This will remove the entirety of `./build/assets`.

[tape]: https://github.com/substack/tape
[trillek]: http://trillek.org/
[bundler]: http://bundler.io/
[bower]: http://bower.io/
[node]: http://nodejs.org/
[npm]: https://npmjs.org/
[grunt]: http://gruntjs.com/
[requirejs]: http://requirejs.org/
[almond]: https://github.com/jrburke/almond
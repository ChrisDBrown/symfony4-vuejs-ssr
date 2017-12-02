# What is this?

Until recently server-side rendering in VueJS wasn't possible outside Node.js environments, as the rendering component used a number of node-specific functionality. However, with 2.5 the `vue-server-renderer` ships with a basic version of the rendering engine suitable for use on non-node environments like [php-v8js](https://github.com/phpv8/v8js) and [nashorn](https://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn). This is a very simplified example of how to get server-side rendering working entirely within PHP in the context of a Symfony 4 application.

## Prerequisites

- PHP 7.1+ with [php-v8js](https://github.com/phpv8/v8js) module installed
  - [brew](https://brew.sh/) gives an easy way to do this on OSX with `brew install php71-v8js`
- Composer 1.5.x
- Node 8.x
- Yarn 1.3.x

## Getting Started

1) `composer install` to get PHP dependencies
2) `yarn install` to get JS dependencies
3) `yarn run encore dev` to build JS files (or `yarn run encore dev --watch` for interactive watch)
4) `php bin/console server:run` to start a PHP server on `127.0.0.1:8000`

## Explanation

In broad strokes this works by:
- calling `RenderService::render()` to run the vue app code in `php-v8js`
  - as part of this `window.__INITIAL_STATE__` is filled with the server-generated app state
- outputting the result as a string, which is passed to `app.html.twig` to generate the page
- VueJS boots in the browser, sees `data-server-rendered="true"` on the root node and performs hydration based on that and `window.__INITIAL_STATE__`

## Caveats

The biggest outstanding issue with this is that the server isn't calling the `/number` endpoint to pre-fetch data, but hardcoding a starting value instead. This could definitely be improved by creating a generic API layer that can do both browser and server based calls with the same function.

The other issue is that this setup is tricky to develop with - the `php-v8js` module doesn't deal with parsing errors very well, and I often found myself having to manually kill browser tabs to stop them running up 100% CPU usage when something went wrong. Hopefully this'll improve over time as it matures.
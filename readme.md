# Excalibur Tactics Sample

This is a high fidelity example that shows you how to make a tactics game (inspired by Advance Wars!).

Also it's open source so use as much of this as you want in your own game!

Features include
- Turn based combat
- Human and Computer players
- Path Finding with A* least turns
- HTML based UI
- Level generation


![sample of the game running](./tactics.gif)

## Running locally

* Using [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)
* Run the `npm install` to install dependencies
* Run the `npm run start` to run the development server to test out changes

## Building bundles

* Run `npm run start` to produce javascript bundles for debugging in the `dist/` folder
* Run `npm run build` to produce javascript bundles for production (minified) in the `dist/` folder
# gulp-automation-boilerplate

> Project tested with node v 6.2.2

A very basic boilerplate to start your Javascript project ideally with [ES6](https://babeljs.io/docs/learn-es2015/) and [Less](http://lesscss.org/) css preprocessor.

- The aim of this package is to start basic web project which usually have JS and css (less css) files, build them for release by compiling ES2015 code and concatenate js and css files into single bundle.

- Bundling done with simple commands using [Gulp](http://gulpjs.com/) which is famous build system to automate build process.


## Install

First, clone the repo via git:

```bash
git clone https://github.com/mizmaar3/gulp-automation-boilerplate your-project-name
```

And then install dependencies.

```bash
$ cd your-project-name && npm install
```


## Build

Run this command to build and bundle the project.

```bash
$ npm run build
```

or simple run

```bash
$ gulp
```

inside your project folder


## Start Server

To start local server please run

```bash
$ npm run start
```

and goto http://127.0.0.1:9400 to test if code worked. You should get some text on the page.


## DevTools

#### Toggle Chrome DevTools

- OS X: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>


## Example Code Explanation

#### The JS folder

- JS folder contains two js files `script1.jsx` which has an `ES6` arrow function and `script2.js` which have simple javascript function. Both will be compiled with `Babel.js` using `ES2015` presents and minified in single `main.js` file inside `dist` folder after building the project.


#### The LESS folder

- Less folder contains `.less` files which will be compiled with `gulp-less` and concatenated into single file `style.css`, can be found in `dist` folder after building project.

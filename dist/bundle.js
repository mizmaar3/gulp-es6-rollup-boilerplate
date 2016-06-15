(function () {
  'use strict';

  function cube(x) {
    var cube = x * x;
    return "Cube of " + x + ": " + cube;
  }

  function name(name) {
    return "Your name is " + name;
  }

  console.log(cube(2));
  console.log(name('Usman'));

}());
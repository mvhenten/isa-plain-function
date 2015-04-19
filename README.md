# isa-plain-function

[![Build Status](https://drone.io/github.com/mvhenten/isa-plain-function/status.png)](https://drone.io/github.com/mvhenten/isa-plain-function/latest)

Simple check to see if a function has any prototype members.

Sometimes it's useful to check if a function can be considered "class-like".
This is the case when the `prototype` of that function has been modified.

## Installation

    npm install isa-plain-function
    
## Usage

    var isaPlainFunction = require('isa-plain-function');
    
    isaPlainFunction( function(){} ); // true
    
    var Foo = function(){};
    
    Foo.prototype = {
        awesome: true,
    };
    
    isaPlainFunction( Foo ); // false
    
Check the [test](./test/index.js) for edge cases. 

### Note

This module uses `Object.getOwnPropertyNames` when available to detect any 
non-ennumerable properties created using `Object.defineProperty` and co.


"use strict";

/**
 * Check if the function provided is a plain function, e.g. it's prototype has
 * no members at all except for `constructor`
 * 
 * @param {function} value Any value to check 
 * @returns {boolean} True or false.
 */
module.exports = function isPlainFunction(value) {
    if (typeof value !== 'function') return false;

    if (!value.prototype)
        return true;

    for (let c in value.prototype)
        return false;

    if( ! Object.getOwnPropertyNames ) 
        return true;

    const own = Object.getOwnPropertyNames(value.prototype);

    if (own.length !== 1)
        return false;
        
    if (/^class /.test(value.toString()))
        return false;

    return true;
};

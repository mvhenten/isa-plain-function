var test = require('tape'),
    isPlainFunction = require('../index');


// fixtures
var ClassLike = function() {};
ClassLike.prototype.test = function() {};

var instanceOfClassLike = new ClassLike();

var ClassLike2 = function() {};

Object.defineProperty(ClassLike2.prototype, 'test', {
    value: 42,
    enumerable: false,
});

var cases = [{
    label: 'Anonymous functions are plain functions',
    value: function() {},
    ok: true,
}, {
    label: 'Named functions are plain functions',
    value: function whatsMyName() {},
    ok: true,
}, {
    label: 'Function is not plain when it has prototype members',
    value: function ClassLike() {},
    ok: true,
}, {
    label: 'Function is not plain with non-ennumerable prototype members',
    value: function ClassLike2() {},
    ok: true,
}, {
    label: 'Instances are not plain functions',
    value: instanceOfClassLike,
    ok: false,
}, {
    label: 'Arrays are not plain functions',
    value: Array,
    ok: false,
}, {
    label: 'Arrays are not plain functions',
    value: [],
    ok: false,
}, {
    label: 'Numbers are not plain functions',
    value: 42,
    ok: false,
}, {
    label: 'Numbers are not plain functions',
    value: Number,
    ok: false,
}, {
    label: 'Dates are not plain functions',
    value: Date,
    ok: false,
}, {
    label: 'Objects are not plain functions',
    value: Object,
    ok: false,
}, {
    label: 'Objects are not plain functions',
    value: {},
    ok: false,
}, {
    label: 'Booleans are not plain functions',
    value: true,
    ok: false,
}, {
    label: 'Booleans are not plain functions',
    value: Boolean,
    ok: false,
}, {
    label: 'Function is not a plain functions',
    value: Function,
    ok: false,
}, {
    label: 'NULL is not a plain functions',
    value: null,
    ok: false,
}, {
    label: 'undefined is not a plain functions',
    ok: false,
}, ];


test('isPlainFunction', function(assert) {

    cases.forEach(function(testCase) {
        assert.equal(isPlainFunction(testCase.value), testCase.ok, testCase.label);
    });

    assert.end();

});
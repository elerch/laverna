/* global describe, it */
'use strict';

// Test files
var tests = [
    './load.js',
    './apps/notes/form.js',
    './apps/notes/list.js',
    './apps/notes/show.js',
    './apps/notebooks/form.js',
    './apps/notebooks/list.js',
    './apps/notebooks/remove.js',
    './apps/tags/form.js',
    './apps/tags/list.js',
    './apps/tags/remove.js',
    './apps/navbar/navbar.js',
    './modules/fuzzySearch/fuzzySearch.js',
];

// Load all test files
tests.forEach(function(val) {
    require(val);
});

describe('end session', function() {
    it('ends session', function(client) {
        client.end();
    });
});

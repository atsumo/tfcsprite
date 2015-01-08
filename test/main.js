/*global describe, it*/
"use strict";

var fs = require("fs"),
    should = require("should");

require("mocha");

delete require.cache[require.resolve("../")];

var Converter = require("../lib/converter");

describe("tfcsprite converter", function() {
  it('should convert', function(done) {
    var tfcsprite = new Converter('test/fixtures/sample.js', 'test/fixtures/sprites', '_');
    var converted = tfcsprite.convert();
    fs.readFile('test/expected/sample.js', function (err, data) {
      if (err) throw err;
      converted.should.equal(String(data));
      done();
    });
  });
});
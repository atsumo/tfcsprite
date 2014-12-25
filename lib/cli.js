#!/usr/bin/env node

var fs = require('fs');
var Converter = require('./converter');

module.exports = function(program) {
    var target = program.args[0];

    if (!target) {
        program.help();
        return console.log('should set javascript file name!');
    }

    if (program.output) console.log('  - output', program.output);
    if (program.sprites) console.log('  - sprites', program.sprites);
    if (program.sprites) console.log('  - prefix', program.prefix);
    console.log('  - convert', target);

    var tfcsprite = new Converter(target, program.sprites, program.prefix);
    var buffer = tfcsprite.convert();
    var dest = program.output || target;

    fs.writeFile(dest, buffer, {encoding: 'utf8'}, function(err) {
        if (err) {
            return console.log('failed to write converted source');
        }

        console.log('Success! converted file create ->', dest);
    });
};

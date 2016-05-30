module.exports = function (grunt) {

    var path = require('path');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                //     copy: true,
                    targetDir: './lib',
                    layout: 'byType',
                //     install: true,
                //     verbose: false,
                //     prune: false,
                //     cleanTargetDir: true,
                //     cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-bower-task');

};

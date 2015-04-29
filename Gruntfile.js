module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            all: {
                src: ["items/**/*.ts", "flows/**/*.ts"],
                out: 'build/pro.motion.extensions.js'
            },
            simpleBarChart: {
                src: ["items/simpleBarChart/**/*.ts"],
                out: 'build/items/simpleBarChart/pro.motion.simpleBarChart.js'
            },
            textStack: {
                src: ["items/textStack/**/*.ts"],
                out: 'build/items/textStack/pro.motion.textStack.js'
            }
        },
        usebanner: {
            All: {
                options: {
                    banner: '/*!\n' +
                    ' * @license: https://github.com/pro-graphics/pro-motion-extensions\n' +
                    ' **/\n'
                },
                files: {src: ['build/pro-motion-extensions.js']}
            },
            GaryC: {
                options: {
                    banner: '/*!\n' +
                    ' * @license: https://github.com/pro-graphics/pro-motion-extensions\n' +
                    ' * @author: Gary Chamberlain, gary@pro.graphics.\n' +
                    ' **/\n'
                },
                files: {
                    src: [
                        'build/items/simpleBarChart/pro.motion.simpleBarChart.js',
                        'build/items/textStack/pro.motion.textStack.js'
                    ]
                }
            }
        },
        compress: {
            package: {
                options: {
                    mode: 'zip',
                    archive: 'build/pro.motion.extensions.zip',
                    comment: 'MIT License - See https://github.com/pro-graphics/pro-motion-extensions.'
                },
                files: [{
                    expand: true,
                    cwd: 'build/',
                    src: '**',
                    dest: 'extensions/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', ['ts']);
    grunt.registerTask('package', ['ts', 'usebanner', 'compress']);

};
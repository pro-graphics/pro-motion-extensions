module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        proVersion: "0.15",
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            all: {
                src: ["items/**/*.ts", "flows/**/*.ts"],
                out: 'build/js/pro.motion.extensions.js'
            },
            flow_pageStack: {
                src: ["flows/pageStack/**/*.ts"],
                out: 'build/js/flows/pageStack/pro.motion.flow.pageStack.js'
            },
            item_imageStack: {
                src: ["items/imageStack/**/*.ts"],
                out: 'build/js/items/imageStack/pro.motion.item.imageStack.js'
            },
            item_simpleBarChart: {
                src: ["items/simpleBarChart/**/*.ts"],
                out: 'build/js/items/simpleBarChart/pro.motion.item.simpleBarChart.js'
            },
            item_textStack: {
                src: ["items/textStack/**/*.ts"],
                out: 'build/js/items/textStack/pro.motion.item.textStack.js'
            }
        },
        usebanner: {
            All: {
                options: {
                    banner: '/*!\n' +
                    ' * @license: https://github.com/pro-graphics/pro-motion-extensions\n' +
                    ' **/\n'
                },
                files: {src: ['build/js/pro.motion.extensions.js']}
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
                        'build/js/flows/pageStack/pro.motion.flow.pageStack.js',
                        'build/js/items/imageStack/pro.motion.item.imageStack.js',
                        'build/js/items/simpleBarChart/pro.motion.item.simpleBarChart.js',
                        'build/js/items/textStack/pro.motion.item.textStack.js'
                    ]
                }
            }
        },
        uglify: {
            options: {
                screwIE8: true,
                preserveComments: 'some'
            },
            extensions: {
                files: {
                    'build/js/pro.motion.extensions.min.js': ['build/js/pro.motion.extensions.js']
                }
            }
        },
        compress: {
            gzip: {
                options: {mode: 'gzip'},
                expand: true,
                flatten: true,
                ext: '.js',
                extDot: 'last',
                src: [
                    'build/js/pro.greensock.min.js',
                    'build/js/pro.motion.min.js',
                    'build/js/pro.motion.extensions.min.js'],
                dest: '/pro.motion.gzip/<%= proVersion %>/'
            },
            package: {
                options: {
                    mode: 'zip',
                    archive: 'pro.motion.extensions.<%= proVersion %>.zip',
                    comment: 'MIT License - See https://github.com/pro-graphics/pro-motion-extensions.'
                },
                files: [{
                    expand: true,
                    cwd: 'build/',
                    src: '**',
                    dest: 'pro.motion/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask('default', ['ts']);
    grunt.registerTask('package', ['ts', 'usebanner', 'uglify', 'compress:package']);
    grunt.registerTask('gzip', ['compress:gzip']);
};
module.exports = function (grunt) {
    const JS_SOURCE_FILES = 'src/**/*.js';
    
    grunt.initConfig({
        browserify: {
            'bundle.js': {
                files: {
                    'dist/js/bundle.js': [
                        JS_SOURCE_FILES
                    ]
                },
                options: {
                    transform: [['babelify', {
                        presets: "es2015"
                    }]],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        clean: {
            dist: ['dist/index.html', 'dist/css', 'dist/js']
        },
        copy: {
            'index.html': {
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },
        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            sources: [
                JS_SOURCE_FILES
            ]
        },
        sass: {
            'main.min.css': {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'dist/css/main.min.css': 'scss/main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('build', [
        'eslint',
        'clean',
        'copy',
        'browserify',
        'sass'
    ]);
};

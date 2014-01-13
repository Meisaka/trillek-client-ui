var packageFilePath = './package.json';
var packageFile = require(packageFilePath);

module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON(packageFilePath),
		copy: {
			main: {
				expand: true,
				src: './src/assets/images/raw/**',
				dest: './build/'
			}
		},
		compass: {
			dist: {
				options: {
					config: './config.rb',
					environment: 'production',
					outputStyle: 'compressed',
					noLineComments: true
				}
			}
		},
		imagemin: {
			dynamic: {
				files: [
					{
						expand: true,
						cwd: './build/assets/',
						src: '**/*.{png,jpg,gif}',
						dest: './build/assets'
					}
				]
			}
		},
		jshint: {
			all: './src/assets/js/**/*.js'
		},
		karma: {
			options: {
				configFile: './tests/karma.conf.js',
			},
			once: {
				browsers: ['PhantomJS'],
				singleRun: true
			},
			continuous: {
				browsers: ['PhantomJS']
			},
			dev: {
			}
		},
		jsdoc: {
			dist: {
				src: ['./src/assets/js/**/*.js'],
				options: {
					destination: 'doc'
				}
			}
		},
		requirejs: {
			compile: {
				options: {
					name: 'almond',
					baseUrl: './src/assets/js',
					include: [
						'main'
					],
					mainConfigFile: './src/assets/js/require-config.js',
					out: './build/assets/js/main.min.js',
					optimize: 'uglify2',
					wrap: true,
					uglify2: {
						mangle: true
					}
				}
			}
		},
		compress: {
			main: {
				options: {
					archive: ['dist/', packageFile.name, '-', packageFile.version, '.zip'].join(''),
					mode: 'zip'
				},
				files: [
					{
						expand: true,
						cwd: './build',
						src: ['**']
					}
				]
			}
		},
		clean: ['./build/assets/**', './doc']
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-jsdoc');

	grunt.registerTask('default', [
		'copy',
		'compass',
		'imagemin',
		'jshint',
		'karma:once',
		'jsdoc',
		'requirejs',
		'compress'
	]);
};
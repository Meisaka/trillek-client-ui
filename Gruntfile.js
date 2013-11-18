var packageFilePath = './package.json';
var packageFile = require(packageFilePath);

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON(packageFilePath),
		copy: {
			main: {
				expand: true,
				src: './assets/images/raw/**',
				dest: './build/'
			}
		},
		compass: {
			dist: {
				options: {
					config: './config.rb',
					environment: 'production',
					outputStyle: 'compressed',
					noLineComments: true,
					imagesDir: 'build/assets/images'
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
			all: './assets/js/**/*.js'
		},
		requirejs: {
			compile: {
				options: {
					name: '../../bower_components/almond/almond',
					include: 'main',
					mainConfigFile: './assets/js/require-config.js',
					out: './build/assets/js/main.min.js',
					optimize: 'uglify2',
					wrap: true
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
		clean: ['./build/assets/**']
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', [
		'copy',
		'compass',
		'imagemin',
		'jshint',
		'requirejs',
		'compress'
	]);
};
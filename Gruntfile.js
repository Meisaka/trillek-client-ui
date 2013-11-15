var packageFilePath = './package.json';
var packageFile = require(packageFilePath);

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON(packageFilePath),
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
		requirejs: {
			compile: {
				options: {
					name: '../../bower_components/almond/almond',
					include: 'main',
					mainConfigFile: './assets/js/main.js',
					out: './assets/js/main.min.js',
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
				src: [
					'./assets/css/main.css',
					'./assets/js/main.min.js',
					'./loader.html'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-compress');

	grunt.registerTask('default', [
		'compass',
		'requirejs',
		'compress'
	]);
};
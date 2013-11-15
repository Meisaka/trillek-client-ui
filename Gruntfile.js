module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),
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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', [
		'compass',
		'requirejs'
	]);
};
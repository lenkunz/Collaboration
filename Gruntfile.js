module.exports = function(grunt){
	'use strict';
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			angular_html: {
				expand: true,
				flatten: true,
				src: 'src/components/*.html',
				dest: 'dist/components/'
			}
		},
		concat: {
			main_js: {
				src: ['src/index/main.js', 'src/index/script/**/*.js'],
				dest: 'dist/temp/main.js' 
			},
			main_css: {
				src: ['src/index/main.css', 'src/index/style/**/*.css'],
				dest: 'dist/temp/main.css'
			}
		},
		includes: {
			main: {
				src: ['src/index/main.html'],
				dest: 'dist/index.html'
			}
		},
		wiredep: {
			main: {
				src: [
					'<%= includes.main.dest %>'
				],
			},
		},
		jshint: {
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true,
					browser: true
				}
			},
			main_js: {
				files: '<config:concat.main_js.src>'
			}
		},
		cssmin: {
			options: {
				banner: '/* <%= pkg.name %> \nAuthor : Rapeapach Suwasri \nLicense : CC 1.0 Universal \nDate : <%= grunt.template.today("dd-mm-yyyy") %>\n*/'
			},
			main_css: {
				src: ["<%= concat.main_css.dest %>"],
				dest: 'dist/main.min.css'
			}
		},
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> \nAuthor : Rapeapach Suwasri \nLicense : CC 1.0 Universal \nDate : <%= grunt.template.today("dd-mm-yyyy") %>\n*/',
				mangle: false
			},
			main_js: {
				src: ["<%= concat.main_js.dest %>"],
				dest: 'dist/main.min.js'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-includes');
	
	grunt.registerTask('default', ['jshint', 'concat', 'includes', 'wiredep', 'copy', 'uglify', 'cssmin']);
	grunt.registerTask('test', ['default']);
}
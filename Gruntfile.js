module.exports = function(grunt) {

	var src = grunt.option('src');
	var dest = grunt.option('dest');

	src = (dest == null) ? "src/" : src;
	dest = (dest == null) ? "dist/" : dest;

	grunt.initConfig({
		imagemin: {
			main: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/'
				}]
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// Default task(s).
	grunt.registerTask('default', ['imagemin']);
};
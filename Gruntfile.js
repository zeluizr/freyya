module.exports = function(grunt) {
	var src = grunt.option('src');
	var dest = grunt.option('dest');
	if (src == null) {
		src = "src/"
	}
	if (dest == null) {
		dest = "dist/"
	}
	grunt.initConfig({
		imagemin: {
			main: {
				files: [{
					expand: true,
					cwd: src,
					src: ['**/*.{png,jpg,gif}'],
					dest: dest
				}]
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// Default task(s).
	grunt.registerTask('default', ['imagemin']);
};
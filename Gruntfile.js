module.exports = function(grunt) {
  // configure the tasks
  let config = {

    nunjucks: {
      options: {
        data:  grunt.file.readJSON('data.json'),
        paths: 'src'
      },
      render: {
        files: [ {
          cwd: "src",
          src: "**/*.njk",
          dest: "dist",
          expand: true,
          ext: ".html"
        } ]
      }
    },

    watch: {
      nunjucks: {
        files: ['src/**/*'],
        tasks: ['nunjucks'],
        options: {
          livereload: true,
          interrupt: false,
          spawn: false
        }
      }
    }

  };

  grunt.initConfig(config);

  // load the tasks
  grunt.loadNpmTasks('grunt-nunjucks-2-html');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // define the tasks
  grunt.registerTask('default', [
    'nunjucks', 'watch'
  ] );

};
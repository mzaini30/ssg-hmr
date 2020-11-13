module.exports = function(grunt) {
  // configure the tasks
  let config = {

    nunjucks: {
      options: {
        data:  grunt.file.readJSON('data.json'),
        paths: 'nunjucks'
      },
      render: {
        files: [ {
          cwd: "nunjucks",
          src: "**/*.njk",
          dest: "html",
          expand: true,
          ext: ".html"
        } ]
      }
    },

    watch: {
      nunjucks: {
        files: ['nunjucks/**/*'],
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
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration.
    clean: {
      dist: ["dist"]
    },

    // Less
    less: {
      development: {
        options: {
          paths: ["less"]
        },
        files: {
          "css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less"
        }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {
          "dist/css/<%= pkg.name %>.min.css": "less/<%= pkg.name %>.less"
        }
      }
    },

    // Run predefined tasks whenever watched file patterns are added, changed or deleted.
    watch: {
      less: {
          files: ["*.less", "less/*.less","less/variables/*.less"]
        , tasks: ["less:development"]
        , options : {
            livereload: true
          , nospawn: true
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
};
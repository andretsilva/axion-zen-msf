module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    sass: {                  // Task
    dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: '../assets/sass',
          src: ['*.scss'],
          dest: '../assets/css',
          ext: '.min.css'
        }]
      }
   },
    watch: {
      css: {
        files: '../assets/sass/*.scss',
        tasks: ['sass']
      },
      js: {
        files: [
          '../assets/js/main.js'
        ],
        tasks: ['uglify']
      },
    },
    uglify: {
      dist: {
        files: {
          '../assets/js/main.min.js': [           
            '../assets/js/main.js'    // Custom JavaScript
          ]
        }
      }
      
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify','jshint', 'watch']);

};
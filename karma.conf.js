//jshint strict: false
module.exports = function(config) {
  config.set({

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app.module.js',
      'src/js/**/*.module.js',
      'src/js/**/*.component.js',
      'src/js/**/*.spec.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};

angular.module('github').
  factory('Github', ['$resource', function($resource){
    return {
      base: $resource('https://api.github.com/repos/carlospnav/:project', {}, {
        lastUpdate: {
          method: 'GET',
          params: { project: '@project' }
        }, 
      }),
      specific: $resource('https://api.github.com/repos/carlospnav/:project/:type', {}, {
        commits: {
          method: 'GET',
          params: { project: '@project', type: 'commits' },
          isArray: true
        },
        todo: {
          method: 'GET',
          params: { project: '@project', type: 'content/todo.js' }
        }, 
      })
    }
  }]);
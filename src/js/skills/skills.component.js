'use strict';

angular.module('skills')
  .component('skills', {
    templateUrl: 'dist/js/skills/skills.template.html',
    controller: function SkillsController(){
      this.skills = [
        'AngularJS',
        'JavaScript',
        'WebApi',
        'Entity Framework',
        'HTML',
        'Gulp',
        'Git',
        'C#',
        'T-Sql',
        'CSS',
        'ASP.NET MVC',
        'JasmineJS',
        'Npm',
        'Scrum'
      ]
    }
  });
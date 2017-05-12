'use strict';

angular.module('skills')
  .component('skills', {
    templateUrl: 'dist/js/skills/skills.template.html',
    controller: function SkillsController(){
      this.skills = [
        { 
          name: 'AngularJS',
          size: { 'font-size' : '60px' }
        },
        {
          name: 'JavaScript',
          size: { 'font-size' : '60px' }
        },
        {
          name: 'WebApi',
          size: { 'font-size' : '10px' }
        },
        {
          name: 'Entity Framework',
          size: { 'font-size' : '10px' }
        },
        {
          name: 'HTML',
          size: { 'font-size' : '40px' }
        },
        {
          name: 'Gulp',
          size: { 'font-size' : '30px' }
        },
        {
          name: 'Git',
          size: { 'font-size' : '40px' }
        },
        {
          name: 'C#',
          size: { 'font-size' : '10px' }
        },
        {
          name: 'T-Sql',
          size: { 'font-size' : '10px' }
        },
        {
          name: 'CSS',
          size: { 'font-size' : '40px' }
        },
        {
          name: 'ASP.NET MVC',
          size: { 'font-size' : '20px' }
        },
        {
          name: 'JasmineJS',
          size: { 'font-size' : '30px' }
        },
        {
          name: 'Npm',
          size: { 'font-size' : '20px' }
        },
        {
          name: 'Scrum',
          size: { 'font-size' : '20px' }
        }
      ]
    }
  });
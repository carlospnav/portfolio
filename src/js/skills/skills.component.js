'use strict';

angular.module('skills')
  .component('skills', {
    templateUrl: 'dist/js/skills/skills.template.html',
    controller: function SkillsController(){
      this.skills = [
        { 
          name: 'AngularJS',
          size: { 'font-size' : '60px' },
          class: 'max-skill-size'
        },
        {
          name: 'JavaScript',
          size: { 'font-size' : '60px' },
          class: 'max-skill-size'
        },
        {
          name: 'WebApi',
          size: { 'font-size' : '10px' },
          class: 'min-skill-size'
        },
        {
          name: 'Entity Framework',
          size: { 'font-size' : '10px' },
          class: 'min-skill-size'
        },
        {
          name: 'HTML',
          size: { 'font-size' : '40px' },
          class: 'large-skill-size'
        },
        {
          name: 'Gulp',
          size: { 'font-size' : '30px' },
          class: 'medium-skill-size'
        },
        {
          name: 'Git',
          size: { 'font-size' : '40px' },
          class: 'large-skill-size'
        },
        {
          name: 'C#',
          size: { 'font-size' : '10px' },
          class: 'min-skill-size'
        },
        {
          name: 'T-Sql',
          size: { 'font-size' : '10px' },
          class: 'min-skill-size'
        },
        {
          name: 'CSS',
          size: { 'font-size' : '40px' },
          class: 'large-skill-size'
        },
        {
          name: 'ASP.NET MVC',
          size: { 'font-size' : '20px' },
          class: 'medium-skill-size'
        },
        {
          name: 'JasmineJS',
          size: { 'font-size' : '30px' },
          class: 'medium-skill-size'
        },
        {
          name: 'Npm',
          size: { 'font-size' : '20px' },
          class: 'small-skills-size'
        },
        {
          name: 'Scrum',
          size: { 'font-size' : '20px' },
          class: 'small-skills-size'
        }
      ]
    }
  });
'use strict';

angular.module('skills')
  .component('skills', {
    templateUrl: 'components/skills/skills.template.html',
    controller: function SkillsController(){
      this.skills = [
        { 
          name: 'AngularJS',
          rank: 'I',
          class: 'medium-skill-size'
        },
        {
          name: 'JavaScript',
          rank: 'III',
          class: 'max-skill-size'
        },
        {
          name: 'WebApi',
          rank: 'I',
          class: 'min-skill-size'
        },
        {
          name: 'React',
          rank: 'III',
          class: 'max-skill-size'
        },
        {
          name: 'HTML 5',
          rank: 'III',
          class: 'large-skill-size'
        },
        {
          name: 'Gulp',
          rank: 'II',
          class: 'medium-skill-size'
        },
        {
          name: 'Git',
          rank: 'II',
          class: 'medium-skill-size'
        },
        {
          name: 'C#',
          rank: 'I',
          class: 'min-skill-size'
        },
        {
          name: 'T-Sql',
          rank: 'I',
          class: 'min-skill-size'
        },
        {
          name: 'CSS 3',
          rank: 'III',
          class: 'max-skill-size'
        },
        {
          name: 'JSES6',
          rank: 'II',
          class: 'medium-skill-size'
        },
        {
          name: 'JasmineJS',
          rank: 'I',
          class: 'small-skill-size'
        },
        {
          name: 'Npm',
          rank: 'II',
          class: 'small-skills-size'
        },
        {
          name: 'Scrum',
          rank: 'I',
          class: 'small-skills-size'
        }
      ]
    }
  });
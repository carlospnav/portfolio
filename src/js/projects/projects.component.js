'use strict';

angular.module('projects')
  .component('projects', {
    templateUrl: 'dist/js/projects/projects.template.html',
    controller: ['Github', function ProjectsController(Github){
      var self = this;
      this.featured = {
        items: [
          { 
            title: 'Neighborhood Map',
            imgSrc: 'dist/images/projects/neighborhoodMap.jpg',
            imgAlt: 'Image of the project: ' + this.title + '.',
            subtitle: 'A map of central Edinburgh with tourist information on select points of interest:', 
            bulletpoints: [
              'Users can browse a list of points of interest, filter them, and get Wikipedia information on the ones they are interested in.',
              'Built in Javascript using Google Maps/Wikipedia(Media Wiki) APIs and KnockoutJS.',
              'My first complete Javascript project using a Front-End framework, developed from the ground up.'
            ],
            lastCommits: [
            ],
            todoList: [],
            lastUpdated: '',
            githubLink: ''
          },
          { 
            title: 'Arcade Game',
            imgSrc: 'dist/images/projects/arcadeGame.jpg',
            imgAlt: 'Image of the project: ' + this.title + '.',
            subtitle: 'A version of Frogger, an old game from the 80s where the goal was to cross a street under heavy traffic:', 
            bulletpoints: [
              'The player must take the character across the street, moving one tile at a time and avoiding the bugs.',
              'Built with pure Javascript and focused on best practices and Object-Oriented design.',
              'My contribution to the project was developing the Object-Oriented code in app.js.',
            ],
            lastCommits: [
            ],
            todoList: [],
            lastUpdated: '',
            githubLink: ''
          },
          { 
            title: 'This Website',
            imgSrc: 'dist/images/projects/portfolioWebsite.jpg',
            imgAlt: 'Image of the project: ' + this.title + '.',
            subtitle: 'My Portfolio Website. Intended to be an alternative, interactive version of my resume:', 
            bulletpoints: [
              'Visitors can scroll down the page and browse through some interactive sections of my resume.',
              'Built with JavaScript ES5, AngularJS1, HTML5/CSS3 and Gulp for Image Optimization/Minification.',
              'Unit Tests were created using Jasmine and ran with Karma.',
            ],
            lastCommits: [
            ],
            todoList: [],
            lastUpdated: '',
            githubLink: ''
          },
        ],
        updateGithubBaseInfo: function(projectNames){
          self.featured.update(Github.base.baseInfo, ['lastUpdated', 'githubLink'], projectNames);
        },
        updateTodo: function(projectNames){
          self.featured.update(Github.specific.todo, 'todoList',  projectNames);
        },
        updateLastCommits: function(projectNames){
          self.featured.update(Github.specific.commits, 'lastCommits',  projectNames);
        },
        update: function(updateFn, type, projectNames){
          var content, parsedResource;
        
          projectNames.forEach(function(name, index){
            updateFn({ project: name }).$promise
            .then(function(data){
              if (typeof(type) === 'string'){
                if (type === 'todoList') {
                  parsedResource = JSON.parse(atob(data.content));
                  content = parsedResource.todo;
                }
                else if (type === 'lastCommits'){
                  parsedResource = JSON.parse(angular.toJson(data));
                  content = parsedResource.splice(0, 3);
                }
                self.featured.items[index][type].length = 0;
                self.featured.items[index][type] = content;
                console.log('name: ' + self.featured.items[index].title);
                console.log(self.featured.items[index][type]);  
              }
              else if (typeof(type) === 'object'){
                self.featured.items[index].lastUpdated = data.updated_at;
                self.featured.items[index].githubLink = data.url;
                console.log('name: ' + self.featured.items[index].title + ' | url: ' + self.featured.items[index].lastUpdated + '| last updated: ' + self.featured.items[index].githubLink);
              }
            });
          });
        }         
      };
      this.others = [
        {
          title: 'Budgeteer',
          imgUrl: 'dist/images/projects/thumbs/budgeteer.jpg',
          imgAlt: 'Image of the project: ' + this.title + '.',
          description: 'A basic shell for an organization/personal finance application.'
        },
        {
          title: 'HomeSite',
          imgUrl: 'dist/images/projects/thumbs/homesite.jpg',
          imgAlt: 'Image of the project: ' + this.title + '.',
          description: 'A photo management application, written in the .NET stack focused entirely on the Back-End side.'
        },
        {
          title: '',
          imgUrl: 'dist/images/projects/thumbs/unavailable.jpg',
          imgAlt: 'Project unavailable.',
          description: 'Project yet unavailable.'
        },  
        {
          title: '',
          imgUrl: 'dist/images/projects/thumbs/unavailable.jpg',
          imgAlt: 'Project unavailable.',
          description: 'Project yet unavailable.'
        },    
      ]
      // this.featured.updateLastCommits([ 'neighborhood-Map', 'frontend-nanodegree-arcade-game', 'carlospnav.github.io' ]);
  }]});

//To-do:
//Create the element on the page that displays the github information.
//Once project is finalized, remove console logs.
  
  
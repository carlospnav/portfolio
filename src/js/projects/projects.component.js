'use script';

angular.module('projects')
  .component('projects', {
    templateUrl: "dist/js/projects/projects.template.html",
    controller: function ProjectsController(){
      this.featured = [
        { 
          title: 'Neighborhood Map',
          imgSrc: 'dist/images/projects/imgs/neighborhoodMap.jpg',
          imgAlt: 'Image of the project: ' + this.featured[0].title + '.',
          subtitle: 'A map of central Edinburgh with tourist information on select points of interest.', 
          bulletpoints: [
            'Users can browse a list of points of interest, filter them, and get Wikipedia information on the ones they are interested in.',
            'Built in Javascript using Google Maps/Wikipedia(Media Wiki) APIs and KnockoutJS.',
            'My first complete Javascript project using a Front-End framework, developed from the ground up.'
          ]
        },
        { 
          title: 'Arcade Game',
          imgSrc: 'dist/images/projects/imgs/arcadeGame.jpg',
          imgAlt: 'Image of the project: ' + this.featured[1].title + '.',
          subtitle: 'A version of Frogger, an old game from the 80s where the goal was to cross a street under heavy traffic.', 
          bulletpoints: [
            'The player must take the character across the street, moving one tile at a time and avoiding the bugs.',
            'Built with pure Javascript and focused on best practices and Object-Oriented design.',
            'My contribution to the project was developing the Object-Oriented code in app.js.',
          ]
        },
        { 
          title: 'This Website',
          imgSrc: 'dist/images/projects/imgs/portfolioWebsite.jpg',
          imgAlt: 'Image of the project: ' + this.featured[2].title + '.',
          subtitle: 'My Portfolio Website. Intended to be an alternative, interactive version of my resume.', 
          bulletpoints: [
            'Visitors can scroll down the page and browse through some interactive sections of my resume.',
            'Built with JavaScript ES5, AngularJS1, HTML5/CSS3 and Gulp for Image Optimization/Minification.',
            'Unit Tests were created using Jasmine and ran with Karma.',
          ]
        },
      ]
    }
  });
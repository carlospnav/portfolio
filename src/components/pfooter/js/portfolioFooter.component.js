'use strict';

angular.module('portfolioFooter')
  .component('portfolioFooter', {
    templateUrl: 'components/pfooter/portfolio.footer.template.html',
    controller: function PortfolioFooterController(){
      this.chat = 'Hi! Im a Front-End Web Developer, passionate about logics, ' +
      'puzzles, design, and user experience. If you liked this portfolio and would ' +
      'like to contact me, click on one of the links on the menu to the bottom right.',
      this.thanks = 'Thanks for visiting!',
      this.name = 'Carlos Navarrete',
      this.location = 'Brazil',
      this.mediaLinks = [
        { 
          title: 'Connect',
          links: [
            {
              title: 'Facebook',
              url: 'https://www.facebook.com/carlos.navarretti'
            }
          ]
        },
        {
          title: 'Professionally',
          links: [
            {
              title: 'Github',
              url: 'https://github.com/carlospnav'
            },
            {
              title: 'Linkedin',
              url: 'https://www.linkedin.com/in/carlosnav/'
            }
          ]
        }
      ]
    }
  });
angular
  .module('banner')
    .component('banner', {
      templateUrl: "dist/js/banner/banner.template.html",
      controller: function BannerController(){
        this.titles = [
          { name: "Web Developer" },
          { name: "Weekend Designer" },
          { name: "World Traveller" }   
        ],
        this.img = {
          url: "dist/images/banner/portrait/portrait.jpg",
          alt: "Profile image of developer."
        },
        this.socialMedia = [
          { 
            fontAwesomeType: "fa-facebook-square",
            fontAwesomeSize: "fa-2x", 
            url: "https://www.facebook.com/carlos.navarrette", 
          },          
          { 
            fontAwesomeType: "fa-github",
            fontAwesomeSize: "fa-2x",  
            url: "https://www.github.com/carlospnav"
          },
          { 
            fontAwesomeType: "fa-linkedin-square", 
            fontAwesomeSize: "fa-2x", 
            url: "https://www.linkedin/carlospnav"
          },
          {
            fontAwesomeType: "fa-envelope",
            fontAwesomeSize: "fa-2x", 
            url: "karnav@gmail.com"
          }
          
        ]
      }
    });
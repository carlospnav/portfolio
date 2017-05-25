angular
  .module('banner')
    .component('banner', {
      templateUrl: "dist/js/banner/banner.template.html",
      controller: function BannerController(Github){
        this.titles = [
          { name: "Web Developer" },
          { name: "Weekend Designer" },
          { name: "Carlos Navarrete" }   
        ],
        this.img = {
          url: "dist/staticimages/gifoto.jpg",
          alt: "Profile image of developer."
        },
        this.socialMedia = [
      
          { 
            type: "entypo-github-circled",
            url: "https://www.github.com/carlospnav"
          },
          { 
            type: "entypo-linkedin-circled", 
            url: "https://www.linkedin/carlospnav"
          },
          { 
            type: "entypo-facebook-circled",
            url: "https://www.facebook.com/carlos.navarrette", 
          },    
          {
            type: "entypo-info-circled",
            url: "karnav@gmail.com"
          }
        ]
      }
    });
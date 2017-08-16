angular
  .module('banner')
    .component('banner', {
      templateUrl: "components/banner/banner.template.html",
      controller: function BannerController(Github){
        this.titles = [
          { name: "Carlos Navarrete" },
          { name: "Web Developer" },
        ],
        this.img = {
          url: "components/images/bannerme.jpg",
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
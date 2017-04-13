'use strict';

angular.module('education')
.component('education', {
  templateUrl:'dist/js/education/education.template.html',
  controller: function EducationController(){
    this.schools = [
      {
        name: 'Infnet Institute',
        degree: 'Post Grad.',
        date: '2015-2017',
        program: 'Software Engineering with .NET',
        description: 'Spectrum blotantis pocolinearos capadocium spector ehshn aopieauhsh ' +
        'heahai jhsanhsoahs asosp hsaishh eaeuoi sapsosopaso sujaosjisoj ajsoja saojjo ososl',
        thumbnail: 'dist/images/education/infnet.jpg',
        thumbAlt: 'Logo of ' + this.name
      },
      {
        name: 'Udacity',
        degree: 'Nanodegree',
        date: '2016-2017',
        program: 'Front-End Web Development',
        description: 'Spectrum blotantis pocolinearos capadocium spector ehshn aopieauhsh ' +
        'heahai jhsanhsoahs asosp hsaishh eaeuoi sapsosopaso sujaosjisoj ajsoja saojjo ososl',
        thumbnail: 'dist/images/education/udacity.jpg',
        thumbAlt: 'Logo of ' + this.name
      },
      {
        name: 'Microsoft',
        degree: 'Certification',
        date: '2015',
        program: 'Javascript ES5, HTML5 & CSS3',
        description: 'Spectrum blotantis pocolinearos capadocium spector ehshn aopieauhsh ' +
        'heahai jhsanhsoahs asosp hsaishh eaeuoi sapsosopaso sujaosjisoj ajsoja saojjo ososl',
        thumbnail: 'dist/images/education/microsoft.jpg',
        thumbAlt: 'Logo of ' + this.name
      },
    ];
  }
});
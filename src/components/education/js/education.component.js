'use strict';

angular.module('education')
.component('education', {
  templateUrl:'components/education/education.template.html',
  controller: function EducationController(){
    this.schools = [
      {
        name: 'Infnet Institute',
        degree: 'Post Grad.',
        date: '2015-2017',
        program: 'Software Engineering with .NET',
        description: 'Spectrum blotantis pocolinearos capadocium spector ehshn aopieauhsh ' +
        'heahai jhsanhsoahs asosp hsaishh eaeuoi sapsosopaso sujaosjisoj ajsoja saojjo ososl',
        thumbnail: 'components/education/images/infnet.jpg',
        thumbAlt: 'Logo of ' + this.name
      },
      {
        name: 'Udacity',
        degree: 'Nanodegree',
        date: '2016-2017',
        program: 'Front-End Web Development',
        description: 'Spectrum blotantis pocolinearos capadocium spector ehshn aopieauhsh ' +
        'heahai jhsanhsoahs asosp hsaishh eaeuoi sapsosopaso sujaosjisoj ajsoja saojjo ososl',
        thumbnail: 'components/education/images/udacity.jpg',
        thumbAlt: 'Logo of ' + this.name
      },
      {
        name: 'Udacity',
        degree: 'Nanodegree',
        date: '2016-2017',
        program: 'React + Redux',
        description: 'Spectrum blotantis pocolinearos capadocium spector ehshn aopieauhsh ' +
        'heahai jhsanhsoahs asosp hsaishh eaeuoi sapsosopaso sujaosjisoj ajsoja saojjo ososl',
        thumbnail: 'components/education/images/udacity.jpg',
        thumbAlt: 'Logo of ' + this.name
      },
      {
        name: 'Microsoft',
        degree: 'Certification',
        date: '2015',
        program: 'Javascript ES5, HTML5 & CSS3',
        description: 'Spectrum blotantis pocolinearos capadocium spector ehshn aopieauhsh ' +
        'heahai jhsanhsoahs asosp hsaishh eaeuoi sapsosopaso sujaosjisoj ajsoja saojjo ososl',
        thumbnail: 'components/education/images/microsoft.jpg',
        thumbAlt: 'Logo of ' + this.name
      },
    ];
  }
});
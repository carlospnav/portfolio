'use strict';

describe('banner', function(){

  beforeEach(module('banner'));

  describe('BannerController', function(){
    var ctrl;

    beforeEach(inject(function($componentController){
      ctrl = $componentController('banner');
    }));

    it('Should create a titles property with 3 titles', function(){
      expect(ctrl.titles).not.toBeUndefined();
      expect(typeof(ctrl.titles[0].name)).toBe('string');
      expect(ctrl.titles.length).toBe(3);
    })
  });
});
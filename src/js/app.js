function setMargin(){
  var element = document.getElementsByTagName('header')[0];
  var footer = document.getElementsByTagName('footer')[0];
  var style = window.getComputedStyle(element);
  var width = Number(style.width.slice(0, -2));
  var margin = Number(style.marginLeft.slice(0, -2));
  if (width > 1399){
    if(margin <= 150) {
      element.style.marginTop = margin + 'px';
      footer.style.marginBottom = margin + 'px';
    }
    else {
      element.style.marginTop = '150px';
      footer.style.marginBottom = '150px';
    }
  }
  else {
    element.style.marginTop = '0';
    footer.style.marginBottom = '0';
  } 
}

function setToggle(){
  var menu = document.getElementById('mobile-menu-toggler');
  var drawer = document.getElementsByClassName('banner-navigation-container')[0];
  menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
  });
}

function init(){
  setMargin();
  setToggle();
}
$(document).ready(function() {
  $('#slider').bxSlider({
      randomStart: true, 
      moveSlides: 1,     
      minSlides: 1,      
      maxSlides: 1,
      slideWidth: 500,   
      auto: true,        
      pause: 3000,       
      pagerCustom: '#pager',
      onSlideAfter: function (slideElement, oldIndex, newIndex) {
        $("#pager").text(newIndex + 1);
      },
    });
  
    $("#pager").text(slider.getCurrentSlide() + 1);
  });


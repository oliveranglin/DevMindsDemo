
$(document).ready(function() {
      
/* Every time the window is scrolled ... */
$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hideme').each( function(i){
        
        var middle_of_object = $(this).position().top + $(this).outerHeight()/10;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is 1/4 visible in the window, fade it in */
        if( bottom_of_window > middle_of_object ){
            
            $(this).animate({'opacity':'1'},1000);
            $(this).css({
                'transform': 'rotateY(0deg) rotateX(0deg)',
                'transition': 'transform 1s ease-in-out',
                'animation-fill': 'forwards'
              });
                
        }
        
    }); 

});
      
});
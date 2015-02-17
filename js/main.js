/** A function to scroll to the specified id. **/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});

$(window).scroll(function(){
    var st = $(this).scrollTop();
    if(st == 0) {
        $('#navigationbar').fadeout(400, 0);
    } else {
      $('#navigationbar').fadeIn();
    }
});
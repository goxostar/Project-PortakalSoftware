$(window).scroll(function(){
  if($(document).scrollTop()>50){
    $('nav').addClass('shrink');
  }else{
    $('nav').removeClass('shrink');
  }
})

$('#hero .btn').on('click', function(e){
  // Check for hash value
  if(this.hash !== ''){
    // Prevent default behavior
    e.preventDefault();

    // Store Hash
    const hash = this.hash;

    //Animate smooth scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top}, 500, function(){
        // Add hash to URL after scroll
        window.location.hash=hash;            
      });
  }
});

$('#latestprojects .btn').on('click', function(e){
  // Check for hash value
  if(this.hash !== ''){
    // Prevent default behavior
    e.preventDefault();

    // Store Hash
    const hash = this.hash;

    //Animate smooth scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top}, 500, function(){
        // Add hash to URL after scroll
        window.location.hash=hash;            
      });
  }
});

$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
responsiveClass:true,
responsive:{        
  480:{
      items:3,
      nav:false
  },
  768:{
      items:6,
      nav:false,
      loop:true
  }
}
})
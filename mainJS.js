            var logo = document.getElementsByClassName('head-logo')[0];
            $('.head-logo').click(function(){
                window.location = "../index.html"
            })
            $('.head-logo').hover(function(){
                logo.style.cursor = "pointer";
            })

    jQuery(document).ready(function(){
  jQuery('.bxSlider').bxSlider({
      hideControlOnEnd: true,
      mode: 'vertical',
      speed: 1200,
      touchEnabled: true,
      pager: false,
      auto: true,
      autoHover: true,
      pause: 3000
  });
    });
      
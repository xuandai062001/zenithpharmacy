require(['jquery'], function($){ 

  var clone = $(".myheader .logo").clone();
  var navToggle = $(".myheader .logo .nav-toggle").clone();
  var logo = $(".myheader .logo .logo2").clone();
  var mobileLogoImage = $(".mobile-container .mobile-logo-image .pagebuilder-mobile-hidden");

  function customResize(){
    if (window.innerWidth < 1024){
      $(".logo").remove();
      $(".content-above").prepend(logo);
      $(".content-above .logo2 img").remove();
      $(".content-above .logo2").prepend(mobileLogoImage);
      $(".content-above").prepend(navToggle);

      if ($(".content .line")[0]){
        // Do something if class exists
         
      }
      else{
        // Do something if class does not exist
        $(".content-above").after('<hr class="line">');
      }
      
    }
    else if(window.innerWidth >= 1024){
      if ($(".myheader .logo")[0]){
          
      }
      else{
        $(".myheader").prepend(clone);  
        $(".content-above .nav-toggle").remove();
        $(".content-above .logo2").remove();
      }

      $(".content .line").remove();
      
    }
    else{

    }
  }

  $( window ).resize(function(){ 
    customResize();
  })

  customResize();
});

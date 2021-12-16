(function(){
    "use strict";
    // Smooth Scroll
    /* Logo */
    $('header .logo img h1').click( function(){
        const thisImage = $(this).attr('src');

        $('html, body').stop().animate({
            scrollTop: $(thisSection).offset().top - 100
        }, 600, 'easeInCirc');
    } );

    /* Links */
    $('nav ul li a').click( function(){
        const thisSection = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(thisSection).offset().top - 100
        }, 600, 'easeInCirc');
    } );

    // Flexslider
    $(window).on('load', function() {
        $('.flexslider').flexslider();
    } );

    // Tabs
    $('#dominoseries > #tabs > ul > li > a').click( function(){
        const thisTab = $(this).attr('href');
    } );

    // Content Rotator
    let counter = 1;

    function contentRotator(){
        $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000, function(){
            if ( $(this).is( "#rotator blockquote:last-child")){
                setTimeout( function(){
                    $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function(){
                        counter = 1;
                        contentRotator();
                    });
                }, 5000 );
            }
            else {
                setTimeout(function(){
                    $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function(){
                        counter++;
                        contentRotator();
                    });
                }, 5000);
            }
        });
    }

    contentRotator();

    // Selecting Between Tabs for Domino Series
    const tabs = document.querySelectorAll('#tabs > ul > li > a');

    for (let i = 0; i < tabs.length; i++) {
         tabs[i].addEventListener('click', selectTab);
    }

    function selectTab(event){
      event.preventDefault();

      for (let i = 0; i < tabs.length; i++){
        tabs[i].removeAttribute('class');
      }

      event.target.className = 'active';

      const thisTab = event.target.getAttribute('href');
      const thisContent = document.querySelector(thisTab);

      const oldContent = document.querySelector('.visible');
      oldContent.className = 'visuallyhidden';
      oldContent.addEventListener('transitionend', function(){
          oldContent.className = 'hidden';
          thisContent.className = 'visible visuallyhidden';
          setTimeout(function(){
            thisContent.classList.remove('visuallyhidden');
          }, 20);
      },{capture: false, once:true, passive:false});
    }
}());

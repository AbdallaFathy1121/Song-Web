
$(document).ready (function() {

    // Navbar

    $(window).scroll (function(){

        if( $(window).scrollTop() >= 140 ) {

            $("nav").css({

                'backgroundColor' : '#051024',
                'borderBottom' : '1.5px solid #5841e5'

            })

        } else {

            $("nav").css({

                'backgroundColor' : 'transparent',
                'borderBottom' : '0px'

            })

        }

    });


    // Scroll Animate
    $(".navbar li a").click (function (e){

        e.preventDefault();

        $("html, body").animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top - 55

        }, 1200);

    });

    $(window).scroll(function() {

        $('.block').each(function(){

            if ( $(window).scrollTop() >= $(this).offset().top - 60 ) {

                var blockID = $(this).attr('id');

                $('nav a').removeClass("active");

                $('nav li a[data-scroll="' + blockID + '"]').addClass('active');

            }

        });

    });

    /////////////////////////////////////////////////////////////////////////////

    // Veno Box (Photo)

    $(document).ready(function() {

        $('.venobox').venobox({

            spinner: 'double-bounce',
            spinColor: '#c72c6a'
        
        });
      
    });

    ////////////////////////////////////////////////////////////////////////////

    // Owl Carousel

    $(".slider .owl-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        autoplayTimeout: 6000,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 4
          },
          900: {
            items: 6
          }
        }
      });

    //////////////////////////////////////////////////////////

    // Init AOS
    AOS.init();

    ///////////////////////////////////////////////////////

    // Loading
    $(window).on('load', function(){

        $(".box-loading").delay(0).fadeOut('slow', function(){

            $(this).remove();

        });

    });


});
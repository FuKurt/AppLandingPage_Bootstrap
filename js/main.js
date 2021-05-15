$(document).ready(()=> {

    /* ------Navbar Shrink----- */
    $(window).on("scroll", ()=> {
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    /* ------Video Popup----- */
    const videoSrc = $("#player-1").attr("src");
    $(".btn-play, .video-popup-close").on("click", ()=> {
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }else{
            $(".video-popup").addClass("open");
            $("#player-1").attr("src",videoSrc);
        }        
    });

    /* ------Features/Owl Carousel----- */
    $('.features__carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    });

    /* ------Screenshots Carousel----- */
    $('.carousel__items').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    });

    /* ------Testimonials----- */
    $('.testi__carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    });

    /* ------Members----- */
    $('.member__carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    });

    /* ------Members----- */
    $.scrollIt({
        topOffset: -50,
        scrollTime: 200,
    });

    /* ------Navbar Collapse----- */
    $('.nav-link').on('click', ()=>{
        $('.navbar-collapse').collapse('hide');
    });
});
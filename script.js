
const navigation = document.querySelector('.navigation');
document.querySelector('.toggle').onclick =function() {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

$(".carousel").owlCarousel(
    {
        margin:15,
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }

        }

    }
);
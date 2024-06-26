document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to RichOffKs');

    // Initialize Slick carousel
    $('.carousel').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
});

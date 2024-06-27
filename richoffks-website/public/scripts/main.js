$(document).ready(function(){
    // Initialize Slick carousel for albums
    $('.album-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Initialize Slick carousel for videos
    $('.video-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true
    });

    // Initialize Slick carousel for news
    $('.vertical-carousel').slick({
        infinite: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    // Email collector form submission
    $('#emailForm').on('submit', function(e) {
        e.preventDefault();
        const email = $('#email').val();

        // Send email to server
        $.ajax({
            type: 'POST',
            url: '/api/collect-email', // Endpoint to handle email collection
            data: JSON.stringify({ email: email }),
            contentType: 'application/json',
            success: function() {
                $('#emailForm').hide();
                $('#successMessage').show();
            },
            error: function() {
                alert('There was an error submitting your email. Please try again.');
            }
        });
    });
});

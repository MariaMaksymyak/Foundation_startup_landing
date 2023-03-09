$('.features_item > div').on('click', function(){
    $(this).next('.features_text').slideToggle(300);
})


$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).parent('.about-items').toggleClass('change-color');
    $(this).next('.about-text').slideToggle(300);
})

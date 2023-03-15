$('.modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length == 0){
       $(this).fadeOut();
    }
});

$('.close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut()
})

$('#open-modal').on('click', function(){
    $('.modal-overlay').fadeIn()
})
$('#open-modal1').on('click', function(){
    $('.modal-overlay').fadeIn()
})
$('#open-modal2').on('click', function(){
    $('.modal-overlay').fadeIn()
})




$('.modal-overlay_get_start').on('click', function(e){
    if($(e.target).closest('.modal_start').length == 0){
       $(this).fadeOut();
    }
});

$('.close').on('click', function(){
    $(this).parents('.modal-overlay_get_start').fadeOut()
})

$('#open-modal_start').on('click', function(){
    $('.modal-overlay_get_start').fadeIn()
})
$('#open-modal_start2').on('click', function(){
    $('.modal-overlay_get_start').fadeIn()
})
$('#open-modal_start3').on('click', function(){
    $('.modal-overlay_get_start').fadeIn()
})
$('#open-modal_start4').on('click', function(){
    $('.modal-overlay_get_start').fadeIn()
})
    

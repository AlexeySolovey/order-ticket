$('#additional-services-button').click(function(){
    $(this).hide();
    $('#order-first-step').hide();
    $('#order-second-step').fadeIn('slow');
});
$('#btnGetCK').on('click', function(){
    $('.flip-container').each(function() {
        var frontBackDivs = $(this).find('.front, .back');
        if (frontBackDivs.length === 2) {
            $(this).toggleClass('flipped');
        }
    });
})
/* $('.btn-customized').on('click', function(){
 
    if( ! $(this).hasClass('paused') ) {
        $('.carousel').carousel('pause');
        $('.btn-customized').toggleClass('paused');
        $('.btn-customized i').removeClass('fa-pause').addClass('fa-play');
        $(this).blur();
    }
    else {
        $('.carousel').carousel('cycle');
        $('.btn-customized').toggleClass('paused');
        $('.btn-customized i').removeClass('fa-play').addClass('fa-pause');
        $(this).blur();
    }
    alert ($(this).hasClass('paused'));
});

 */
$('#playButton').click(function () {
    $('#skSlider').carousel('cycle');
});
$('#pauseButton').click(function () {
    $('#skSlider').carousel('pause');
	alert('Нажал паузу: ');
});

var modalBtn = document.querySelector('.modal-btn3');
var modalBg = document.querySelector('.modal-bg3');
var modalClose = document.querySelector('.modal-close3');
var modalvideo = document.querySelector('#video3');

modalBtn.addEventListener('click', function(){
	modalBg.classList.add('bg-active');
});
var stopVideo = function ( element ) {
    var iframe = element.querySelector( 'iframe');
    var video = element.querySelector( 'video3' );
    if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if ( video !== null ) {
        video.pause();
    }
};
modalClose.addEventListener('click', function(){
	modalBg.classList.remove('bg-active');
	stopVideo(modalvideo);
});
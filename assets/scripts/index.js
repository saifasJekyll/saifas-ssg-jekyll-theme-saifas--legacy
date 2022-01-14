/// preloader

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}


/// contact form

$(document).ready(function(){
	$('.conctact-us-btn').on('click', function(e){
		e.preventDefault();
		$('#modal').fadeIn(100);
		$('.modalBody').slideDown(300);

	});
	$('.modal-close, #modal').on('click', function(e){
		e.preventDefault();
		$('.modalBody').slideUp(100);
		$('#modal').fadeOut(300);
	});
});


/// navbar

$(window).scroll(function(){
 var $sections = $('section');
	$sections.each(function(i,el){
    var top  = $(el).offset().top-100;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
  	if( scroll > top && scroll < bottom){
      $('a.active').removeClass('active');
      $('a[href="#'+id+'"]').addClass('active');
    }
  })
 });

$("nav").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 800);
});

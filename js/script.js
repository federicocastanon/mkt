$(document).ready(function() {
/*var altura = $('#cuerpo').height() * 0.98;
	$('.pagina').css('height', altura + 'px');*/
	$('.sliderNavegacion').slick({
		slidesToShow : 4,
		slidesToScroll : 4,
		asNavFor : '.sliderPagina',
		dots : false,
		arrows : false,
		focusOnSelect : true,
		variableWidth : true,
		infinite : false,
		initialSlide: 0
	});
	$('.sliderPagina').slick({
		slidesToShow : 1,
		slidesToScroll : 1,
		arrows : false,
		fade : false,
		infinite : false,
		asNavFor : '.sliderNavegacion',
		slide: 'span',
		adaptiveHeight: false,
		initialSlide: 0
	});
	
});

$(document).ready(function() {
	/*var altura = $('#cuerpo').height() * 0.98;
	 $('.pagina').css('height', altura + 'px');*/

	$('.sliderPagina').slick({
		slidesToShow : 1,
		slidesToScroll : 1,
		arrows : false,
		fade : false,
		infinite : false,
		asNavFor : '.sliderNavegacion',
		slide : 'span',
		adaptiveHeight : false,
		draggable : false,
		initialSlide : 0
	});
	$('.sliderNavegacion').slick({
		slidesToShow : 4,
		slidesToScroll : 4,
		asNavFor : '.sliderPagina',
		dots : false,
		arrows : false,
		focusOnSelect : true,
		variableWidth : true,
		infinite : false,
		initialSlide : 0
	});
	$('.logo').click(function() {
		$('#linkHome').click();
	});
});

function mandarMensaje() {
	var nombre = $('#nombre').val();
	var nombreNegocio = $('#nombreNegocio').val();
	var rubro = $('#rubro').val();
	var mail = $('#mail').val();
	var consulta = $('#consulta').val();
	var hasError = false;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	$(".error").hide();

	if (nombre == '') {
		$("#nombre").after('<span class="error">No olvide ingresar su nombre</span>');
		hasError = true;
	}

	if (mail == '') {
		$("#mail").after('<span class="error">No olvide ingresar su correo electrónico</span>');
		hasError = true;
	} else if (!emailReg.test(mail)) {
		$("#mail").after('<span class="error">Es importante que ingrese una direccion de correo v&aacute;lida para que podamos ponernos en contacto con usted</span>');
		hasError = true;
	}

	if (hasError) {
		return false;
	}
	var html = nombre + ' que del negocio ' + nombreNegocio + ' del rubro  ' + rubro + ' pregunta: \n' + consulta + '. Su correo es ' + mail;
	mandarMail(html, nombre, mail, 'Su consulta fue enviada, le responderemos a la brevedad', 'Ocurrió un error y su consulta no fue enviada! Por favor intente nuevamente o escribanos un correo a madamromualds@gmail.com');
}

function mandarMail(html, nombre, mail, exito, error) {

	var emailToVal = 'madamromualds@gmail.com';

	$.post("sendemail.php", {
		emailTo : emailToVal,
		emailFrom : mail,
		asunto : 'consulta de ' + nombre,
		cuerpo : html
	}, function(data) {
		if (data == 'enviado') {
			$(".formContacto").before('<div id="muchasGracias"></div><p>' + exito + '</p>');

		} else {
			$(".formContacto").before('<div id="ocurrioError"><h1>Atención!</h1><p>' + error + '</p></div>');
		}
	});
}
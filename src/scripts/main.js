$(document).ready(function () {
	if(document.title != 'Авторизация' && document.title != 'Карта'){
		$(document).find('.footer').hide();
		$(document).find('.header:not(.auth)').hide();
	}
	if(document.title == 'Авторизация' || document.title == 'Карта'){
		$(document).find('.breadcrumbs').hide();
		$(document).find('.header.auth').hide();
	}
});


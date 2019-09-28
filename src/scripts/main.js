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

$(document).on('click', '.sort', function () {
	$(document).find('.sort-block').toggle();
	$(this).find('span').toggleClass('active');
});
$(document).on('click', '.sort-block__item', function () {
	$(document).find('.sort span span').text($(this).text());
});
$(document).on('click', function (e) { // событие клика по веб-документу
	var div = $('.sort-block'); // тут указываем сласс элемента
	if ( !div.is(e.target) && div.has(e.target).length === 0 && !$('.sort').is(e.target) && $('.sort').has(e.target).length === 0) { // если клик был не по нашему блоку и не по его дочерним элементам
		$(document).find('.sort-block').hide();
		$(this).find('span').removeClass('active');
	}
});
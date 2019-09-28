$(document).on('blur', 'input', function(){
	if( $(this).val() != '' ){
			$(this).addClass('input-border');
	} else {
			$(this).removeClass('input-border');
	}
});

$(document).on('click', 'button[type="submit"] ', function(e){

	let inputs = $(this).closest('form').find('input[data-required=""]'),
	temp = true;
	for (var i = 0; i < inputs.length; i++) {
		if ( !inputs.eq(i).hasClass('input-border') ) {
			inputs.eq(i).addClass('input-error');
			temp = false;
		} else {
			inputs.eq(i).removeClass('input-error');
		}
	}
	console.log(temp)
	if( temp == false ){
		return false;
	}

});

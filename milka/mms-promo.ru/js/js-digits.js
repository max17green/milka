function digits() {
	
	//Удаляем все не-цифры
	str = $('.title__digits').val();
	newstr = str.replace(/\D/g, '');
	$('.title__digits').val(newstr);
	
	//Добавляем галочку
	for(i=1;i<=newstr.length;i++)
		$('.circle__box-form i:nth-child('+i+')')
		.css('opacity','1.0');
	for(i=newstr.length+1;i<=4;i++)
		$('.circle__box-form i:nth-child('+i+')')
		.css('opacity','0');
	//Добавляем большую галочку и текст
	if (/\d{4}/.test(newstr)) {
		setTimeout(function() {
			$('.circle__box-form i:nth-child(5)').css('opacity','1.0');
			$('.circle__box-form .text').css('opacity','1.0');
		}, 1000);
		setTimeout(function() {
			par = '?q=hello+test';
			window.location.replace("http://google.com"+par);
		}, 2000);
	//Удаляем большую галочку и текст
	} else {
		setTimeout(function() {
			$('.circle__box-form i:nth-child(5)').css('opacity','0');
			$('.circle__box-form .text').css('opacity','0');
		}, 1000);
	}

}

$('.side_content').load('overview.html');

$('.nav__item').click(function () {

	$('.visit_link, .nav__item').removeClass('active');

	$(this).addClass('active');
	var activeLink=$(this).find('.visit_link').addClass('active');
	
	var url = activeLink.data('url');

	$('.side_content').load(url + '.html');
});





$(function() {

	if ($(".p-navgroup-link--logIn").length > 0) {
		let paramString = window.location.href.split('?')[1];
		let queryString = new URLSearchParams(paramString);

		for (let pair of queryString.entries()) {
			if (pair[0] == 'modal' && pair[1] == 'login') {
				$(".p-navgroup-link--logIn")[0].click();
			}
		}
	}
});


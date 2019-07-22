$( document ).ready(function() {
    $(window).resize(function() {
  		if ($(window).width() > 1024) {
  			$('#sidebartoggler').prop('checked', false);
  		}
  	});
    $(".exit-mob").click(function() {
        $('#sidebartoggler').prop('checked', false);
    });
});

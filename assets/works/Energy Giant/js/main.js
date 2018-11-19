/*================= Back To Top ==================*/

$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});

			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();

				$('html, body').animate({scrollTop: 0}, 300);
			})
		});


/*===================== Effect Animation ====================*/
// AOS.init();

new WOW().init();

/*===================== Tooltip Animation ====================*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*===================== Start Box Animation ====================*/
$(document).ready(function() {
	$('.start-select').click(function() {
		$('.display-start-box').show();
		$('#start-box-3').hide();
		$('.indisplay-start-box').hide();
		$('.back-btn').show();
	})

	$('.select-next').click(function() {
		$('.display-start-box').hide();
		$('#start-box-3').show();
		$('.indisplay-start-box').hide();
		$('.back-btn').show();
	})

	// $('.back-btn').click(function() {
	// 	$('.display-start-box').hide();
	// 	$('.indisplay-start-box').show();
	// 	$('.back-btn').hide();
	// });


});
// $('.back-btn').click(function(currentBox) {
// 	if(currentBox == 1) {
// 		$('.display-start-box').hide();
// 		$('.indisplay-start-box').show();
// 		$('.back-btn').show();
// 		console.log('Yes it worked');
// 	}
// 	else if(currentBox == 2) {
// 		$('.display-start-box').hide();
// 		$('.indisplay-start-box').show();
// 		$('.back-btn').show();
// 	}
// });

//
// function backFun(current) {
// 	console.log(current);
// 	// if(current == start-box-2) {
// 	// 	// $('#start-box-2').hide();
// 	// 	// $('#start-box-3').hide();
// 	// 	// $('#start-box-1').show();
// 	// 	// $('.back-btn').hide();
// 	// 	console.log('Yes it worked');
// 	// }
// 	// else if(current == 2) {
// 	// 	$('#start-box-2').hide();
// 	// 	$('#start-box-3').hide();
// 	// 	$('.indisplay-start-box').show();
// 	// 	$('.back-btn').show();
// 	// 	console.log('Yes it worked');
// 	// }
// }


// var i = 2;
// var i = 3;

function backFun(i) {
	//var i = 0;
	// var id1 = document.getElementById('start-box-1');
	// var id2 = document.getElementById('start-box-2');
	// var id3 = document.getElementById('start-box-3');

	if(i == 2) {
		// console.log('Yes Passed');
		$('#1').show();
		$('#start-box-2').hide();
		$('#start-box-3').hide();
		$('.back-btn').hide();
	}
	else {
		console.log("Try Again");
	}
}


/*===================== Wizard Section ====================*/
$(document).ready(function() {
	$('.next-btn-1').click(function() {
		$('.select-item1').hide();
		$('.select-item2').show();
		$('.select-item3').hide();
		$('.select-item4').hide();
		$('.select-item5').hide();
		$('.select-item6').hide();
	})
});

$(document).ready(function() {
	$('.prev-btn-2').click(function() {
		$('.select-item1').show();
		$('.select-item2').hide();
		$('.select-item3').hide();
		$('.select-item4').hide();
		$('.select-item5').hide();
		$('.select-item6').hide();
	})
});

$(document).ready(function() {
	$('.prev-btn-3').click(function() {
		$('.select-item1').hide();
		$('.select-item2').show();
		$('.select-item3').hide();
		$('.select-item4').hide();
		$('.select-item5').hide();
		$('.select-item6').hide();
	})
});

$(document).ready(function() {
	$('.prev-btn-4').click(function() {
		$('.select-item1').hide();
		$('.select-item2').hide();
		$('.select-item3').show();
		$('.select-item4').hide();
		$('.select-item5').hide();
		$('.select-item6').hide();
	})
});

$(document).ready(function() {
	$('.prev-btn-5').click(function() {
		$('.select-item1').hide();
		$('.select-item2').hide();
		$('.select-item3').hide();
		$('.select-item4').show();
		$('.select-item5').hide();
		$('.select-item6').hide();
	})
});

$(document).ready(function() {
	$('.prev-btn-6').click(function() {
		$('.select-item1').hide();
		$('.select-item2').hide();
		$('.select-item3').hide();
		$('.select-item4').hide();
		$('.select-item5').show();
		$('.select-item6').hide();
	})
});

$(document).ready(function() {
	$('.next-btn-2').click(function() {
		$('.select-item1').hide();
		$('.select-item2').hide();
		$('.select-item3').show();
		$('.select-item4').hide();
		$('.select-item5').hide();
		$('.select-item6').hide();
	})
});

$(document).ready(function() {
	$('.next-btn-3').click(function() {
		$('.select-item1').hide();
		$('.select-item2').hide();
		$('.select-item3').hide();
		$('.select-item4').show();
		$('.select-item5').hide();
		$('.select-item6').hide();
	})
});

$(document).ready(function() {
	$('.next-btn-4').click(function() {
		$('.select-item1').hide();
		$('.select-item2').hide();
		$('.select-item3').hide();
		$('.select-item4').hide();
		$('.select-item5').show();
		$('.select-item6').hide();
	})
});

$(document).ready(function() {
	$('.next-btn-5').click(function() {
		$('.select-item1').hide();
		$('.select-item2').hide();
		$('.select-item3').hide();
		$('.select-item4').hide();
		$('.select-item5').hide();
		$('.select-item6').show();
	})
});

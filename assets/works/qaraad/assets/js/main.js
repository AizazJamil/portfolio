// Input Animation Field Section
//Load animation if fields containing data on page load
  $( document ).ready(function() {
  $(".input-login").each(function() {
    if ($(this).val() != "") {
      $(this).parent().addClass("animation");
    }
  });
  });

  //Add animation when input is focused
  $(".form-control").focus(function(){
  $(this).parent().addClass("animation animation-color");
  });

  //Remove animation(s) when input is no longer focused
  $(".form-control").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("animation");
  $(this).parent().removeClass("animation-color");
  })



// Search Bar
var searchBarInput = $("#searchBarInput");
var clearSearchBtn = $(".clearSearchBarField");

$(document).ready(function() {

searchBarInput.keyup(function() {
if( $(this).val().length === 0 ) {
  clearSearchBtn.hide()
} else {
  clearSearchBtn.show()
}
});

});

function resetInput() {
clearSearchBtn.hide();
searchBarInput.val('').focus();
}


// Toggle Full Screen
$('#toggle').click(function() {
$(this).toggleClass('active');
$('#navbarSupportedContent').toggleClass('open');
});

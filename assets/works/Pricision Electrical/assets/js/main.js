
// Recaptcha here code
function submitUserForm() {
    var response = grecaptcha.getResponse();
    if(response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    }
    return true;
}

function verifyCaptcha() {
    document.getElementById('g-recaptcha-error').innerHTML = '';
}


// Smooth Scrolling Href Linker
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
  e.preventDefault();

  document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
});
});

// Active Linker TabContent
function plumbinglink() {
  $('.electrical-service--inner').hide();
  $('.plumbing-service--inner').show();
  $('.plumbing--nav').addClass('active--link');
  $('.electrical--nav').removeClass('active--link');
}

function electricallink() {
  $('.electrical-service--inner').show();
  $('.plumbing-service--inner').hide();
  $('.plumbing--nav').removeClass('active--link');
  $('.electrical--nav').addClass('active--link');
}


// $(document).ready(function () {
//     var width = $('.g-recaptcha').parent().width();
//     console.log(width);
//     if (width < 480) {
//         var scale = width / 480;
//         console.log(scale);
//         $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
//         $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
//         $('.g-recaptcha').css('transform-origin', '0 0');
//         $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
//     }
// });
//
//
// function resizeReCaptcha() {
//   var width = $('.g-recaptcha').parent().width();
//   if (width < 302) {
//       var scale = width / 302;
//       $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
//       $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
//       $('.g-recaptcha').css('transform-origin', '0 0');
//       $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
//   }
// };
// $(document).ready(function() {
//   $(window).on('resize', function(){
//     resizeReCaptcha();
//   });
//   resizeReCaptcha();
// });

// Side Bar
$(document).ready(function () {

    $('.sidebartoggler').on('click', function () {
        $('.left-sidebar').toggleClass('active');
        $('.page-wrapper').toggleClass('active-wrapper');
    });

});
// Mobile Sidebar
$(document).ready(function () {

    $('.nav-toggler').on('click', function () {
        $('.left-sidebar').toggleClass('active');
    });

});

// Upload Image Section
$(document).ready(function() {

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        $('.company-logo .view-img img').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#upload").change(function() {
    readURL(this);
  });

  $('.uploadbtn').on('click', function() {
    $('#upload').trigger('click');

  });
});



// Manage Notifications Function
function anEmployer() {
  $('.view-employer-details').show();
  $('.view-jobseeker').hide();
  $('.notification_all').hide();
  $('.notification_allemployer').hide();
  $('.notification_alljobseeker').hide();
  $('.btn-send-not').hide();
}

function aJobseeker() {
  $('.view-employer-details').hide();
  $('.view-jobseeker').show();
  $('.notification_all').hide();
  $('.notification_allemployer').hide();
  $('.notification_alljobseeker').hide();
  $('.btn-send-not').hide();
}

function allSelect() {
  $('.view-employer-details').hide();
  $('.view-jobseeker').hide();
  $('.notification_all').show();
  $('.notification_allemployer').hide();
  $('.notification_alljobseeker').hide();
}

function allJobseeker() {
  $('.view-employer-details').hide();
  $('.view-jobseeker').hide();
  $('.notification_all').hide();
  $('.notification_allemployer').hide();
  $('.notification_alljobseeker').show();
}

function allEmployer() {
  $('.view-employer-details').hide();
  $('.view-jobseeker').hide();
  $('.notification_all').hide();
  $('.notification_allemployer').show();
  $('.notification_alljobseeker').hide();
}


// Modal Section
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

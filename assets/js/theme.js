$(document).ready(function() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    follower.hide();
  }

  $(".percentage-count").each(function() {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo
      },

      {
        duration: 3100,
        easing: "linear",
        step: function() {
          $this.text(Math.floor(this.countNum + 5));
        },
        complete: function() {
          $this.text(this.countNum);
          TweenMax.to(".percentage-count", 0.5, { y: 60, opacity: 0 });
          TweenMax.to(".after", 0.5, { y: 60, opacity: 0 });
          TweenMax.to(".global-intro", 0.5, { top: 30 });
        }
      }
    );
  });

  setTimeout(function() {
    $("body").addClass("scroll-body");
    $(document).on("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  }, 3000);

  setTimeout(function() {
    $(".page-loader").addClass("remove-loader");
  }, 3550);

  setTimeout(function() {
    $(".page-loader-wrapper").hide();
  }, 3850);

  
});


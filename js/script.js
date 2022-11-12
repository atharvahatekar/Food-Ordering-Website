$(document).ready(function() {
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "80px;"
    }
  );

  $(".js--info").waypoint(
    function(direction) {
      $(".js--info").addClass("animated fadeIn");
    },
    {
      offset: "300px"
    }
  );

  $(".js--phone").waypoint(
    function(direction) {
      $(".js--phone").addClass("animated fadeInUp");
    },
    {
      offset: "350px"
    }
  );

  $(".js--city").waypoint(
    function(direction) {
      $(".js--city").addClass("animated fadeIn");
    },
    {
      offset: "400px"
    }
  );

  $(".js--plans").waypoint(
    function(direction) {
      $(".js--plans").addClass("animated pulse");
    },
    {
      offset: "350px"
    }
  );

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  $(".toggle").click(function() {
    let nav = $(".js--toggle");
    var icon = $(".js--icon i");
    nav.slideToggle(200);
    if (icon.hasClass("fas fa-bars")) {
      icon.addClass("fas fa-times");
      icon.removeClass("fas fa-bars");
    } else {
      icon.addClass("fas fa-bars");
      icon.removeClass("fas fa-times");
    }
  });
});

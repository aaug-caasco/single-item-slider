window.projectNameHere = window.projectNameHere || {};

projectNameHere = {

  init: function() {

    projectNameHere.classBannerRoot();
    projectNameHere.bannerBGstyling();

  },


  //USED TO APPEND "-hp" TO .mid PARENT FOR ABSTRACT BACKGROUND CONTROL
  classBannerRoot: function() {
    var bannerNameRoot = "mid-class-name-here";
    var homeBanner = bannerNameRoot + "-hp";
    var mainSlide = $('.' + homeBanner).parent().parent();
    var bannerNameRoot__parent = $('.' + bannerNameRoot).parent();

    bannerNameRoot__parent.addClass(homeBanner + '-bg');
  },

  //USED TO CONTROL THE BG POSITION OF ABSTRACT BACKGROUND
  bannerBGstyling: function() {
    $('.mid-class-name-here-hp-bg')
      .css("background-position", "71% center");

    var resizeTimer;

    $(window).on('resize', function(e) {

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {

        var heroWith = $(window).width();

        if (heroWith <= 500) {

          $('MID_CLASS_NAME_HERE-bg')
            .css("background-position", "left center");

        } else {
          $('MID_CLASS_NAME_HERE-bg')
            .css("background-position", "center");
        }

      }, 250);

    });
  }

};

$(document).ready(function() {
  projectNameHere.init();
});

// ..............................................................................

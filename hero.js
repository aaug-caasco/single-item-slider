window.projectNameHere = window.projectNameHere || {};

projectNameHere = {

    init : function () {

        projectNameHere.classBannerRoot();
        projectNameHere.bannerBGstyling();

    },


    //USED TO APPEND "-hp" TO .mid PARENT FOR ABSTRACT BACKGROUND CONTROL
    classBannerRoot: function () {
      var bannerNameRoot = "mid-class-name-here";
      var homeBanner = bannerNameRoot + "-hp";
      var mainSlide = $('.' + homeBanner).parent().parent();
      var bannerNameRoot__parent = $('.' + bannerNameRoot).parent();

      bannerNameRoot__parent.addClass(homeBanner + '-bg');
    },

    //USED TO CONTROL THE BG POSITION OF 
    bannerBGstyling : function () {
      $('.mid-class-name-here-hp-bg')
        .css("background-position", "71% center");

      var rtime;
      var timeout = false;
      var delta = 200;
      $(window).resize(function() {
        rtime = new Date();
        if (timeout === false) {
          timeout = true;
          setTimeout(resizeend, delta);
        }
      });

      function resizeend() {
        if (new Date() - rtime < delta) {
          setTimeout(resizeend, delta);
        } else {
          timeout = false;

          var heroWith = $(window).width();

          if (heroWith <= 500) {
            console.log(heroWith);

            $('.mid-class-name-here-hp-bg')
              .css("background-position", "71% center");

          } else {
            $('.mid-class-name-here-hp-bg')
              .css("background-position", "center");
          }
        }
      }
    }

};

$(document).ready(function() { projectNameHere.init(); });

// ..............................................................................

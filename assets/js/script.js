$(document).ready(function () {
  // ...

  const beats = document.getElementsByClassName("beat");
  Array.from(beats).forEach((beat) => {
    const infoBtn = beat.querySelector(".info");
    const purchaseBtn = beat.querySelector(".purchase");
    const infoWrapper = beat.querySelector(".info-wrapper");
    const purchaseWrapper = beat.querySelector(".purchase-wrapper");
    const iframe = purchaseWrapper.querySelector("iframe");
    const iframeModal = purchaseWrapper.querySelector(".iframe-modal");
    // const sheetBtn = purchaseWrapper.querySelector(".sheetBtn");
    // const sheet = purchaseWrapper.querySelector(".sheet");

    $(infoBtn).click(function () {
      $(infoWrapper).toggleClass("block");
      $(infoBtn).find("img.close").toggle();
      $(infoBtn).find("img.open").toggle();

      if ($(purchaseWrapper).hasClass("block")) {
        $(purchaseWrapper).removeClass("block");

        $(purchaseBtn).find("img.close").hide();
        $(purchaseBtn).find("img.open").show();
      }
    });

    $(purchaseBtn).click(function () {
      $(purchaseWrapper).toggleClass("block");
      $(purchaseBtn).find("img.close").toggle();
      $(purchaseBtn).find("img.open").toggle();

      if ($(infoWrapper).hasClass("block")) {
        $(infoWrapper).removeClass("block");

        $(infoBtn).find("img.close").hide();
        $(infoBtn).find("img.open").show();
      }
    });

    $(iframe).on("load", function () {
      $(iframeModal).hide();
    });

    // $(sheetBtn).click(function () {
    //   $(sheet).toggleClass("block");
    // });
  });

  $("header").click(function () {
    $("video").get(0).currentTime = 0;
    $("video").trigger("pause");
    $("section.beat").hide();

   var offset = $("#listhome").offset();
    $("html, body").animate({ scrollTop: offset.top }, 400);
    $("main, body").removeClass("hidden");
    $("header").removeClass("transparent");

    $("img.open").show();
    $("img.close").hide();
    $(".info-wrapper").removeClass("block");
    $(".purchase-wrapper").removeClass("block");
  });

  $(".home").click(function () {
    $("video").get(0).currentTime = 0;
    $("video").trigger("pause");
    $("section.beat").hide();

    var offset = $("#listhome").offset();
    $("html, body").animate({ scrollTop: offset.top }, 400);

    $("main, body").removeClass("hidden");
    $("header").removeClass("transparent");

    var selfwrap = $(this).parent();
    setTimeout(function () {
      $(selfwrap).toggleClass("block");
      $(selfwrap).prev().find("img.close").toggle();
      $(selfwrap).prev().find("img.open").toggle();
    }, 50);
  });

  $(".beatlist.first").click(function () {
    $("main, body").addClass("hidden");
    $("header").addClass("transparent");

    $(".beat-popup").fadeIn();

    setTimeout(function () {
      $(".beat-popup").fadeOut();
      $(".beat.first").fadeIn(200);
      // $(".beat.first video")[0].play();
      $(".beat.first video").trigger("play");
      $(".beat.first video").get(0).currentTime = 0;
    }, 1500);
  });

  $(".beatlist.second").click(function () {
    $("main, body").addClass("hidden");
    $("header").addClass("transparent");
    $(".beat-popup").fadeIn();

    setTimeout(function () {
      $(".beat-popup").fadeOut();
      $(".beat.second").fadeIn(200);
      // $(".beat.second video")[0].play();
      $(".beat.second video").trigger("play");
      $(".beat.second video").get(0).currentTime = 0;
    }, 1500);
  });

  $(".beatlist.third").click(function () {
    $("main, body").addClass("hidden");
    $("header").addClass("transparent");
    $(".beat-popup").fadeIn();

    setTimeout(function () {
      $(".beat-popup").fadeOut();
      $(".beat.third").fadeIn(200);
      // $(".beat.third video")[0].play();
      $(".beat.third video").trigger("play");
      $(".beat.third video").get(0).currentTime = 0;
    }, 1500);
  });

  $(".beatlist.fourth").click(function () {
    $("main, body").addClass("hidden");
    $("header").addClass("transparent");
    $(".beat-popup").fadeIn();

    setTimeout(function () {
      $(".beat-popup").fadeOut();
      $(".beat.fourth").fadeIn(200);
      // $(".beat.fourth video")[0].play();
      $(".beat.fourth video").trigger("play");
      $(".beat.fourth video").get(0).currentTime = 0;
    }, 1500);
  });

  $(".beatlist.fifth").click(function () {
    $("main, body").addClass("hidden");
    $("header").addClass("transparent");
    $(".beat-popup").fadeIn();

    setTimeout(function () {
      $(".beat-popup").fadeOut();
      $(".beat.fifth").fadeIn(200);
      // $(".beat.fifth video")[0].play();
      $(".beat.fifth video").trigger("play");
      $(".beat.fifth video").get(0).currentTime = 0;
    }, 1500);
  });

  $(".beatlist.sixth").click(function () {
    $("main, body").addClass("hidden");
    $("header").addClass("transparent");
    $(".beat-popup").fadeIn();

    setTimeout(function () {
      $(".beat-popup").fadeOut();
      $(".beat.sixth").fadeIn(200);
      // $(".beat.sixth video")[0].play();
      $(".beat.sixth video").trigger("play");
      $(".beat.sixth video").get(0).currentTime = 0;
    }, 1500);
  });

  $(".beatlist.seventh").click(function () {
    $("main, body").addClass("hidden");
    $("header").addClass("transparent");
    $(".beat-popup").fadeIn();

    setTimeout(function () {
      $(".beat-popup").fadeOut();
      $(".beat.seventh").fadeIn(200);
      // $(".beat.seventh video")[0].play();
      $(".beat.seventh video").trigger("play");
      $(".beat.seventh video").get(0).currentTime = 0;
    }, 1500);
  });

  $(".beatlist.eighth").click(function () {
    $("main, body").addClass("hidden");
    $("header").addClass("transparent");
    $(".beat-popup").fadeIn();

    setTimeout(function () {
      $(".beat-popup").fadeOut();
      $(".beat.eighth").fadeIn(200);
      // $(".beat.eighth video")[0].play();
      $(".beat.eighth video").trigger("play");
      $(".beat.eighth video").get(0).currentTime = 0;
    }, 1500);
  });

  $(".beatlist.ninth").click(function () {
    $("main, body").addClass("hidden");
    $("header").addClass("transparent");
    $(".beat-popup").fadeIn();

    setTimeout(function () {
      $(".beat-popup").fadeOut();
      $(".beat.ninth").fadeIn(200);
      // $(".beat.ninth video")[0].play();
      $(".beat.ninth video").trigger("play");
      $(".beat.ninth video").get(0).currentTime = 0;
    }, 1500);
  });

  $(".beatlist.tenth").click(function () {
    $("main, body").addClass("hidden");
    $("header").addClass("transparent");
    $(".beat-popup").fadeIn();

    setTimeout(function () {
      $(".beat-popup").fadeOut();
      $(".beat.tenth").fadeIn(200);
      // $(".beat.tenth video")[0].play();
      $(".beat.tenth video").trigger("play");
      $(".beat.tenth video").get(0).currentTime = 0;
    }, 1500);
  });

  $(".prevBtn").click(function () {
    $(this).parent().hide();
    $(this).siblings("video").get(0).currentTime = 0;
    $(this).parent().prev().show();

    $("video").get(0).currentTime = 0;
    $("video").trigger("pause");

    $(this).parent().prev().find("video").get(0).currentTime = 0;
    $(this).parent().prev().find("video").trigger("play");

    $("main, body").addClass("hidden");
    $("header").addClass("transparent");
  });

  $(".nextBtn").click(function () {
    $(this).parent().hide();
    $(this).siblings("video").get(0).currentTime = 0;
    $(this).parent().next().show();

    $("video").get(0).currentTime = 0;
    $("video").trigger("pause");

    $(this).parent().next().find("video").get(0).currentTime = 0;
    $(this).parent().next().find("video").trigger("play");

    $("main, body").addClass("hidden");
    $("header").addClass("transparent");
  });
});

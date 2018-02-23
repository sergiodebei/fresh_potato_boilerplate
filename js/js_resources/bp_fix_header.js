//to have the fixed header

(function() {
  'use strict';

    var m = document.querySelector("main"),
        h = document.querySelector("header"),
        hHeight;

    function setTopPadding() {
        hHeight = h.offsetHeight;
        m.style.paddingTop = hHeight + "px";
    }

    function onScroll() {

        // function callbackFunc() {
        //     var y = window.pageYOffset;
        //     if (y > 150) {
        //         h.classList.add("scroll");
        //     } else {
        //         h.classList.remove("scroll");
        //     }
        // }
    }

    window.onload = function() {
        setTopPadding();
        onScroll();
    };

    window.onresize = function() {
        setTopPadding();
    };
})();


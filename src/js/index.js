$(document).ready(function() {

    if($(window).width() > 991) {

        $('#multiscroll').multiscroll({
            scrollingSpeed: 500,
            touchSensitivity: 3,
            responsiveExpand: false,
            responsiveWidth: 991,
        });

    }

});
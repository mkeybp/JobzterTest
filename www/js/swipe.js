﻿// Pagecreate will fire for each of the pages in this demo
// but we only need to bind once so we use "one()"
$(document).one("pagecreate", ".opret", function () {

    //Makes the swipe DistanceThreshold responsive
    $.event.special.swipe.horizontalDistanceThreshold = (screen.availWidth) / 10;
    $.event.special.swipe.verticalDistanceThreshold = (screen.availHeight) / 13;



    // Initialize the external persistent header and footer
    $("[data-role='header'], [data-role='footer']").toolbar({ theme: "b" });
    // Handler for navigating to the next page
    function navnext(next) {
        //console.log(next);
        $(":mobile-pagecontainer").pagecontainer("change", next + ".html", {
            transition: "slide"
        });
    }

    // Handler for navigating to the previous page
    function navprev(prev) {
        //console.log(prev);
        $(":mobile-pagecontainer").pagecontainer("change", prev + ".html", {
            transition: "slide",
            reverse: true
        });

    }

    // Navigate to the next page on swipeleft
    $(document).on("swipeleft", ".ui-page", function (event) {
        // Get the filename of the next page. We stored that in the data-next
        // attribute in the original markup.
        var next = $(this).jqmData("next");

        if (next && $(this).find('input[type="submit"]').length > 0) { // If this has submit do:
            // Triggers the submit button to show the HTML5 validation
            $(this).find('input[type="submit"]').trigger('click');
        }
            // Check if there is a next page and
            // swipes may also happen when the user highlights text, so ignore those.
            // We're only interested in swipes on the page.
        else if (next && !$(this).hasClass('slide')) { // Prevents double slide from happening and Checks if form is valid
            navnext(next);
        }



    });

    // Navigate to the next page when the "next" button in the footer is clicked
    $(document).on("click", ".next", function () {
        var next = $(".ui-page-active").jqmData("next");


        if (next && $(".ui-page-active").find('form')[0].checkValidity() && $(this).is('[type="submit"]')) {
            navnext(next);
        }
            // Check if there is a next page
        else if (next && !$(this).is('[type="submit"]')) {
            navnext(next);
        }
    });

    // The same for the navigating to the previous page
    $(document).on("swiperight", ".ui-page", function (event) {
        var prev = $(this).jqmData("prev");

        if (prev && !$(this).hasClass('slide')) {
            navprev(prev);
        }

    });

    $(document).on("click", ".prev", function () {
        var prev = $(".ui-page-active").jqmData("prev");

        if (prev) {
            navprev(prev);

        }
        else {
            window.location.href = 'index.html';

        }
    });
});

$(document).on("pageshow", ".opret", function () {
    var thePage = $(this),
        title = thePage.jqmData("title"),
        next = thePage.jqmData("next"),
        prev = thePage.jqmData("prev");

    // We use the same header on each page
    // so we have to update the title
    $("#header h1").text(title);

    // Prefetch the next page
    // We added data-dom-cache="true" to the page so it won't be deleted
    // so there is no need to prefetch it
    if (next) {
        $(":mobile-pagecontainer").pagecontainer("load", next + ".html");
    }

    // We disable the next or previous buttons in the footer
    // if there is no next or previous page
    // We use the same footer on each page
    // so first we remove the disabled class if it is there
    $(".next.ui-state-disabled, .prev.ui-state-disabled").removeClass("ui-state-disabled");

    if (!next) {
        $(".next").addClass("ui-state-disabled");
    }
});

$(document).ready(function () {

    $("#txtUsername").val('');
    $("#txtPassword").val('');
    $("#txtUsername").focus(); //focus on Username textbox after page load

    //Submit form on 'Enter key' press also
    $("input").keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#btnLogin").click();
        }
    });

    //Submit Form
    $(document).on("submit", "#LoginForm", function () {
        var username = $("#txtUsername").val();
        var password = $("#txtPassword").val();

        if (username == "admin" && password == "pass") {
            window.location = "http://www.google.com";
        }
        else {
            $("#spMsg").show().html("Incorrect Username / Password");
            $("#txtPassword").val('').focus();
        }
        return false;
    });

    //Remove Error Message
    $(document).on("keydown", "#txtUsername", function () {
        $("#spMsg").hide();
    });

    //Remove Error Message
    $(document).on("keydown", "#txtPassword", function () {
        $("#spMsg").hide();
    });



});    //End Document.Ready

$(window).bind("load", function () {

    $newSpan = $(".brand");
    $newSpan.show().textillate({
        in: {
            effect: 'fadeInLeft'
        },
        out: {
            effect: 'fadeOutUp',
            callback: function () {
                ShowBrand();
            }
        },
        loop: true
    });

    function ShowBrand() {
        var docHeight = $(document).height();
        var docWidth = $(document).width();

        spanHeight = $newSpan.height();
        spanWidth = $newSpan.width();

        maxHeight = docHeight - spanHeight;
        maxWidth = docWidth - spanWidth;

        $newSpan.show().css({
            top: Math.floor(Math.random() * maxHeight),
            left: Math.floor(Math.random() * maxWidth)
        });
    }

});
$(document).ready(function () {
    $(".skills").each(function () {
        $(this).on("click", function () {
            $(this).find("#info").slideToggle("slow");
        })
    })
});
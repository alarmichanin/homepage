$(document).ready(function () {
    $(".skills").each(function () {
        $(this).on("click", function () {
            console.log("asd")
            $("#info").slideToggle("slow");
        })
    })
});
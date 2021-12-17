$(document).ready(function () {
    $(".skills").each(function () {
        $(this).on("click", function () {
            $(this).find("#info").slideToggle("slow");
            if ($(this).children("#info").children(".bars").length > 0) {
                $('.percentage-bar').each(function () {
                    $(this).find('.bar').animate({
                        width: $(this).attr('data-percent')
                    }, 1500);
                });
            }
        })
    })
});
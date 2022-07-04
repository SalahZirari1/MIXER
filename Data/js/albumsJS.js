// variables

var vid = false;

//Video start
{
    $(".vid").hide();

    $(".vid").mouseleave(function () {
        $(this).get(0).pause();
        $(".vid").hide();
        vid = false;


    });
    $(".box").click(function () {

        if (!vid) {
            $(this).find(".vid").get(0).play()

            $(this).find(".vid").show();


            vid = true;
        }
        else {
            $(".vid").hide();
            vid = false;
        }

    });
}


//slide up animation on load
$("section").animate({ top: "500px" }, 10);
$("section").animate({ top: 0 }, 700);


//shadow and position toggle
$(".box").mouseenter(function () {
    $(this).css("box-shadow", "none")
    $(this).animate({ left: "13px", top: "13px" }, 1)

})

$(".box").mouseleave(function () {
    $(this).css("box-shadow", "13px 13px")
    $(this).animate({ left: "0", top: "0" }, 1)

})




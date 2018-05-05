$(document).ready(function () {
    $(".yes").click(function() {
        $(".hideyes").removeClass("hideyes");
        $(".yes").addClass("hideyes");
        $(".no").addClass("hideno");
    })
    $(".no").click(function() {
        $(".hideno").removeClass("hideno");
        $(".yes").addClass("hideyes");
        $(".no").addClass("hideno");
    })
});
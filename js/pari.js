$(document).ready(function () {
    $(".yes".click(function(e) {
        e.preventDefault();
        $(".hideyes").removeClass("hideyes");
    }))
    $(".no".click(function(e) {
        e.preventDefault();
        $(".hideno").removeClass("hideno");
    }))
});
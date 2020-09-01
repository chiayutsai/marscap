$(function() {
    var $bounce = $('<div class="backgrund_black"><div class="bounce"><h3>Declaration of regulatory status</h3><p>By clicking on confirm, I declare that I qualify as a “wholesale investor” for the purposes of the Financial Markets Conduct Act 2013.</p><ul><li><a href="resources.html?channel=2" class="bounce_Confirm">Confirm</a></li><li class="bounce_Exit"><a href="#">Exit</a></li></ul></div></div>');
    $bounce.hide();
    $(".bounce-container").append($bounce);
    $(".bounce_Exit").click(function() {
        $bounce.hide();
    });
    $(".account-opening-item").click(function() {
        $bounce.show();
    })
    $(".bounce_Confirm").click(function(){
        $(".backgrund_black").hide();
    })
})

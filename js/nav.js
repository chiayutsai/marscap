$(".nav_menu_content1").hover(function(){
    $(".nav_menu_title_a1").toggleClass("active")
    $(".nav_menu_title_a1 .t3").toggleClass("active")
})
$(".nav_menu_content2").hover(function(){
    $(".nav_menu_title_a2").toggleClass("active")
    $(".nav_menu_title_a2 .t3").toggleClass("active")
})
$(".nav_menu_content3").hover(function(){
    $(".nav_menu_title_a3").toggleClass("active")
    $(".nav_menu_title_a3 .t3").toggleClass("active")
})
$(".nav_menu_content4").hover(function(){
    $(".nav_menu_title_a4").toggleClass("active")
    $(".nav_menu_title_a4 .t3").toggleClass("active")
})
$(".nav_menu_content5").hover(function(){
    $(".nav_menu_title_a5").toggleClass("active")
    $(".nav_menu_title_a5 .t3").toggleClass("active")
})
$(".hbg").click(function(){
    $(this).toggleClass("active")
    $(" .nav_menu").toggleClass("active")
    $(" .hbg div").toggleClass("active")
    $(" .hbg_n ").toggleClass("active")
    $("body").toggleClass("active")

})
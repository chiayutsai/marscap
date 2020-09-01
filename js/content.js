 var url = window.location.href;
 var lang = url.indexOf("?");

 if (lang < 0) {
     window.location.href = url + "?channel=1"
 }

 function channel(num) {

     var url = location.href.split("?")[0] + "?channel=" + num;
     location.href = url + '&target';

 }
 $(document).ready(function() {
     $('.navbar-toggle').click(function() {
         $(this).toggleClass('opennav');
         $('#nav-icon3').toggleClass('open');

     });

 });
 var tar = window.location.href;
 var move = tar.indexOf("&");
 var wdth = $(window).width();
 if (move > 0 && wdth > 767) {
     $('html,body').scrollTop(400);
 }
 $(window).scroll(function() {
     var topVal = $(window).scrollTop();

     if (topVal > 500) {
         $('#toTop').css('opacity', '1');

     } else {
         $('#toTop').css('opacity', '0');
     }

 });
 $(document).ready(function() {
     $('.panel_open').click(function() {
         $('#nav-icon2').toggleClass('open');
     });
 });
 if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
     var headID = document.getElementsByTagName("head")[0];
     var newCss = document.createElement('link');
     newCss.type = 'text/css';
     newCss.rel = "stylesheet";
     newCss.href = "css/IE.css";
     headID.appendChild(newCss);


 }
 $(window).scroll(function() {
     var topVal = $(window).scrollTop();

     if (topVal > 150) {

         $('.navbar-default').css('background-color', '#fff');
         $('.navbar-default').css('box-shadow', '0px 10px 20px rgba(0,0,0,0.2)');

     } else {

         $('.navbar-default').css('background-color', 'transparent');
         $('.navbar-default').css('box-shadow', '0px 0px 0px rgba(0,0,0,0)');
     }

 });

 $('#fx_btn').click(function() {
     var X = $('#part1').offset().top - 110;
     $('html,body').animate({
         scrollTop: X
     }, 'slow'); /* 返回到最頂上 */
     return false;
 });
 $('#Commodity_btn').click(function() {
     var X = $('#part2').offset().top - 110;
     $('html,body').animate({
         scrollTop: X
     }, 'slow'); /* 返回到最頂上 */
     return false;
 });
 $('#Securities_btn').click(function() {
     var X = $('#part3').offset().top - 110;
     $('html,body').animate({
         scrollTop: X
     }, 'slow'); /* 返回到最頂上 */
     return false;
 });
 $('#account1').click(function() {
     var X = $('#a_content1').offset().top - 110;
     $('html,body').animate({
         scrollTop: X
     }, 'slow'); /* 返回到最頂上 */
     return false;
 });
 $('#account2').click(function() {
     var X = $('#a_content2').offset().top - 110;
     $('html,body').animate({
         scrollTop: X
     }, 'slow'); /* 返回到最頂上 */
     return false;
 });
 $('#account3').click(function() {
     var X = $('#a_content3').offset().top - 110;
     $('html,body').animate({
         scrollTop: X
     }, 'slow'); /* 返回到最頂上 */
     return false;
 });
 $('#account4').click(function() {
     var X = $('#a_content4').offset().top - 110;
     $('html,body').animate({
         scrollTop: X
     }, 'slow'); /* 返回到最頂上 */
     return false;
 });
 $('#account5').click(function() {
     var X = $('#a_content5').offset().top - 110;
     $('html,body').animate({
         scrollTop: X
     }, 'slow'); /* 返回到最頂上 */
     return false;
 });
 $('#account6').click(function() {
     var X = $('#a_content6').offset().top - 110;
     $('html,body').animate({
         scrollTop: X
     }, 'slow'); /* 返回到最頂上 */
     return false;
 });
 $('#toTop').click(function() {

     $('html,body').animate({
         scrollTop: 0
     }, 'slow'); /* 返回到最頂上 */
     return false;
 });
 var channel_first = location.search.split("=")[1];
 var channel_num = channel_first.split("&")[0];
 if (channel_num == 1) {
     $("#page1").css("display", "block");
     $('.inner_sidebar ul li').removeClass("active");
     $('.inner_sidebar ul li:nth-child(1)').addClass("active");


 } else if (channel_num == 2) {
     $("#page2").css("display", "block");
     $('.inner_sidebar ul li').removeClass("active");
     $('.inner_sidebar ul li:nth-child(2)').addClass("active");
 } else if (channel_num == 3) {
     $("#page3").css("display", "block");
     $('.inner_sidebar ul li').removeClass("active");
     $('.inner_sidebar ul li:nth-child(3)').addClass("active");
 } else if (channel_num == 4) {
     $("#page4").css("display", "block");
     $('.inner_sidebar ul li').removeClass("active");
     $('.inner_sidebar ul li:nth-child(4)').addClass("active");
 } else if (channel_num == 5) {
     $("#page5").css("display", "block");
     $('.inner_sidebar ul li').removeClass("active");
     $('.inner_sidebar ul li:nth-child(5)').addClass("active");
 } else if (channel_num == 6) {
     $("#page6").css("display", "block");
     $('.inner_sidebar ul li').removeClass("active");
     $('.inner_sidebar ul li:nth-child(6)').addClass("active");
 } else if (channel_num == 7) {
     $("#page7").css("display", "block");
     $('.inner_sidebar ul li').removeClass("active");
     $('.inner_sidebar ul li:nth-child(7)').addClass("active");
 } else if (channel_num == 8) {
     $("#page8").css("display", "block");
     $('.inner_sidebar ul li').removeClass("active");
     $('.inner_sidebar ul li:nth-child(8)').addClass("active");
 } else if (channel_num == 0) {
     $("#page0").css("display", "block");

 }
 //---------------bounce----------------
 $(".bounce_Confirm").click(function(){
     $(".backgrund_black").css("display","none")
 })
 
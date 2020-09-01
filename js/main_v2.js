var url = window.location.href;

if (url.indexOf('#') != -1)

{

    url = url.split("#")[0];

    window.location.href = url



}

/*  End  report content */



/* rate content */

var rate_csv = '';

rate_csv = 'rate.html';

d3.csv(rate_csv, function(d) {

    return {

        country: d.country,

        rate: d.rate

    };

}, function(error, data) {



    rate_change(data)

});



var rate_array = [];



function rate_change(data) {

    for (var i = 0; i < data.length; i++) {

        rate_array.push(data[i].rate);

    };

    $('#rate_CHF').text(rate_array[0]);

    $('#rate_EUR').text(rate_array[1]);

    $('#rate_CAD').text(rate_array[2]);

    $('#rate_USD').text(rate_array[3]);

    $('#rate_AUD').text(rate_array[4]);

    $('#rate_NZD').text(rate_array[5]);

    $('#rate_GBP').text(rate_array[6]);

    $('#rate_JPY').text(rate_array[7]);

}



$(window).scroll(function() {

    var topVal = $(window).scrollTop();





    if (topVal > 500) {

        $('#toTop').css('opacity', '1');



    } else {

        $('#toTop').css('opacity', '0');

    }



});



var news_csv = '';





news_csv = 'new.html';

d3.csv(news_csv, function (d) {

    return {

        date: d.day,

        title: d.title,

        link: d.link,



    };

}, function (error, data) {

    announcement(data)

});





function announcement(data) {



    var dataRE = data.reverse();

    // 



    for (var i = 0; i < 8; i++) {



        var date = dataRE[i].date;



        var title = dataRE[i].title;



        var link = dataRE[i].link;



        $('.newslist').append(" <tr><td class='newsdate'><a href='newslist.html?id="+i+"'><p>" + date + "</p></a></td><td class='newscontent'><a href='newslist.html?id=" + i + "'>" + title + "</a></td></tr>")





    }







}











$(window).scroll(function() {

    var topVal = $(window).scrollTop();

    if (topVal > 150) {

        $('.navbar-default').css('background-color', '#E9DED7');

        $('.navbar-default').css('box-shadow', '0px 10px 20px rgba(0,0,0,0.2)');



    } else if (topVal < 150) {



        $('.navbar-default').css('background-color', 'transparent');

        $('.navbar-default').css('box-shadow', '0px 0px 0px rgba(0,0,0,0)');

    }



});

$('[data-toggle="slide-collapse"]').on('click', function() {

    $navMenuCont = $($(this).data('target'));

    $navMenuCont.animate({

        'width': 'toggle'

    }, 350);

    $(".menu-overlay").fadeIn(500);



});

$(".menu-overlay").click(function(event) {

    $(".navbar-toggle").trigger("click");

    $(".menu-overlay").fadeOut(500);

});

$('#toTop').click(function() {



    $('html,body').animate({

        scrollTop: 0

    }, 'slow'); /* 返回到最頂上 */

    return false;

});

$('#scroll_target').click(function() {

    var high = $('.new').offset().top - 110;

    $('html,body').animate({

        scrollTop: high

    }, 'slow'); /* 返回到最頂上 */

    return false;

});

var numBid1, numBid2, numBid3, numBid4, numBid5, numBid6, numBid7 = 0;

$(document).ready(function() {

    GetWebQuotes();

    setInterval("GetWebQuotes()", 3000);

});



function GetWebQuotes() {

    $.ajax({

        type: "get",

        url: "https://www.tokincfd.com/ajaxHandler/Handler.ashx?action=GetWebQuotes",

        dataType: "jsonp", //数据类型为jsonp

        jsonp: "jsonpCallback", //服务端用于接收callback调用的function名的参数

        success: function(data) {





            $("#numBid1").html("");

            $("#numBid1").append(data.Products[1].numBid >= numBid1 ? "<span style='color:#013780;line-height:15px;height:15px;' >" + Number(data.Products[1].numBid).toFixed(5) + "</span>&nbsp;<img src='images/up.png' />" : "<span style='color:#7a0d0b;' >" + Number(data.Products[1].numBid).toFixed(5) + "</span>&nbsp;<img src='images/down.png' />");

            numBid1 = data.Products[1].numBid;

            $("#numHigh1").html("");

            $("#numHigh1").append(Number(data.Products[1].numHigh).toFixed(5));

            $("#numLow1").html("");

            $("#numLow1").append(Number(data.Products[1].numLow).toFixed(5));

            /*USDJPY*/

            $("#numBid2").html("");

            $("#numBid2").append(data.Products[5].numBid >= numBid2 ? "<span style='color:#013780;line-height:15px;height:15px;' >" + Number(data.Products[5].numBid).toFixed(3) + "</span>&nbsp;<img src='images/up.png' />" : "<span style='color:#7a0d0b;' >" + Number(data.Products[5].numBid).toFixed(3) + "</span>&nbsp;<img src='images/down.png' />");

            numBid2 = data.Products[5].numBid;

            $("#numHigh2").html("");

            $("#numHigh2").append(Number(data.Products[5].numHigh).toFixed(3));

            $("#numLow2").html("");

            $("#numLow2").append(Number(data.Products[5].numLow).toFixed(3));

            /*GBPUSD*/

            $("#numBid3").html("");

            $("#numBid3").append(data.Products[3].numBid >= numBid3 ? "<span style='color:#013780;line-height:15px;height:15px;' >" + Number(data.Products[3].numBid).toFixed(5) + "</span>&nbsp;<img src='images/up.png' />" : "<span style='color:#7a0d0b;' >" + Number(data.Products[3].numBid).toFixed(5) + "</span>&nbsp;<img src='images/down.png' />");

            numBid3 = data.Products[3].numBid;

            $("#numHigh3").html("");

            $("#numHigh3").append(Number(data.Products[3].numHigh).toFixed(5));

            $("#numLow3").html("");

            $("#numLow3").append(Number(data.Products[3].numLow).toFixed(5));

          

            /*NZDUSD*/

            $("#numBid5").html("");

            $("#numBid5").append(data.Products[4].numBid >= numBid5 ? "<span style=';color:#013780;line-height:15px;height:15px;' >" + Number(data.Products[4].numBid).toFixed(5) + "</span>&nbsp;<img src='images/up.png' />" : "<span style='color:#7a0d0b;' >" + Number(data.Products[4].numBid).toFixed(5) + "</span>&nbsp;<img src='images/down.png' />");

            numBid5 = data.Products[4].numBid;

            $("#numHigh5").html("");

            $("#numHigh5").append(Number(data.Products[4].numHigh).toFixed(5));

            $("#numLow5").html("");

            $("#numLow5").append(Number(data.Products[4].numLow).toFixed(5));

            /*XAUUSD*/

            $("#numBid6").html("");

            $("#numBid6").append(data.Products[7].numBid >= numBid6 ? "<span style='color:#013780;line-height:15px;height:15px;' >" + Number(data.Products[7].numBid).toFixed(3) + "</span>&nbsp;<img src='images/up.png' />" : "<span style='color:#7a0d0b;' >" + Number(data.Products[7].numBid).toFixed(2) + "</span>&nbsp;<img src='images/down.png' />");

            numBid6 = data.Products[7].numBid;

            $("#numHigh6").html("");

            $("#numHigh6").append(Number(data.Products[7].numHigh).toFixed(3));

            $("#numLow6").html("");

            $("#numLow6").append(Number(data.Products[7].numLow).toFixed(3));

            /*XAGUSD*/

            $("#numBid7").html("");

            $("#numBid7").append(data.Products[6].numBid >= numBid7 ? "<span style='color:#013780;line-height:15px;height:15px;' >" + Number(data.Products[6].numBid).toFixed(3) + "</span>&nbsp;<img src='images/up.png' />" : "<span style='color:#7a0d0b;' >" + Number(data.Products[6].numBid).toFixed(3) + "</span>&nbsp;<img src='images/down.png' />");

            numBid7 = data.Products[6].numBid;

            $("#numHigh7").html("");

            $("#numHigh7").append(Number(data.Products[6].numHigh).toFixed(3));

            $("#numLow7").html("");

            $("#numLow7").append(Number(data.Products[6].numLow).toFixed(3));

        },

        error: function() {}

    });

}



function hover_quote(name, num) {

    $(name).addClass('hover');

    $('img.img_' + num).css('opacity', '1');

    $(name).css('background-color', '#dddbdb');

    $('.quote_block div:not(' + name + ')').css('box-shadow', '0px 0px 0px transparent');



    GetWebQuotes();

}



function quite_quote(name, num) {

    $(name).removeClass('hover');

    $('img.img_' + num).css('opacity', '0');

    $(name).css('background-color', '#fff');

    $('.quote_block div:not(' + name + ')').css('box-shadow', '5px 5px 5px rgba(0,0,0,0.3)');





    GetWebQuotes();

}

$(function() {

    $('.eurusd').hover(function() {

        hover_quote('.eurusd', '1')

    }, function() {

        quite_quote('.eurusd', '1')

    });

    $('.usdjpy').hover(function() {

            hover_quote('.usdjpy', '2')

        },

        function() {

            quite_quote('.usdjpy', '2')

        });

    $('.gbpusd').hover(function() {

            hover_quote('.gbpusd', '3')

        },

        function() {

            quite_quote('.gbpusd', '3')

        });

    $('.gbpjpy').hover(function() {

            hover_quote('.gbpjpy', '4')

        },

        function() {

            quite_quote('.gbpjpy', '4')

        });

    $('.eurgbp').hover(function() {

            hover_quote('.eurgbp', '5')

        },

        function() {

            quite_quote('.eurgbp', '5')

        });

    $('.xauusd').hover(function() {

            hover_quote('.xauusd', '6')

        },

        function() {

            quite_quote('.xauusd', '6')

        });

    $('.xagusd').hover(function() {

            hover_quote('.xagusd', '7')

        },

        function() {

            quite_quote('.xagusd', '7')

        });

});
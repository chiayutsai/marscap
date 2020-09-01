var url = window.location.href;
if (url.indexOf("?") > 0) {
    var dialog = url.split("=")[1];
    console.log(dialog);
    $("a[data-target='#0']").click();
}
var lang_csv = '';
lang_csv = 'new.html';
d3.csv(lang_csv, function(d) {
    return {
        date: d.day,
        title: d.title,
        link: d.link,
    };
}, function(error, data) {
    news(data) //调用分页插件

});
function news(data) {
    var dataRE = data.reverse();
    var length = data.length;
    var obj_1 = {
        obj_box: '.page_1', //翻页容器
        total_item: data.length, //条目总数
        per_num: 10, //每页条目数
        current_page: 1, //当前页
        change_content: function change_content(per_num, current_page) {
            per_num = per_num ? per_num : 10; //每页显示条数,默认为10条
            current_page = current_page ? current_page : 1; //当前页,默认为1
            var page_content = '<ul class="newslist_ul">'; //当前页内容
            for (var i = 0; i < per_num; i++) {
                var num = (current_page - 1) * per_num + i;
                if (num < data.length) {
                    var date = dataRE[num].date;

                    var title = dataRE[num].title;

                    var link = dataRE[num].link;
                    page_content += "  <li><a href='' class='more' data-toggle='modal' data-target='#" + num + "'><div class='wrap'><p class='news_date'>" + date + "</p><p class='news_title'>" + title + "</p></div></a><div class='modal' id='" + num + "'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h5 class='modal-title'>" + title + "</h5><button type='button' class='close' data-dismiss='modal'>&times;</button></div><div class='modal-body'><iframe frameborder='0' height='1200' scrolling='no' src='"+link+"' style='width:100%'></iframe></div></div></div></div></li>";

                }
            }
            page_content += '</ul>';
            $(this.obj_box).children('.page_content').html(page_content);

        }
    };
    page_ctrl(obj_1)

    if (url.indexOf("?") > 0) {
        var dialog = url.split("=")[1];

        $("a[data-target='#" + dialog + "']").click();
        $(".close").click(function() {
            window.location.href = url.split("?")[0]
        });
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
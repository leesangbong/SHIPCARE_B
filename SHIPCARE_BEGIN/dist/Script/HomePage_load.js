/********************
       HomePage
*********************/

/* Homepage_topnav */
$(function () {
    $("header a[name=topnav]").on('click', function (e) {
        e.preventDefault();
        var url = this.href;

        $('header a.current').removeClass('active current');
        $(this).addClass('active current');

        $('#center_secondary').remove();
        $('#center_primary').after('<div id="center_secondary"></div>');
        $('#center_secondary').load(url).hide().fadeIn('slow');
    });
});
/* Homepage_topnav End*/

/*function getAjaxText() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //IE 7 이상, Firefox, chrome, Opera, safari를 위한 코드
        xmlhttp = new XMLHttpRequest();
    } else {
        //IE 6, IE 5를 위한 코드
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //xmlhttp의 상태에 변화가 발생하면 아래 함수 호출
    //readyState 4는 요청처리가 완료되어 응답대기중이라는 뜻이며
    //status 200은 OK이다.
    //responseText는 text.html 파일에 요청을 보내서 출력되는 결과를 텍스트로 받는 값이다.
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("myText").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "center11.html", true);
    xmlhttp.send();
   
}*/

/* Homepage_header popup */
$(function () {
    $("#homeicon").popup({
        position: 'bottom left',
        content: 'Here is a map shows the home screen.'
    });
});
/* Homepage_header popup End */

/* Homepage_sidebar */
$(function () {
    $("#sidebar_onoff_btn").click(function () {
        $(".ui.sidebar").sidebar({
            context: $('.ui.pushable')
        }).sidebar('setting', 'transition', 'push').sidebar('toggle');
    });
});


//$(function () {
//    $("#sidebar_onoff_btn").click(function () {
//        $("#push_secondary").sidebar({
//            context: $('#push')
//        }).sidebar('setting', 'transition', 'push').sidebar('toggle');
//    });
//});



$(function () {
    $("#treeview").kendoTreeView({
        dragAndDrop: true,
        dataImageUrlField: "image",
        dataSource: treeview_data,
        select: function (e) {

            var dataSource = new kendo.data.DataSource(treeview);

            console.log("Selecting", this.dataItem(e.node));
            var dataItem = this.dataItem(e.node);

            console.log(dataItem.lat + dataItem.lng);
            map.setView([dataItem.lat, dataItem.lng], 14);

        }
    });

});
/* Homepage_sidebar End */


$(function () {
    $(".ui.orange.tag.label").click(function () {
        $(".ui.orange.tag.label").fadeOut('slow');
    });
});



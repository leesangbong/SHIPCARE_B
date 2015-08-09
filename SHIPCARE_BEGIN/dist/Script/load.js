$(function () {
    $('header a').on('click', function (e) {
        e.preventDefault();
        var url = this.href;

        $('header a.current').removeClass('current');
        $(this).addClass('current');

        $('#container').remove();
        $('#content').load(url + ' #container').hide().fadeIn('slow');
    });
});

$(function () {
    $("#sidebar_onoff_btn").click(function () {
        $("#sidebar_secondary").sidebar({
            context: $('#container_first')
        }).sidebar('setting', 'transition', 'overlay').sidebar('toggle');
    });
});


$(document).ready(function () {
    $("#treeview").kendoTreeView();
});

$(function () {
    $(".ui.orange.tag.label").click(function () {
        $(".ui.orange.tag.label").fadeOut('slow');
    });
});
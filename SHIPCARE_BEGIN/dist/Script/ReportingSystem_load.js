$(function () {
    $("header a[name=reporting_topnav]").on('click', function (e) {
        e.preventDefault();
        var url = this.href;

        $('header a.current').removeClass('active current');
        $(this).addClass('active current');

        $('#ReportingSystem_secondary').remove();
        $('#ReportingSystem_primary').after('<div id="ReportingSystem_secondary" ></div>');
        $('#ReportingSystem_secondary').load(url).hide().fadeIn('slow');
    });
});
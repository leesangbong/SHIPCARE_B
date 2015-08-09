/********************
       Input
*********************/

/* bace hide */
$(function () {
    /*$("#ShipInput_right_menu a").hide();*/
    $("#save_modal_yesbtn").hide();
});
/* bace hide End*/

/* Input_topnav */
$(function () {
    $("header a[name=input_topnav]").on('click', function (e) {
        e.preventDefault();
        var url = this.href;

        $('header a.current').removeClass('active current');
        $(this).addClass('active current');

        $('#inputcenter_secondary').remove();
        $('#inputcenter_primary').after('<div id="inputcenter_secondary" ></div>');
        $('#inputcenter_secondary').load(url).hide().fadeIn('slow');


        $('#ShipInput_right_menu a').hide().slideToggle(900);
    });
});
/* Input_topnav End */

/* modal Input show */
/* Next */
$(function () {
    $("#modal_input").click(function () {
        $("#first_modal").modal('show');
    });
});

$(function () {
    $("#first_modal_Nextbtn").click(function () {
        $("#second_modal").modal('show');
    });
});

$(function () {
    $("#second_modal_Nextbtn").click(function () {
        $("#third_modal").modal('show');
    });
});

$(function () {
    $("#third_modal_yesbtn").click(function () {
        $("#save_modal").modal('show');
    });
});
/* Next End*/

/* back */
$(function () {
    $("#save_modal_backbtn").click(function () {
        $("#third_modal").modal('show');
    });
});

$(function () {
    $("#third_modal_backbtn").click(function () {
        $("#second_modal").modal('show');
    });
});

$(function () {
    $("#second_modal_backbtn").click(function () {
        $("#first_modal").modal('show');
    });
});

$(function () {
    $("#pwd_backbtn").click(function () {
        $("#save_modal").modal('show');
    });
});
/* back End*/

/* input close text remove */
$(function () {
    $("#first_modal_Closebtn").bind("click", function () {
        $(".Ship_General_input").each(function () {
            $(".Ship_General_input").val('');
        });
    });
});

$(function () {
    $("#save_modal_closebtn").bind("click", function () {
        $(".Ship_General_input").each(function () {
            $(".Ship_General_input").val('');
        });
    });
});
/* input close text remove End*/


/* Ship Particular Input */
function addtableLine(obj) {
    var Ship_General_Tbl = $("#Ship_General_Table");
    var Hull_Table_Tbl = $("#Hull_Table");
    var Engine_Table_Tbl = $("#Engine_Table");
    var i = 1;

    $(".Ship_General_input").each(function () {
        if (i == 1) {
            var temp = $("input[name=" + i + "]").val();
            $(Ship_General_Tbl).find("tr:last").after('<tr><td>' + temp + '</td></tr>');
            i++;
        } else if (i <= 6) {
            var temp = $("input[name=" + i + "]").val();
            $(Ship_General_Tbl).find("td:last").after('<td>' + temp + '</td>');
            i++;
        } else if (i == 7) {
            var temp = $("input[name=" + i + "]").val();
            $(Hull_Table_Tbl).find("tr:last").after('<tr><td>' + temp + '</td></tr>');
            i++;
        } else if (i <= 12) {
            var temp = $("input[name=" + i + "]").val();
            $(Hull_Table_Tbl).find("td:last").after('<td>' + temp + '</td>');
            i++;
        } else if (i == 13) {
            var temp = $("input[name=" + i + "]").val();
            $(Engine_Table_Tbl).find("tr:last").after('<tr><td>' + temp + '</td></tr>');
            i++;
        } else if (i <= 18) {
            var temp = $("input[name=" + i + "]").val();
            $(Engine_Table_Tbl).find("td:last").after('<td>' + temp + '</td>');
            i++;
        }
    });
    $(".Ship_General_input").val('');

}
/* Ship Particular Input End*/



$(function () {
    var pwd = "1234";
    var text = "신규입력"
    $("#okbtn").click(function () {
        var Ship_input_pwd = $("input[name=ship_input_pwd]").val();

        if (Ship_input_pwd == pwd) {
            $("#save_modal_yesbtn").hide().fadeIn('slow');
        }
        else {
            $("#pwd").modal('show');
        }
    });

});


/* modal Input show End*/
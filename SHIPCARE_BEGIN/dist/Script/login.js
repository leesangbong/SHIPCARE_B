$(document).ready(function () {
    $("#login").click(function () {
        var $inputId = $("input:text").val();
        var $inputpwd = $("input:password").val();
        console.log($inputId);
        console.log($inputpwd);

        var $dbId = "shipcare";
        var $dbpwd = "12341234";
        console.log($dbId + "/" + $dbpwd);

        if ($dbId == $inputId && $dbpwd == $inputpwd) {
            var url = "HomePage_Main.html"
            $(location).attr('href', url);
            console.log("둘다 맞앗네");
        } else {
            //var url = "LoginFailurePage.html"
            //$(location).attr('href', url);
            $()
            console.log("둘다 틀렸네앗네");
            $('h2#repaly-ready').remove();
            $('form#login-failure').before('<h2 id="repaly-ready" class="ui huge comments">다시 로그인 해주세요</h2>');
        }

    });
});

$(document)
    .ready(function () {
        $("#login").click(function () {
            $('.ui.form').form({
                fields: {
                    email: {
                        identifier: 'email',
                        rules: [{
                            type: 'empty',
                            prompt: '아이디를 입력해주세요.'
                        }, {
                            type: 'email',
                            prompt: '정확한 아이디가 아닙니다.'
                        }]
                    },
                    password: {
                        identifier: 'password',
                        rules: [{
                            type: 'empty',
                            prompt: '비밀번호를 입력하세요.'
                        }, {
                            type: 'length[6]',
                            prompt: '비밀번호는 6자 이상이어야 합니다.'
                        }]
                    }
                }
            });
        });
    });
        
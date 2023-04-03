
/* $.validator.setDefaults({
    submitHandler: function() {
        alert("submitted!");
    }
});
 */
$().ready(function() {
    $("#sign-form").validate({
        rules: {
            id: {
              required: true,
              minlength: 6
            },
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
               /*  required: true, */
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            phone: {
              required: true,
              minlength: 11
            },
            agree: "required",
            newsletter_email: {
                required: true,
                email: true
            },
            business_number: {required : true,},
        },
        messages: {
            id: {
                required: "아이디를 입력해주세요.",
                minlength: "영문자 +숫자 6 ~ 10자리로 입력해주세요."
            },
            password: {
                required: "비밀번호를 입력해주세요.",
                minlength: "영문자 +숫자+특수기호 6 ~ 10자리로 입력해주세요."
            },
            confirm_password: {
                /* required: "비밀번호를 입력해주세요.", */
                equalTo: "비밀번호가 일치하지 않습니다."
            },
            email: "이메일을 다시 확인해주세요.",
            phone: {
              required: "휴대폰 번호를 입력해주세요.",
              minlength: "휴대폰 번호를 입력해주세요."
            },
            agree: "서비스 이용약관에 동의해주세요.",
            newsletter_email: "이메일을 다시 확인해주세요.",
            business_number :{
                required : "등록된 여행사가 없습니다.",
            },
        }
    });

    $("#sign-form2").validate({
        rules: {
            id: {
              required: true,
            },
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                /* required: true, */
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            phone: {
              required: true,
              minlength: 11
            },
            agree: "required",
            newsletter_email: {
                required: true,
                email: true
            },
        },
        messages: {
            id: {
                required: "아이디를 입력해주세요.",
            },
            password: {
                required: "비밀번호를 입력해주세요.",
                minlength: "영문자 +숫자+특수기호 6 ~ 10자리로 입력해주세요."
            },
            confirm_password: {
                /* required: "비밀번호를 입력해주세요.", */
                equalTo: "비밀번호가 일치하지 않습니다."
            },
            email: "이메일을 다시 확인해주세요.",
            phone: {
              required: "휴대폰 번호를 입력해주세요.",
              minlength: "휴대폰 번호를 입력해주세요."
            },
            agree: "서비스 이용약관에 동의해주세요.",
            newsletter_email: "이메일을 다시 확인해주세요.",
        }
    });

    $("#login-form").validate({
        rules: {
            id: {
                required: true,
            },
            password: {
                required: true,
            },
            n_password: {
                required: true,
                minlength: 6
            },
            r_password: {
                required: true,
                equalTo: "input[name='n_password']"
            },         

        },
        messages: {
            id: {
                required: "회원정보를 확인해주세요.",
            },
            password: {
                required: "회원정보를 확인해주세요.",
            },
            n_password: {
                required: "비밀번호를 입력해주세요",
                minlength: "영문자+숫자+특수기호 6~10자리 입력해주세요"
            },
            r_password: {
                required: "비밀번호를 입력해주세요",
                equalTo: "비밀번호가 일치하지 않습니다",
            },
        }
    });

    $("#lookup-form").validate({
        rules: {
            rsv_number: {
              required: true,
            },
        },
        messages: {
            rsv_number: {
                required: "예약번호가 일치하지 않습니다."
            },
        }
    });
});


// 뒤로가기
function goBack(){
    window.history.back();
}
//input값이 있을 때 버튼을 활성화
let userId = document.querySelector("#userId");

let btnAccept = document.querySelector("#btnAccept");
userId.addEventListener('keyup', activeEvent);
userPwd.addEventListener('keyup', activeEvent);
function activeEvent() {
    switch(!(userId.value && userPwd.value)){
        case true : btnAccept.disabled = true; break;
        case false : btnAccept.disabled = false; break
    }
}
$(function (){
    //로그인 창 - 비밀번호 찾기 버튼
    $(".pwdForget").click(function pwdForget(){
        let userIdv = document.getElementById("userId").value;
        let str = document.getElementById("loginAlert");
        $('#loginAlert').fadeIn();
        if(userIdv == ""){
            str.innerHTML = "이메일을 입력해주세요";
        }else if(userIdv != "test@mail.com"){
            str.innerHTML = "해당 사용자를 찾을 수 없습니다.";
        }else{
            str.innerHTML = "비밀번호 재설정 메일이 " + userIdv + "로 전달되었습니다.";
        };
        setTimeout(function(){$('#loginAlert').fadeOut();}, 2000);
    })
    //로그인 창 - 로그인 버튼
    $(".login").click(function login(){
        let userIdv = document.getElementById("userId").value;
        let userPwdv = document.getElementById("userPwd").value;
        let str = document.getElementById("loginAlert");
        $('#loginAlert').fadeIn();
        if(userIdv != "test@mail.com"){
            str.innerHTML = "해당 사용자를 찾을 수 없습니다.";
        }else if(userIdv == "test@mail.com" && userPwdv == "pwd1234"){
            location.href = 'main.html';
        }else{
            str.innerHTML = "잘못된 비밀번호입니다.";
        };
        setTimeout(function(){
            $('#loginAlert').fadeOut();}, 2000);
    })
    /* 회원가입 */
    // 회원가입 메세지
    $(".join").click(function join(){
        let userIdv = document.getElementById("userId").value;
        let userPwdv = document.getElementById("userPwd").value;
        let str = document.getElementById("loginAlert");
        let regId = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        let regPwd = /^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
        $('#loginAlert').fadeIn();
        if(userIdv == "test@mail.com"){
            str.innerHTML = "이미 가입된 사용자입니다.";
        }else if(false === regId.test(userIdv)){
            str.innerHTML = "올바른 이메일 형식이 아닙니다.";        
        }
        else if (false === regPwd.test(userPwdv)) {
            str.innerHTML = "비밀번호는 영문,숫자를 혼합하여 6자 이상으로 입력해주세요.";
        }else{
            location.href = 'email.html';
        };
        setTimeout(function(){
            $('#loginAlert').fadeOut();}, 2000);
    })
    // 회원가입 중 패스워드 자동체크
    $('#userPwd').keyup(function pwdCheck(){
        let userPwdv = document.getElementById("userPwd").value;
        let regPwd = /^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
        if(true === regPwd.test(userPwdv)){
            $("#pwdCheck").show();
            $("#pwdCheck img").attr("src", "images/icon_pwdCheck_p.png");
        }else{
            $("#pwdCheck").show();
            $("#pwdCheck img").attr("src", "images/icon_pwdCheck_f.png");
        }
    })
});

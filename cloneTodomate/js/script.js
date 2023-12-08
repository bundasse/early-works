$(function(){
    $(".modal").click(function(){
        $(this).toggleClass("on");
    });
    //달력 주간/월간표시 전환
    $(".calender .calTab div").click(function(){
        
        $(this).siblings("div").toggleClass("on");
    });
    //탭바의 버튼을 클릭하면 탭 바 위 달력이 할 일 달력/일기 달력으로 전환.
    $(".calender .tabContents > table").last().hide();
    let radioContent = $(".calender .tabContents > table");
    $("input[type='radio']").click(function(){
     radioContent.hide();
     radioContent.eq($("input[type='radio']").index(this)).show();
    });
    //할 일 추가 액션
    $("#workAdd").click(function(){
        $("#workList").append('<li><form><label><input type="checkbox"><i class="workIcon"></i><input type="text" placeholder="입력" onchange="printWork()"></label></form></li>');
    });
});
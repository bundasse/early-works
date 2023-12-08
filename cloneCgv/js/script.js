/* 상단배너 닫기 */
let bannerFunc = function(){
    $('.top_banner .btnClose').bind("click", function(){
        $('.top_banner').animate({height: 0}, 500);
    });
};
$(function($){
    bannerFunc();
});

$("header nav .navi .gnb ul li").hover(function(){
    $("header nav .navi .gnb>ul>li>ul").stop().show(300);
    $("header nav").stop().animate({"height":"400px"});
},function(){
    $("header nav").stop().animate({"height":"50px"});
    $("header nav .navi .gnb>ul>li>ul").stop().hide(300);
});
/* 비디오 제어 */
let video = document.querySelector(".visual .contents video");
let videoPlay = document.querySelector(".visual .visual_control .video_play");
let videoPause = document.querySelector(".visual .visual_control .video_pause");
function videoPlayon() {
    // 기본 설정으로 autoplay 시작
    video.play();
    videoPlay.style.display = "none";
    videoPause.style.display = "block";
};
function videoPlaystop() {
    video.pause();
    videoPlay.style.display = "block";
    videoPause.style.display = "none";
};
    videoPlay.onclick = videoPlayon;
    videoPause.onclick = videoPlaystop;

    /* 무비차트 */
$(".ranking ol li").hover(function(){
    $(this).find(".movie_btn").show();
    $(this).find("a img").css("filter","brightness(0.6)");
    $(this).find("a img").css("box-shadow","0px 10px 7px #aaaaaa");
},function(){
    $(this).find(".movie_btn").hide();
    $(this).find("a img").css("filter","none");
    $(this).find("a img").css("box-shadow","none");
});
$(".ranking .contents h2").click(function(){
    $(".ranking .contents h2,.ranking .contents ol").removeClass("on"); // 여러개 초기화
    $(this).addClass("on");
    $(this).next("ol").addClass("on"); // 나(this)의 다음(next)에 있는 ul
});

//슬라이드
let swiper = new Swiper(".ranking .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    navigation: {
        nextEl: ".ranking .swiper-button-next",
        prevEl: ".ranking .swiper-button-prev",
      },
    
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      679: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 32,
      },
      navigation: {
        nextEl: ".ranking .swiper-button-next",
        prevEl: ".ranking .swiper-button-prev",
      },
    },
  });
/* 무비차트 끝 */

//특별관
let cinImg = ["images/cinema_01.png","images/cinema_02.png","images/cinema_03.png","images/cinema_04.png"];
let cinAlt = ["스위트 시네마. 호텔 컨셉의 프리미엄관",
"씨네 앤 리빙룸. 신개념 소셜 상영관",
"4DX. 모션 시트 오감체험",
"씨네 드 쉐프. 쉐프가 있는 영화관"];
for(let cinNum = 0; cinNum < 4; cinNum++){
    $(".cin_menu ul li").eq(cinNum).hover(function(){
        $(".cin_img a img").attr("src", cinImg[cinNum]);
        $(".cin_img a img").attr("alt", cinAlt[cinNum]);
    });
}
/* 광고 슬라이드 */
let adSwiper = new Swiper(".adSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 80,
    loop: true,
    autoplay: {
        delay: 1000,
    },
    });
let slidePlay = document.querySelector(".board .ad .slide_play");
let slidePause = document.querySelector(".board .ad .slide_pause");
    function autoPlayon() {
        // 기본 설정으로 autoplay 시작
        adSwiper.autoplay.start();
        slidePlay.style.display = "none";
        slidePause.style.display = "block";
    };
    function autoPlaystop() {
        adSwiper.autoplay.stop();
        slidePlay.style.display = "block";
        slidePause.style.display = "none";
    };
    slidePlay.onclick = autoPlayon;
    slidePause.onclick = autoPlaystop;

/* 계열사 사이트 바로가기 버튼 */
$(".family_site .family_go").on("click",function(){
    let link = $(".family_site .family_list option:selected").val();
    window.open(link, '_blank');
 })
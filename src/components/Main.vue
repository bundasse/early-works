<template>
    <!-- 슬라이드 -->
    <div class="w-full h-2/4">
        <swiper
        :slides-per-view="1"
        :space-between="50"
        :centeredSlides="true"
        :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        }"
        :pagination="{
        clickable: true,
        }"
        :modules="Modules" :loop="true"
        class="mySwiper">
            <swiper-slide v-for="e in 7" :key="e" class="h-full"><img :src="require(`@/assets/images/slide_0${e}.jpg`)" class="h-full" :alt="e"></swiper-slide>
        </swiper>
    </div>
    <!-- //슬라이드 -->
    <div class="w-full h-auto bgimage">
        <div class="max-w-7xl mx-auto flex flex-wrap justify-between pt-[130px] px-[2%] xl:px-0" data-aos="fade-up" data-aos-offset="300" data-aos-duration="500">
            <!-- 공지사항 -->
            <div class="basis-full xl:basis-[49%] relative">
                <h2 class="text-4xl anemonesq mb-[13px]">NOTICE</h2>
                <div class="p-[26px] rounded-xl bg-[#f5f9fc] spoqa md:h-[222px]">
                    <ul>
                        <li class="mb-3 last-of-type:mb-0" v-for="e in ContentData[0].Notice" :key="e">
                            <a href="#" @click.prevent class="flex flex-wrap justify-between">
                                <p class="w-full md:w-4/5 text-base whitespace-nowrap text-ellipsis overflow-hidden">{{ e.title }}</p>
                                <span>{{ e.date }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="#" @click.prevent class="absolute top-2.5 right-4"><img :src="require(`@/assets/images/shortcut_btn.png`)" alt="더보기" title="공지사항 더보기"></a>
            </div>
            <!-- 뉴스레터 -->
            <div class="basis-full xl:basis-[49%] mt-[54px] md:h-[222px]">
                <div class="rounded px-[45px] py-5 flex flex-wrap bg-[#f5f9fc] anemonesq">
                    <h2 class="basis-full text-4xl mb-[13px]">NEWS LETTER</h2>
                    <form class="basis-full Spoqa flex justify-between">
                        <input type="text" placeholder="이름" class="w-full md:w-[18%] rounded-xl px-3 py-3 text-base placeholder:font-extralight placeholder:text-base">
                        <input type="email" name="" id="" placeholder="이메일" class="w-full md:w-[55%] rounded-xl px-3 py-3 text-base placeholder:font-extralight placeholder:text-base">
                        <input type="submit" value="구독신청" class="w-full md:w-[130px] p-1 text-xl rounded-xl anemonesq text-white bg-[#fa6e91]">
                    </form>
                    <div class="basis-full flex flex-wrap md:justify-between mt-6 justify-center items-center gap-y-2 lg:gap-y-0">
                        <div class="basis-full md:basis-auto flex gap-x-2.5 justify-center">
                            <a href="#" class="w-2/5 md:w-[110px] py-[12px] text-lg rounded-xl text-white bg-[#54c1bc] text-center">FAQ</a>
                            <a href="#" class="w-2/5 md:w-[110px] py-[12px] text-lg rounded-xl text-white bg-[#fa6e91] text-center">1:1 게시판</a>
                        </div>
                        <ul class="basis-full md:basis-auto flex gap-x-2 justify-center">
                            <li v-for="e in ContentData[0].SNS" :key="e">
                                <a :href="e.link">
                                <img :src="require(`@/assets/images/${e.image}`)" :alt="e.title" :title="e.title">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto flex flex-wrap justify-between pt-[77px] pb-[130px] px-[2%] xl:px-0" data-aos="fade-up" data-aos-offset="300" data-aos-duration="500">
            <!-- 배너 -->
            <div class="basis-full md:basis-[49%]">
                <a href="#" @click.prevent><img :src="require(`@/assets/images/minibanner_01.png`)" alt="부천국제판타스틱영화제 후원회원 모집" title="부천국제판타스틱영화제 후원회원 모집"></a>
            </div>
            <div class="basis-full md:basis-[49%] mt-5 md:mt-0">
                <a href="#" @click.prevent><img :src="require(`@/assets/images/minibanner_02.png`)" alt="아카이브 자료 기증 이벤트" title="아카이브 자료 기증 이벤트"></a>
            </div>
        </div>
        <!-- 슬라이드 배너 -->
        <div class="w-full" data-aos="fade-up">
            <swiper
            :slides-per-view="1"
            :space-between="50"
            :centeredSlides="true"
            :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
            }"
            :pagination="{
            clickable: true,
            }"
            :modules="Modules" :loop="true"
            class="mySwiper2">
                <swiper-slide v-for="e in 3" :key="e"><img :src="require(`@/assets/images/220613_Main_Full_Banner_0${e}.jpg`)" :alt="e"></swiper-slide>
            </swiper>
        </div>
        <!-- 뉴스 -->
        <h2 class="max-w-7xl mx-auto text-5xl anemonesq mt-40 mb-10 px-[2%] xl:px-0" data-aos="fade-up" data-aos-offset="300" data-aos-duration="500">BIFAN News</h2>
        <div class="w-full bg-[#f6f6f6] py-10 px-[2%] xl:px-0 mt-[120px] xl:mt-0" data-aos="fade-up" data-aos-offset="300" data-aos-duration="500">
            <div class="max-w-7xl mx-auto flex justify-between flex-wrap gap-y-8">
                <div class="w-full xl:w-[73%] order-2">
                    <swiper
                    :slides-per-view="3"
                    :space-between="30"
                    :pagination="{type:'fraction', el:'.swiper-pagination'}"
                    :navigation="{prevEl:'.news-prev', nextEl:'.news-next'}"
                    :modules="Modules"
                    class="mySwiper3 spoqa items-stretch">
                        <swiper-slide v-for="(e,i) in ContentData[0].Webzine" :key="e" class="rounded-xl bg-white p-7">
                            <div class="w-full overflow-hidden rounded-xl">
                                <img :src="i <= 8 ? require(`@/assets/images/webzine_0${i+1}.jpg`) : require(`@/assets/images/webzine_${i+1}.jpg`) " :alt="e.title" class="transition-all duration-200 hover:scale-105">
                            </div>
                            <h3 class="my-8 text-ellipsis overflow-hidden break-words line-clamp-2 text-xl font-black">{{ e.title }}</h3>
                            <p>{{ e.date }}</p>
                        </swiper-slide>
                    </swiper>
                    <div class="swiper-control-container flex justify-between">
                        <div class="swiper-pagination2 relative"></div>
                        <div class="swiper-pagination relative"><div class="swiper-pagination-fraction"></div></div>
                        <div class="news-prev w-6 h-4 relative"><img :src="require(`@/assets/images/prev_ico.png`)" alt="이전 버튼" class="absolute top-0 left-0" /> </div>
                        <div class="news-next w-6 h-4 relative"><img :src="require(`@/assets/images/next_ico.png`)" alt="다음 버튼" class="absolute top-0 left-0" /> </div>
                    </div>
                </div>
                <div class="w-full xl:w-[24%] bg-[#fa6e91] text-white rounded-xl spoqa p-6 -mt-[140px] order-1 xl:order-2 flex flex-wrap">
                    <div class="basis-[390px] mx-auto md:mx-0 xl:basis-full overflow-hidden rounded-xl">
                        <img :src="require(`@/assets/images/webzine_fix.jpg`)" alt="사진자료" class="transition-all duration-200 hover:scale-105">
                    </div>
                    <div class="ml-5 basis-full md:basis-[42%] xl:basis-full">
                        <h3 class="text-ellipsis overflow-hidden break-words line-clamp-2 text-2xl font-bold mt-[22px]">{{ ContentData[0].WebzineFix.title }}</h3>
                        <p class="text-ellipsis overflow-hidden break-words line-clamp-2 text-sm mt-3 mb-[42px] xl:h-[105px]">{{ ContentData[0].WebzineFix.subtitle }}</p>
                        <p class="inline-block pr-4 border-b-[1px] border-white more"><a href="#">바로가기</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- //뉴스 -->
<div class="w-full border-b-[1px] border-gray-200 px-[2%] xl:px-0">
    <!-- 협력행사 -->
    <div class="max-w-7xl mx-auto">
        <ul class="w-full flex flex-wrap justify-between mt-[90px] mb-[76px] gap-y-3">
            <li v-for="e in ContentData[0].Banner" :key="e" class="basis-[32.5%] xl:basis-[15%] flex flex-wrap justify-center items-center text-center p-2 bg-white rounded-2xl shadow-md shadow-gray-200 text-xl anemonesq hover:bg-[#7bd2cd] hover:text-white">
                <a href="#" @click.prevent v-html="e"></a>
            </li>
        </ul>
    </div>
</div>
    <!-- 스폰서 -->
    <div class="max-w-7xl mx-auto my-[46px] px-[2%] xl:px-0">
        <div class="w-full flex justify-between items-center">
            <div class="-indent-[99999px] w-10 h-10 rounded-lg shadow-md shadow-gray-400 relative"><img :src="require(`@/assets/images/sponsor_stop.png`)" alt="이전 버튼" class="absolute top-0 left-0"></div>
            <div class="swiper-button-prev mt-0.5 ml-8 -indent-[99999px] w-10 h-10 rounded-lg shadow-md shadow-gray-400 relative"><img :src="require(`@/assets/images/sponsor_prev.png`)" alt="이전 버튼" class="absolute top-0 left-0"></div>
            <swiper
            :slides-per-view="5"
            :space-between="50"
            :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
            }"
            :navigation="{prevEl:'.swiper-button-prev', nextEl:'.swiper-button-next'}"
            :modules="Modules" :loop="true"
            class="mySwiper4 basis-9/12">
                <swiper-slide v-for="e in 64" :key="e">
                    <a href="#" @click.prevent><img :src="e <= 9 ? require(`@/assets/images/sponsor/0${e}.png`) : require(`@/assets/images/sponsor/${e}.png`) " :alt="e.title"></a>
                </swiper-slide>
            </swiper>
            <div class="swiper-button-next mt-0.5 -indent-[99999px] w-10 h-10 rounded-lg shadow-md shadow-gray-400 relative"><img :src="require(`@/assets/images/sponsor_next.png`)" alt="다음 버튼" class="absolute top-0 left-0"></div>
        </div>
    </div>
</template>
<script>
    import data from '../assets/Data.json';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination, Navigation } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/bundle';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import AOS from 'aos';
    import "aos/dist/aos.css";
export default {
    name:"MainPage",
    data() {
        return {
            ContentData: data,
            Modules: [Autoplay, Pagination, Navigation],
        }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
        swiperstop(){
            this.$refs.swiper.swiperInstance.autoplay.stop()
        },
        swiperplay(){
            this.$refs.swiper.swiperInstance.autoplay.resume()
        }
    },
    created() {
        AOS.init();
    },
}
</script>
<style>
    .swiper-pagination-bullet{
        width:14px;
        height:14px;
        bottom:0;
        border-radius: 50%;
        background-color: lightgray;
        opacity: 100%;
    }
    .swiper-pagination-bullet-active{
        background-image: url("../assets/images/vis_rolling_active.png");
        background-position: center center;
    }
    .anemonesq{
    font-family: 'Cafe24Ohsquare';
}
    .anemoneair{
        font-family: 'Cafe24Ohsquareair';
    }
    .spoqa{
    font-family: 'SpoqaHanSansNeo-Regular';
    }
    .bgimage{
        background-image: url("http://www.bifan.kr/web/images/common/etc_bg_icon.png");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position-x: 80%;
        background-position-y: 50%;
    }
    .more{
        background: url("../assets/images/more_arrow_sub.png") no-repeat center right;
    }
</style>
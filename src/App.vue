<template>
  <div class="relative">
    <div v-if="bannerOpen === true" class="w-full h-[90px] bg-[#284833] sticky top-0 z-10">
    <!-- 상단배너 -->
      <p class="max-w-7xl mx-auto relative text-center text-white text-2xl leading-[90px] notoserif">지금 가입하고 [<span class="font-bold notoserif">24시간 특별 혜택</span>] 받으세요!
        <button class="absolute top-0 right-24" @click="bannerOpen=false"><img :src="require(`@/assets/icon/topbanner_close.gif`)" alt="닫기"></button>
      </p>
    </div>
    <!-- 헤더 -->
    <div :class="bannerOpen === true?  'top-[90px]':'top-0'" class="w-full sticky border-b-2 border-gray-200 py-6 bg-white z-10">
      <div class="max-w-6xl mx-auto flex justify-between items-end">
        <div class="basis-1/3 flex">
          <input type="text" class="pl-3 h-10 border border-green-900 placeholder:text-gray-500 placeholder:text-sm" placeholder="검색어를 입력해주세요">
          <button class="bg-green-900 text-white w-10 h-10 p-2"><img :src="require(`@/assets/icon/search_w.svg`)" alt="검색"></button>
        </div>
        <img class="w-36 cursor-pointer" :src="require(`@/assets/icon/logo_pc.svg`)" alt="집반찬연구소 로고">
        <div class="basis-1/3 flex flex-col items-end gap-3">
            <ul class="flex text-sm text-gray-500">
              <li class="cursor-pointer hover:text-black mr-6 relative after:absolute after:w-[1px] after:h-3 after:-right-3 after:top-[6px] after:bg-gray-400">로그인</li>
              <li class="cursor-pointer hover:text-black mr-6 relative after:absolute after:w-[1px] after:h-3 after:-right-3 after:top-[6px] after:bg-gray-400">회원가입</li>
              <li class="cursor-pointer hover:text-black ">내정보</li>
            </ul>
            <ul class="w-full flex gap-4 text-lg justify-end">
              <li class="cursor-pointer"><img :src="require(`@/assets/icon/icon-story.svg`)" class="inline-block" alt=""> 브랜드</li>
              <li class="cursor-pointer"><img :src="require(`@/assets/icon/icon-banchan.svg`)" class="inline-block" alt=""> 반찬보기</li>
              <li class="cursor-pointer"><img :src="require(`@/assets/icon/cart-black.svg`)" class="inline-block" alt=""> 장바구니</li>
            </ul>
        </div>
      </div>
    </div>
    <!-- 내비게이션 -->
    <div class="max-w-6xl mx-auto py-10">
      <ul class="flex justify-between">
        <li v-for="(e, i) in mainmenu" :key="i" class="basis-[32.5%]">
          <p class="pb-3 text-sm font-bold border-b mb-3">
            {{ e.name }}
          </p>
          <ul class="flex justify-between flex-wrap">
            <li v-for="(el, index) in submenu[i]" :key="index" class="basis-[47%] cursor-pointer">
              <p class="py-2 text-gray-600 hover:text-black transition-all duration-300">
                {{ el }}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- //내비게이션 -->
    <!-- //헤더 -->
    <!-- 비주얼 -->
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :modules="modules"
      :navigation="true"
    >
      <swiper-slide  v-for="(e, i) in visualContents" :key="i">
            <img :src="require(`@/assets/images/`+e+`.jpg`)" alt="" class=" h-96 object-cover">
      </swiper-slide>
    </swiper>
    <!-- //비주얼 -->
    <div class="max-w-6xl mx-auto mt-10">
      <img :src="require(`@/assets/images/ban_reason 2.jpg`)" alt="">
    </div>
    <!-- 어린이반찬 -->
    <section class="max-w-6xl mx-auto py-20 mb-10 relative">
      <h2 class="text-4xl font-bold mb-10">어린이 반찬</h2>
      <article>
        <SlideComp :slideData="product.kid"/>
      </article>
      <p class="absolute top-24 right-0 cursor-pointer text-gray-600 text-sm flex items-center">더보기<img :src="require(`@/assets/icon/right.svg`)" class="w-6 h-6" alt="더보기"></p>
    </section>
    <!-- //어린이반찬 -->
    <div class="max-w-6xl mx-auto">
      <ul class="flex justify-between">
        <li v-for="e in 3" :key="e" :class="e===3 ? 'basis-1/2' : 'basis-[24%]'">
          <img :src="require(`@/assets/images/banner_`+e+`_pc_.png`)" alt="">
        </li>
      </ul>
    </div>
    <!-- 주간추천반찬 -->
    <section class="max-w-6xl mx-auto py-20">
      <h2 class="text-4xl font-bold mb-10">주간 추천 반찬</h2>
      <article>
        <ul class="flex gap-3 mb-5">
          <li v-for="(e, i) in category" :key="i" @click="selectedCategory = e.link" class="text-sm px-4 py-2 rounded-md cursor-pointer" :class="selectedCategory === e.link ? ' bg-green-900 text-white':'bg-gray-200 text-gray-600'">{{ e.name }}</li>
        </ul>
        <ul class="flex justify-between">
          <li v-for="(e, i) in weeklyItem[selectedCategory]" :key="i" class="basis-[24%]">
            <div class="cursor-pointer">
                <div class="relative">
                    <img :src="require(`@/assets/images/`+e.img+`.jpg`)" alt="">
                    <p v-if="e.sale !== 0" class="absolute w-[50px] h-[50px] bg-red-600 text-white top-4 left-4 z-5 py-3 text-center font-bold">{{ e.sale }}%</p>
                    <p class="absolute w-[50px] h-[50px] bg-black opacity-50 bottom-4 right-4 z-5 p-[6px]"><img :src="require(`@/assets/icon/cart-white.svg`)" class="w-10" alt=""></p>
                </div>
                <div class="bg-white py-5">
                    <ul class="flex gap-2 h-4">
                        <li v-for="(el, index) in e.tag" :key="index" class="text-xs" :class="el === '인기'? 'text-red-600': 'text-gray-600'">#{{ el }}</li>
                    </ul>
                    <p class="font-bold my-1">{{ e.name }}</p>
                    <p class="text-xs text-gray-600 mb-2">{{ e.desc }}</p>
                    <p class="text-red-600 font-bold text-lg">{{  salePrice(e.sale, e.price) }}<span clas="text-sm">원</span></p>
                    <span v-if="e.sale !== 0" class="text-gray-400 text-xs line-through">{{e.price}}원</span>
                </div>
            </div>
          </li>
        </ul>
      </article>
    </section>
    <!-- //주간추천반찬 -->
    <div class="max-w-6xl mx-auto">
      <img :src="require(`@/assets/images/250banchan_linebanner_pc.png`)" alt="">
    </div>
    <!-- 새로운 반찬 -->
    <section class="max-w-6xl mx-auto py-20 relative">
      <h2 class="text-4xl font-bold mb-10">새로운 반찬</h2>
      <article>
        <SlideComp :slideData="product.new"/>
      </article>
      <p class="absolute top-24 right-0 cursor-pointer text-gray-600 text-sm flex items-center">더보기<img :src="require(`@/assets/icon/right.svg`)" class="w-6 h-6" alt="더보기"></p>
    </section>
    <!-- //새로운 반찬 -->
    <div class="max-w-6xl mx-auto">
      <img :src="require(`@/assets/images/summer_noodle_linebanner_pc.jpg`)" alt="">
    </div>
    <!-- 정기배송 -->
    <section class="max-w-6xl mx-auto py-20">
      <h2 class="text-4xl font-bold mb-10">정기배송</h2>
      <article>
        <ul class="flex flex-wrap justify-between gap-y-5">
          <li v-for="(e, i) in product.subscribe" :key="i" class="basis-[32%] cursor-pointer">
            <div class="relative">
              <img :src="require(`@/assets/images/`+e.img+`.jpg`)" alt="">
              <p v-if="e.sale !== 0" class="absolute w-[50px] h-[50px] bg-red-600 text-white top-4 left-4 z-5 py-3 text-center font-bold">{{ e.sale }}%</p>
              <p class="absolute w-[50px] h-[50px] bg-black opacity-50 bottom-4 right-4 z-5 p-[6px]"><img :src="require(`@/assets/icon/cart-white.svg`)" class="w-10" alt=""></p>
            </div>
            <div class="bg-white py-5">
              <ul class="flex gap-2">
                <li v-for="(el, index) in e.tag" :key="index" class="text-xs" :class="el === '인기'? 'text-red-600': 'text-gray-600'">#{{ el }}</li>
              </ul>
              <p class="font-bold my-1">{{ e.name }}</p>
              <p class="text-xs text-gray-600 mb-2">{{ e.desc }}</p>
              <p class="text-red-600 font-bold text-lg pb-0 mb-0"><span :class="e.sale === 0 ? 'hidden':''">{{ e.sale }}%</span> {{ salePrice(e.sale, e.price) }}<span clas="text-sm">원</span></p>
              <span v-if="e.sale !== 0" class="text-gray-400 text-xs line-through">{{e.price}}원</span>
            </div>
          </li>
        </ul>
      </article>
    </section>
    <!-- //정기배송 -->
    <!-- 집반찬연구소 이야기 -->
    <section class="w-full bg-[#f7f7f7]">
      <div class="max-w-6xl mx-auto py-20 relative">
        <h2 class="text-4xl font-bold mb-10">집반찬연구소 이야기</h2>
        <article>
          <ul class="flex flex-wrap justify-between gap-y-10">
            <li v-for="(e, i) in event" :key="i" :class="i<3 ? 'basis-[32%]':'basis-[18.5%]'" class="shadow-md bg-white">
              <img :src="require(`@/assets/images/`+e.img+`.jpg`)" alt="">
              <div class="p-5">
                <p class="text-xl font-bold line-clamp-1 mb-5 notoserif">{{ e.title }}</p>
                <span class="text-xs text-gray-600 line-clamp-3">{{ e.desc }}</span>
              </div>
            </li>
          </ul>
        </article>
        <p class="absolute top-24 right-0 cursor-pointer text-gray-600 text-sm flex items-center">더보기<img :src="require(`@/assets/icon/right.svg`)" class="w-6 h-6" alt="더보기"></p>
      </div>
    </section>
    <!-- 고객만족후기 -->
    <section class="max-w-6xl mx-auto py-20">
      <h2 class="text-4xl font-bold mb-10">고객만족후기</h2>
      <article>
        <ReviewComp />
      </article>
    </section>
    <!-- 푸터 -->
    <FooterComp />
    <div class="fixed right-8 bottom-8 w-12 h-12">
      <img :src="require(`@/assets/icon/top_arrow.svg`)" alt="">
    </div>
  </div>
</template>

<script>
import eventdata from "@/assets/event.json"
import product from "@/assets/product.json"
import SlideComp from "@/components/SlideComp.vue"
import ReviewComp from "@/components/ReviewComp.vue"
import FooterComp from "@/components/FooterComp.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
export default {
  name: 'App',
  data() {
    return {
      bannerOpen: true,
      visualContents: ['banner_03fa687a15b3364406cb79685a6d9bb0','banner_4b385f00fa872a30ca4f2187c7eca720','banner_0074fafea0659b28df43fc3b63a92093','banner_3022779eb81d97638fd568799b080f8d','banner_35211058de968b521eba695108c4155c'],
      mainmenu:[{name:'모든반찬',link:''},{name:'간편검색',link:''},{name:'인기검색',link:''}],
      submenu:[['추석 차례상', '2023 추석', '아이 반찬 6종, 등장!', '특선! 비빔밥 재료', '정기배송', '무침', '볶음', '조림', '어린이 반찬', '요리놀이터', '국/찌개/탕', '소분야채', '메인요리', '묶음반찬', '전/생선', '협업상품', '김치/절임/젓갈', '곡류/양념', '대용량', '예치금'],
      ['#신제품', '#인기', '#냉동', '#맵지않음', '#따듯하게먹는반찬', '#조리필요', '#제철반찬', '#차갑게먹는반찬'],
      ['#할인반찬', '#어린이반찬', '#부모님반찬', '#소분야채', '#제철반찬', '#반조리', '#쿠킹박스']],
      category:[{name:'어린이 반찬',link:'kid'},{name:'국/찌개/탕',link:'tang'},{name:'요리놀이터',link:'noliteo'},{name:'무침',link:'muchim'},{name:'메인요리',link:'main'},{name:'쿠킹박스',link:'cookingbox'},{name:'볶음',link:'bokum'},{name:'조림',link:'jorim'},{name:'소분',link:'sobun'},{name:'김치/절임/젓갈',link:'jeolim'}],
      selectedCategory:'kid',
      event:eventdata.event,
      product:product,
      weeklyItem:product.weekly
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    SlideComp,
    ReviewComp,
    FooterComp
  },
  methods:{
    salePrice(sale, price){
      const cal =  Math.round((100-Number(sale))*Number(price)/10000)*100;
      return cal
    }
  },
  setup() {
      return {
        modules: [Navigation],
      };
  }
}
</script>

<style>
</style>

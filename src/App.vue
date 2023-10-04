<template>
  <!-- 상단배너 -->
  <div class="w-full h-[90px] bg-[#284833] sticky top-0">
    <p class="max-w-7xl mx-auto relative text-center text-white text-2xl leading-[90px]">지금 가입하고 [<span class="font-bold">24시간 특별 혜택</span>] 받으세요!
      <button class="absolute top-0 right-24"><img :src="require(`@/assets/icon/topbanner_close.gif`)" alt="닫기"></button>
    </p>
  </div>
  <!-- 헤더 -->
  <div class="w-full sticky border-b-2 border-gray-200 top-[90px] py-6 bg-white">
    <div class="max-w-6xl mx-auto flex justify-between items-end">
      <div class="basis-1/4">
        <input type="text" class="pl-3 h-10 border border-green-900 placeholder:text-gray-500 placeholder:text-sm" placeholder="검색어를 입력해주세요">
        <button class="bg-green-900 text-white h-10 px-2">검색</button>
      </div>
      <img class="w-36" :src="require(`@/assets/icon/logo_pc.svg`)" alt="집반찬연구소 로고">
      <div class="basis-1/4 flex flex-col items-end gap-3">
          <ul class="flex text-sm text-gray-500">
            <li class="mr-6 relative after:absolute after:w-[1px] after:h-3 after:-right-3 after:top-[6px] after:bg-gray-400">로그인</li>
            <li class="mr-6 relative after:absolute after:w-[1px] after:h-3 after:-right-3 after:top-[6px] after:bg-gray-400">회원가입</li>
            <li>내정보</li>
          </ul>
          <ul class="flex gap-4 text-lg font-semibold">
            <li>브랜드</li>
            <li>반찬보기</li>
            <li>장바구니</li>
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
          <li v-for="(el, index) in submenu[i]" :key="index" class="basis-[47%]">
            <p class="py-2 text-sm text-gray-600 hover:text-black transition-all duration-300">
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
  <!-- //비주얼 -->
  <!-- 어린이반찬 -->
  <!-- 주간추천반찬 -->
  <!-- 새로운 반찬 -->
  <!-- 정기배송 -->
  <!-- 집반찬연구소 이야기 -->
  <section class="w-full bg-[#f7f7f7]">
    <div class="max-w-6xl mx-auto py-[30px]">
      <h2 class="text-4xl font-bold mb-10">집반찬연구소 이야기</h2>
      <article>
        <ul class="flex flex-wrap justify-between gap-y-10">
          <li v-for="(e, i) in event" :key="i" :class="i<3 ? 'basis-[32%]':'basis-[18.5%]'" class="shadow-md">
            <img :src="require(`@/assets/images/`+e.img+`.jpg`)" alt="">
            <div class="bg-white p-5">
              <p class="text-xl font-bold line-clamp-1 mb-5">{{ e.title }}</p>
              <span class="text-xs text-gray-600 line-clamp-3">{{ e.desc }}</span>
            </div>
          </li>
        </ul>
      </article>
      <p>더보기</p>
    </div>
  </section>
  <!-- 고객만족후기 -->
  <section>
    <h2>고객만족후기</h2>
    <article>
      <ul>
        <li>
          <img src="" alt="">
          <div>
            <p></p>
            <p></p>
            <p>
              <span>이름 평점</span>
              <span>날짜</span>
            </p>
          </div>
        </li>
      </ul>
    </article>
  </section>
  <!-- 푸터 -->
  <div class="border-t py-10">
    <div class="max-w-6xl mx-auto flex justify-between">
      <div class="basis-[25%]">
        <h5 class="text-xs text-gray-600 font-bold mb-5">커뮤니티</h5>
        <div class="w-2/3 flex flex-wrap gap-y-3 mb-5">
          <p class="basis-1/2 text-xs text-gray-600"><a href="#" @click.prevent>공지사항</a></p>
          <p class="basis-1/2 text-xs text-gray-600"><a href="#" @click.prevent>이벤트</a></p>
          <p class="basis-1/2 text-xs text-gray-600"><a href="#" @click.prevent>자주묻는 질문</a></p>
          <p class="basis-1/2 text-xs text-gray-600"><a href="#" @click.prevent>1:1문의</a></p>
        </div>
        <ul class="flex gap-3">
          <li>카카오톡</li>
          <li>인스타</li>
          <li>페북</li>
        </ul>
      </div>
      <div class="basis-[33%]">
        <h5 class="text-xs text-gray-600 font-bold mb-5">협력제안</h5>
        <p class=text-lg>집반찬연구소와 함께하고 싶으신 분!<br/><span class="font-bold">환영합니다</span></p>
        <span class="text-xs text-gray-600">생산자 / 공급업체 / 봉사단체 / 구직자</span>
        <p class="mt-3 text">zipbanchan@sannamchon.co.kr</p>
      </div>
      <div class="basis-[40%]">
        <h5 class="text-xs text-gray-600 font-bold mb-5">고객센터</h5>
        <p class=" text-2xl font-bold mb-5">1588-3754</p>
        <p class="flex flex-col text-sm text-gray-600">
          <span>월~토요일 08:30 ~ 17:30</span>
          <span>점심시간 12:00 ~ 13:00</span>
          <span>일요일, 공휴일은 휴무입니다.</span>
        </p>
      </div>
    </div>
  </div>
  <div class="w-full bg-[#f7f7f7]">
    <div class="max-w-6xl mx-auto text-xs py-[30px]">
      <ul class="flex gap-4">
        <li class="relative after:absolute after:w-[1px] after:h-[14px] after:top-0 after:-right-2 after:bg-gray-500"><a href="#" @click.prevent>집반찬연구소 소개</a></li>
        <li class="relative after:absolute after:w-[1px] after:h-[14px] after:top-0 after:-right-2 after:bg-gray-500"><a href="#" @click.prevent>이용약관</a></li>
        <li><a href="#" @click.prevent>개인정보처리방침</a></li>
      </ul>
      <div>
        집반찬연구소 <button class="text-gray-400 underline" @click="addressOpen = !addressOpen">자세히보기</button>
        <div v-if="addressOpen === true" class="text-gray-400">
          <p>
            대표 : 박종철 / 주소 : 인천광역시 미추홀구 방축로206번길 36 집반찬연구소
          </p> 
          <p>
            사업자번호 : 121-86-17743 / 통신판매업신고 : 제 2016-인천남구-0674 호 / 개인정보 정책 및 담당 : 정문채
          </p>
          <p>
            대표번호 : 1588-3754 / 팩스번호 : 032-424-3088 / 이메일 : zipbanchan@sannamchon.co.kr
          </p> 
          <p>
            ⓒ SANNAMCHON CORP. All Rights Reserved.
          </p> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventdata from "@/assets/event.json"
export default {
  name: 'App',
  data() {
    return {
      addressOpen: false,
      mainmenu:[{name:'모든반찬',link:''},{name:'간편검색',link:''},{name:'인기검색',link:''}],
      submenu:[['추석 차례상', '2023 추석', '아이 반찬 6종, 등장!', '특선! 비빔밥 재료', '정기배송', '무침', '볶음', '조림', '어린이 반찬', '요리놀이터', '국/찌개/탕', '소분야채', '메인요리', '묶음반찬', '전/생선', '협업상품', '김치/절임/젓갈', '곡류/양념', '대용량', '예치금'],
      ['#신제품', '#인기', '#냉동', '#맵지않음', '#따듯하게먹는반찬', '#조리필요', '#제철반찬', '#차갑게먹는반찬'],
      ['#할인반찬', '#어린이반찬', '#부모님반찬', '#소분야채', '#제철반찬', '#반조리', '#쿠킹박스']],
      event:eventdata.event
    }
  },
  components: {
  }
}
</script>

<style>
</style>

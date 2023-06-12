<template>
  <!-- 상단배너 -->
  <div class="w-full h-[90px] bg-[#284833] sticky top-0">
    <p class="max-w-7xl mx-auto relative text-center text-white text-2xl leading-[90px]">지금 가입하고 [<span class="font-bold">24시간 특별 혜택</span>] 받으세요!
      <button class="absolute top-0 right-24"><img :src="require(`@/assets/icon/topbanner_close.gif`)" alt="닫기"></button>
    </p>
  </div>
  <!-- 헤더 -->
  <div class="w-full sticky border-b-2 border-gray-200 top-[90px]">
    <div class="max-w-7xl mx-auto">
      검색어를 입력해주세요
    </div>
  </div>
  <!-- 내비게이션 -->
  <!-- //내비게이션 -->
  <!-- //헤더 -->
  <!-- 비주얼 -->
  <!-- //비주얼 -->
  <!-- 어린이반찬 -->
  <!-- 주간추천반찬 -->
  <!-- 새로운 반찬 -->
  <!-- 정기배송 -->
  <!-- 집반찬연구소 이야기 -->
  <section>
    <h2>집반찬연구소 이야기</h2>
    <article>
      <ul>
        <li>
          <img src="" alt="">
          <p></p>
          <span></span>
        </li>
      </ul>
    </article>
    <p>더보기</p>
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
  <div>
    <div>
      <h5>커뮤니티</h5>
      <div>
        <p><a href="#" @click.prevent>공지사항</a></p>
        <p><a href="#" @click.prevent>이벤트</a></p>
        <p><a href="#" @click.prevent>자주묻는 질문</a></p>
        <p><a href="#" @click.prevent>1:1문의</a></p>
      </div>
      <ul>
        <li>카카오톡</li>
        <li>인스타</li>
        <li>페북</li>
      </ul>
    </div>
    <div>
      <h5>협력제안</h5>
      <p>집반찬연구소와 함께하고 싶으신 분!<br/><span>환영합니다</span></p>
      <span>생산자 / 공급업체 / 봉사단체 / 구직자</span>
      <p>zipbanchan@sannamchon.co.kr</p>
    </div>
    <div>
      <h5>고객센터</h5>
      <p>1588-3754</p>
      <p>
        <span>월~토요일 08:30 ~ 17:30</span>
        <span>점심시간 12:00 ~ 13:00</span>
        <span>일요일, 공휴일은 휴무입니다.</span>
      </p>
    </div>
  </div>
  <div class="w-full bg-[#f7f7f7]">
    <div class="max-w-7xl mx-auto text-xs py-[30px]">
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

export default {
  name: 'App',
  data() {
    return {
      addressOpen: false
    }
  },
  components: {
  }
}
</script>

<style>
</style>

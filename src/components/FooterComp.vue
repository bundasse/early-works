<template>
    <div>
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
                <li><img :src="require(`@/assets/icon/kakao.svg`)" alt=""></li>
                <li><img :src="require(`@/assets/icon/insta.svg`)" alt=""></li>
                <li><img :src="require(`@/assets/icon/facebook.svg`)" alt=""></li>
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
    </div>
</template>
<script>
export default {
    name:'FooterComp'
}
</script>
<style lang="css">
    
</style>
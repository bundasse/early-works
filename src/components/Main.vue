<template>
    <div class="relative">
        <img :src="require(`@/assets/main_bg.png`)" alt="메인배경" class="absolute top-0 w-full h-full lg:h-auto sm:h-2/4">
        <div class="max-w-6xl mx-auto px-[2%]">
            <div class="w-full flex justify-center items-center h-72 sm:h-96 sm:visible invisible">
                <!-- invisible : 영역은 차지하지만 보이지 않게됨 -->
                <div class="w-3/5 lg:w-2/4 relative">
                    <input type="text" placeholder="검색어를 입력해주세요" class="w-full border text-[#287bd1] placeholder:text-[#287bd1] border-[#287bd1] rounded-2xl p-3 text-sm font-bold inline-block outline-none">
                    <img :src="require(`@/assets/icon_search_blue.png`)" alt="검색" class="absolute top-3 right-3 w-6 m-0 ">
                </div>
            </div>
            <!-- 자주찾는 서비스 -->
            <!-- 아래 class: relative를 넣어줘야 얘가 앞으로 들어감 -->
            <div class="text-center font-bold relative text-2xl">
                <h3 class="font-extrabold">자주 찾는 서비스</h3>
                <div class="bg-white my-6 rounded-2xl border sm:shadow-md">
                    <ul class="flex flex-wrap justify-around my-5 transition-all duration-75">
                        <li v-for="(e,index) in Service" :key="e" class="py-4 text-center basis-1/4 lg:basis-auto">
                            <a href="#">
                                <img :src="require(`@/assets/fav_0${index+1}.png`)" :alt="e" :title="e" class="mx-auto">
                                <p class="text-xs sm:text-sm mt-4 font-normal">{{ e }}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- //자주찾는 서비스 -->
            <div class="w-full">
                <ul class="flex justify-between flex-wrap">
                    <li v-for="(e,index) in ServiceMenu" :key="e" class="h-32 basis-full mb-5 sm:mb-0 sm:basis-[32%] bg-white border rounded-2xl md:shadow-md relative">
                            <a href="#" class="flex items-center py-5 h-full">
                                <img :src="require(`@/assets/menu_0${index+1}.png`)" :alt="e" :title="e" class="mx-auto w-16">
                                <p class="text-base sm:text-xl mt-4 basis-8/12 font-normal">{{ e }}</p>
                            </a>
                        </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import ServiceData from '../assets/Data.json';
export default {
    name: "MainPage",
    data() {
        return {
            Service : ServiceData.Service,
            ServiceMenu : ServiceData.ServiceMenu
        }
    },
}
</script>
<style>

</style>
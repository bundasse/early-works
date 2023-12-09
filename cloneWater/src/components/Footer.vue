<template>
    <div class="max-w-6xl mx-auto px-[2%] py-5">
        <div class="flex flex-wrap items-center justify-between">
            <div class="basis-full md:basis-auto">
                <img :src="require(`@/assets/footer_logo.png`)" alt="로고" class="mx-auto">
            </div>
            <ul class="flex gap-x-5 mt-5 md:mt-0 justify-center basis-full md:basis-auto">
                <li v-for="e in FooterMenu" :key="e" class="text-xs sm:text-sm md:text-base"><a href="#" @click.prevent>{{ e }}</a></li>
            </ul>
            <ul class="flex text-xs sm:text-sm md:text-base flex-wrap basis-full justify-center text-gray-900 my-2">
                <li class="basis-full text-center md:basis-auto relative md:after:absolute after:w-0.5 after:h-3/5 after:bg-gray-400 after:-right-2 after:top-2/4 after:-translate-y-2/4 mr-2">(42423) 대구광역시 남구 명덕로54길 6-3 (이천동)</li>
                <li class="mr-2 md:ml-1 relative after:absolute after:w-0.5 after:h-3/5 after:bg-gray-400 after:-right-2 after:top-2/4 after:-translate-y-2/4 ">전화 053-670-2222</li>
                <li class="ml-1">팩스 053-670-2119</li>
            </ul>
            <p class="basis-full text-center text-xs sm:text-sm md:text-base text-gray-500">
                Copyright © Daegu Water. All Rights Reserved.
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:"FooterPage",
    data() {
        return {
            FooterMenu:["개인정보처리방침","법령정보","뷰어프로그램"]
        }
    },
}
</script>
<style>
    
</style>
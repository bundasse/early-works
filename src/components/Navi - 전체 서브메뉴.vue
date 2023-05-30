<template>
    <!-- 헤더 -->
    <div class="w-full border-b h-20">
        <div class="max-w-7xl mx-auto h-full flex items-center">
            <div class="w-64 md:ml-8 absolute lg:static left-2/4 -translate-x-2/4 lg:left-0 lg:translate-x-0 flex items-center">
                <img :src="require(`@/assets/logo_img.png`)" alt="로고" class="ml-1 w-full">
                <img :src="require(`@/assets/logo.png`)" alt="로고" class="ml-1 w-full">
            </div>
            <div class="ml-20">
                <ul class="hidden lg:flex lg:gap-x-12 xl:gap-x-20 font-bold text-lg flex-wrap justify-between" @mouseover="SubOn = true" @mouseout="SubOn = false">
                    <li v-for="(e,i) in NaviList" :key="e" class="hover:text-[#37a2d7] h-20 leading-[80px] transition-all relative
                    after:absolute after:transition-all after:w-full after:h-0 after:bg-[#37a2d7] after:left-0 after:bottom-0 hover:after:h-1 shrink-0" :class="i === NavSelectIndex && 
                    'after:h-1 text-[#37a2d7]'">
                        <a href="#">
                            {{ e }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="hidden sm:block lg:ml-20 w-6 h-6">
                <img :src="require(`@/assets/icon_lan.png`)" alt="언어변경" class="w-full">
            </div>
            <div class="w-6 h-6 -ml-10 sm:hidden">
                <img :src="require(`@/assets/icon_search.png`)" alt="검색" class="w-full">
            </div>
        </div>
        <!-- 서브메뉴 -->
        <div :class='SubOn && "h-96"' class="relative z-10 bg-white w-full h-0 transition-all duration-500 font-semibold rounded-br-3xl rounded-bl-3xl overflow-hidden mt-[1px]">
            <div class="flex lg:gap-x-10 justify-end mx-auto lg:pr-[5%] xl:pr-36 max-w-7xl" @mouseover="SubOn = true" @mouseleave="SubOn = false">
                <ul v-for="(e,i) in SubList" :key="e" class="pt-5" @mouseover="NavSelectIndex = i+1" @mouseout="NavSelectIndex = null">
                    <li v-for="(el) in e" :key="el" class="pt-2 hover:text-[#37a2d7]">
                        <a href="#">{{ el }}</a></li>
                </ul>
            </div>
        </div>
        <!-- //서브메뉴 -->
    </div>
    <!-- //헤더 -->
    <!-- 햄버거 메뉴 -->
    <div class="absolute right-4 md:right-8 top-6 duration-1000 transition-all z-50 cursor-pointer lg:hidden" @click="isOpen = !isOpen" :class="isOpen === true && 'on'">
        <div v-for="e in 3" :key="e" class="w-[30px] h-0.5 bg-black rounded m-1.5 transition-all duration-1000"></div>
    </div>
    <div class="w-80 h-full fixed bg-gray-50 z-40 p-12 box-border transition-all duration-500 top-0 lg:hidden overflow-y-scroll" :class="isOpen ? 'right-0':'-right-80'">
        <ul class="mt-12">
            <li class="py-5 border-b" v-for="(e,index) in NaviList" :key="e"><a href="#">{{ e }}</a>
                <div v-for="(e,i) in SubList" :key="e" >
                    <ul v-if="index === i+1" class="pt-5 flex flex-wrap justify-between">
                        <!-- ※v-for와 v-if는 함께 쓸 수 없다. v-for와 v-if를 같이 써야한다면 v-for는 템플릿에 걸어둘 것. -->
                        <li v-for="el in e" :key="el" class="basis-2/4 pt-2 text-xs hover:text-[#37a2d7]"><a href="#">{{ el }}</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <!-- //햄버거 메뉴 -->
</template>
<script>
import NaviData from '../assets/Data.json';
export default {
    name: "NaviPage",
    data() {
        return {
            SubOn : false,
            NaviList: NaviData.Navi,
            SubList: NaviData.SubMenu,
            NavSelectIndex : null,
            isOpen: false
        }
    },
}
</script>
<style>
    .on div:nth-child(1){transform: translateY(8px) rotate(45deg);}
    .on div:nth-child(2){opacity: 0; transform: translateX(-30px);}
    .on div:nth-child(3){transform: translateY(-8px) rotate(-45deg);}
</style>
<template>
    <div class="hidden xl:block w-full bg-[#6dd2cd] text-white text-xs font-bold Spoqa">
        <div class="max-w-7xl mx-auto relative py-3">
            <ul class="flex">
                <li class="px-3 py-1 bg-white text-[#6dd2cd] rounded-full">BIFAN</li>
                <li class="px-3 py-1 relative after:absolute after:w-0.5 after:h-0.5 after:rounded-full after:bg-white after:top-2.5 after:right-0">PRESS</li>
                <li class="px-3 py-1 relative after:absolute after:w-0.5 after:h-0.5 after:rounded-full after:bg-white after:top-2.5 after:right-0">VOLUNTEER</li>
                <li class="px-3 py-1 ">BADGE</li>
            </ul>
            <img :src="require(`@/assets/images/220711_BIFAN_Character.gif`)" alt="BIFAN 캐릭터" class="absolute right-0 -bottom-[7px]">
        </div>
    </div>
    <div class="hidden xl:block w-full h-[80px] bg-white pt-[12px]">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <!-- 로고 -->
            <img src="../assets/images/230329_BIFAN_logo_kr.gif" alt="부천국제판타스틱영화제" />
            <!-- 검색바 -->
            <div class="relative w-[368px]">
                <input type="text" placeholder="#이상해도괜찮아 #영화제목검색" class="w-full border-b-2 border-black p-1 placeholder:text-gray-500">
                <div class="absolute right-0 top-1"><img :src="require(`@/assets/images/search_btn_2022.png`)" alt="검색"></div>
            </div>
            <!-- 로컬 메뉴 -->
            <ul class="flex text-xs gap-x-5 font-bold items-center">
                <li><a href="#" class="text-center"><span class="w-5 h-5 block mx-auto mb-1"><img :src="require('@/assets/images/utility_user.png')" alt=""></span><span class="text-[6px]">JOIN</span></a></li>
                <li><a href="#" class="text-center"><span class="w-5 h-5 block mx-auto mb-1"><img :src="require('@/assets/images/utility_login.png')" alt=""></span><span class="text-[6px]">LOGIN</span></a></li>
                <li v-if="lang===1" @click="$emit('lang',0); SelectLang(0)"><a href="#" class="text-center"><span class="w-5 h-5 block mx-auto mb-1"><img :src="require('@/assets/images/utility_lang.png')" alt=""></span><span class="text-[6px]">KOR</span></a></li>
                <li v-else @click="$emit('lang',1); SelectLang(1)"><a href="#" class="text-center"><span class="w-5 h-5 block mx-auto mb-1"><img :src="require('@/assets/images/utility_lang.png')" alt=""></span><span class="text-[6px]">ENG</span></a></li>
            </ul>
        </div>
    </div>
    <!-- 내비게이션 -->
    <div class="hidden xl:block sticky top-0 w-full bg-black text-white pt-[12px] z-50">
        <ul class="max-w-7xl mx-auto flex justify-between">
            <li v-for="(e,i) in navContents.Navi" :key="e" @mouseover="NavSelectIndex = i; SubMenu(i)" @mouseout="NavSelectIndex = null" class="relative px-5 py-3 transition-all hover:bg-[#73c4bf]">
                <a href="#" class="text-lg">{{ e }}</a>
                <ul class="Spoqa absolute left-0 top-[52px] bg-[#73c4bf] w-[300px] sub_list overflow-hidden transition-all duration-500" style="height: 0px;" :style="NavSelectIndex === i && isSubMenu">
                    <li v-for="el in navContents.SubMenu[i]" :key="el" class="first-of-type:mt-4 h-[40px] ml-6 pl-2 mr-3 py-2 text-[15px] hover:bg-white hover:text-[#73c4bf]">
                    <a href="#">{{ el }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <!-- 모바일메뉴 -->
    <div :class="isOpen? 'fixed': 'hidden'" class="w-full h-full bg-black/50 z-40 xl:hidden">
    </div>
    <div class="block xl:hidden bg-white">
        <div class="flex justify-between w-full px-[30px] h-20 items-center">
            <button @click="isOpen = true" class="relative basis-8 h-8">
                <p class="absolute w-8 h-0.5 bg-black top-0"></p>
                <p class="absolute w-5 h-0.5 bg-black top-3"></p>
                <p class="absolute w-8 h-0.5 bg-black top-6"></p>
            </button>
            <!-- 로고 -->
            <img src="../assets/images/230329_BIFAN_logo_kr.gif" alt="부천국제판타스틱영화제" />
            <ul class="flex gap-x-2">
                <li v-if="lang===1" @click="$emit('lang',0); SelectLang(0)"><a href="#" class="text-center"><img :src="require('@/assets/images/t_utility_lang.png')" alt="언어설정" class="w-10"></a></li>
                <li v-else @click="$emit('lang',1); SelectLang(1)"><a href="#" class="text-center"><img :src="require('@/assets/images/t_utility_lang.png')" alt="언어설정" class="w-10"></a></li>
                <li><img :src="require(`@/assets/images/t_search_btn_2022.png`)" alt="검색" class="w-10"></li>
            </ul>
        </div>
    </div>
    <div :class="isOpen&& '!left-0'" class="w-96 fixed bg-white z-50 box-border Spoqa transition-all duration-500 top-0 -left-96 xl:hidden">
        <div class="w-full flex justify-between items-center border-b-2 px-5 py-9 pb-3">
            <button @click="isOpen=false" class="relative basis-8 h-8">
                <p class="absolute w-8 h-0.5 bg-black top-3 left-0 rotate-45"></p>
                <p class="absolute w-8 h-0.5 bg-black top-3 left-0 -rotate-45"></p>
            </button>
            <ul class="flex gap-x-4 items-center Spoqa">
                <li class="relative after:w-[1px] after:absolute after:h-4 after:bg-black after:top-1 after:-right-2">HOME</li>
                <li class="relative after:w-[1px] after:absolute after:h-4 after:bg-black after:top-1 after:-right-2">LOGIN</li>
                <li>JOIN</li>
            </ul>
        </div>
        <!-- 모바일 내비게이션 목록 -->
        <div class="border-b-2">
            <ul>
                <li v-for="(e,i) in navContents.Navi" :key="e" @click="mobileNav(i)" class="relative transition-all">
                    <a href="#" class="text-md px-5 py-3 block" :class="NavSelectIndex === i && 'bg-[#73c4bf] text-white'">{{ e }}<span class="absolute right-6" v-html="NavSelectIndex === i? '-':'+'"></span></a> 
                    <ul class="left-0 top-[52px] bg-gray-100 sub_list overflow-hidden transition-all duration-500 px-5" style="height: 0px;" :style="NavSelectIndex === i && isSubMenu">
                        <li v-for="el in navContents.SubMenu[i]" :key="el" class="h-[40px] py-2 text-[15px]">
                        <a href="#">{{ el }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="px-5">
            <ul class="flex gap-x-2 my-8">
                <li v-for="e in snsdata.SNS" :key="e">
                    <a :href="e.link"><img :src="require(`@/assets/images/${e.image}`)" :alt="e.title" :title="e.title"></a>
                </li>
            </ul>
            <ul class=" flex gap-x-7 mb-10 font-bold">
                <li class="relative after:absolute after:w-2 after:h-2 after:bg-gray-200 after:rounded-full after:-right-4 after:top-2.5">Badge</li>
                <li class="relative after:absolute after:w-2 after:h-2 after:bg-gray-200 after:rounded-full after:-right-4 after:top-2.5">Press</li>
                <li>Volunteer</li>
            </ul>
        </div>
    </div>

</template>
<script>
import Data from '../assets/Data.json'
export default {
    name : "NaviPage",
    data() {
        return {
            snsdata: Data[0],
            NavSelectIndex:null,
            subHeight: '0px',
            isOpen : true
        }
    },
    props:{
        navContents: Object,
        lang:Number
    },
    methods: {
        SubMenu(e){
                const list = document.querySelectorAll(".sub_list")[e];
                const length = list.querySelectorAll("li").length;
                this.isSubMenu = `height:${length*40+16}px`;

                if(list.style.height === '0px'){
                    list.style.height = `${length*40+16}px`;
                }else{
                    list.style.height = '0px';
                }
                this.subHeight = list.style.height;
        },
        SelectLang(e){
            localStorage.setItem("language",e);
        },
        mobileNav(i){
            if(this.NavSelectIndex === null){
                this.NavSelectIndex = i;
                this.SubMenu(i)
            }else{
                this.NavSelectIndex = null
            }
        }
    },    
}
</script>
<style>
    div.w-full{
        font-family: 'Cafe24Ohsquareair';
    }
    .Spoqa{
        font-family: 'SpoqaHanSansNeo-Regular';
    }
</style>
<template>
    <div class="w-full bg-[#222222] pt-[41px] pb-[45px] px-[2%] xl:px-0">
        <div class="max-w-7xl mx-auto text-[#ababab] flex">
            <div><img :src="require(`@/assets/images/f_logo.png`)" alt="로고"></div>
            <div class="text-[11px] xl:text-sm spoqa font-light ml-[45px]">
                <p v-if="lang != 1">
                    <span class="text-white after:inline-block after:w-0.5 after:h-2.5 after:bg-[#ababab] after:mx-2.5"><a href="#">이용약관</a></span>
                    <span class="text-[#61b3b0] after:inline-block after:w-0.5 after:h-2.5 after:bg-[#ababab] after:mx-2.5"><a href="#">개인정보취급방침</a></span>
                    <span class="text-white"><a href="#">이메일 무단수집거부</a></span>
                </p>
                <address class="mt-[5px] not-italic">
                    <span v-for="e in contents.footer" :key="e" class="after:inline-block after:w-0.5 after:h-2.5 after:bg-[#ababab] after:mx-2.5 last-of-type:after:hidden">{{ e }}</span>
                </address>
                <p class="mt-[6px]">Copyright © BIFAN All right Reserved.</p>
            </div>
        </div>
    </div>
    <div class="fixed right-8 bottom-10 z-20 cursor-pointer" @click="up()"><img :src="require(`@/assets/images/quick_btn_top.png`)" alt="상단이동" title="상단이동"></div>
</template>
<script>
  import data from '../assets/Data.json';
export default {
    name: "FooterPage",
    data() {
        return {
            data : data
        }
    },
    methods: {
        up(){
            window.scrollTo({top:0 , behavior:'smooth'})
        }
    },
    props:{
        contents:Object,
        lang:Number
    }
}
</script>
<style>
    .anemonesq{
    font-family: 'Cafe24Ohsquare';
}
    .anemoneair{
        font-family: 'Cafe24Ohsquareair';
    }
    .spoqa{
    font-family: 'SpoqaHanSansNeo-Regular';
    }
</style>
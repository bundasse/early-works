<template>    
    <div class="max-w-6xl mx-auto px-[2%] my-5 relative">
        <div class="border bg-white md:shadow-md rounded-2xl">
            <ul class="flex md:gap-x-10 p-5 py-0">
                <li class="basis-[20%] md:basis-[15%] text-xs sm:text-sm md:text-base py-5 text-center transition-all duration-500 rounded-br-2xl rounded-bl-2xl cursor-pointer" v-for="(e,index) in NoticeNav" :key="e" @click="TabSelectIndex = index" :class="TabSelectIndex === index && 'bg-[#0088cc] font-bold text-white'">
                    <a href="#" @click.prevent>{{ e }}</a>
                    <!-- @click.prevent 하면 a href="#"을 눌러도 위로 올라가는 걸 방지할 수 있음. -->
                </li>
            </ul>
            
            <div class="flex justify-between px-5 mt-4">
                <ul v-for="(e,index) in NoticeTabContent" :key="index" class="first-of-type:overflow-hidden first-of-type:mr-4 sm:mr-0 ">
                    <li v-for="(el, i) in e" :key="i" class="py-5 last-of-type:mb-3 text-xs sm:text-sm md:text-base">
                        <a href="#" @click.prevent class="flex flex-wrap items-center">
                            <img v-if="index === 0" :src="require(`@/assets/icon_water.png`)" alt="아이콘" class="h-full mr-3 sm:inline-block w-2 md:w-auto">
                            <span class="overflow-hidden text-ellipsis whitespace-nowrap">{{ el }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import NoticeData from '../assets/Data.json'
export default {
    name: "NoticePage",
    data() {
        return {
         NoticeNav: NoticeData.Notice.Nav,
         NoticeContent : NoticeData.Notice.Content,
         TabSelectIndex: 0   
        }
    },
    computed:{
        NoticeTabContent(){
            return this.NoticeContent[`Notice_${this.TabSelectIndex}`].filter(data=>data)
            // 오브젝트의 경우 배열로 이름을 출력할 수 있으므로 그걸 응용함!
        }
    }
}
</script>
<style>
    
</style>
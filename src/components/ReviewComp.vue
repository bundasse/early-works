<template>
    <ul class="flex flex-wrap justify-between gap-y-5">
        <li v-for="(e, i) in review" :key="i" class="basis-[48%]">
            <div class="flex">
                <img :src="require(`@/assets/images/`+e.img+`.jpg`)" alt="" class="block">
                <div class="basis-full flex flex-col gap-2 justify-center pl-5">
                    <p class="text-sm">{{ e.desc }}</p>
                    <p class="text-xs text-gray-600">{{ e.product }}</p>
                    <div class="text-xs text-gray-600 flex justify-between">
                        <p>{{ nameFilter(e.name) }} <span v-for="el in e.star" :key="el" class="text-black">★</span><span v-for="el in (5-e.star)" :key="el" class="text-black">☆</span></p>
                        <p>{{ e.date }}</p>
                    </div>
                </div>
          </div>
        </li>
    </ul>
</template>
<script>
import reviewdata from "@/assets/review.json"
export default {
    name:'ReviewComp',
    data() {
        return {
            review:reviewdata.review
        }
    },
    methods: {
        nameFilter(name){
            const front = name.substring(0, 1);
            const back = name.substring(2, 3);
            let filteredName = front + '*' + back;
            return filteredName 
        }
    },
}
</script>
<style lang="">
    
</style>
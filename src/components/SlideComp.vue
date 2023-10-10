<template>
    <swiper
        :slides-per-view="4"
        :space-between="20"
        :modules="modules"
        :navigation="true"
      >
        <swiper-slide  v-for="(e, i) in slideData" :key="i">
            <div class="relative">
                <img :src="require(`@/assets/images/`+e.img+`.jpg`)" alt="">
                <p v-if="e.sale !== 0" class="absolute w-[50px] h-[50px] bg-red-600 text-white top-4 left-4 z-5 py-3 text-center font-bold">{{ e.sale }}%</p>
                <p class="absolute w-[50px] h-[50px] bg-black opacity-50 bottom-4 right-4 z-5 p-[6px]"><img :src="require(`@/assets/icon/cart-white.svg`)" class="w-10" alt=""></p>
            </div>
            <div class="bg-white py-5">
                <ul class="flex gap-2">
                    <li v-for="(el, index) in e.tag" :key="index" class="text-xs" :class="el === '인기'? 'text-red-600': 'text-gray-600'">#{{ el }}</li>
                </ul>
                <p class="font-bold my-1">{{ e.name }}</p>
                <p class="text-xs text-gray-600 mb-2">{{ e.desc }}</p>
                <p class="text-red-600 font-bold text-lg">{{  salePrice(e.sale, e.price) }}<span clas="text-sm">원</span></p>
                <span v-if="e.sale !== 0" class="text-gray-400 text-xs line-through">{{e.price}}원</span>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
export default {
    name: 'SlideComp',
    components:{
        Swiper,
        SwiperSlide,
    },
    methods: {
        salePrice(sale, price){
            const cal =  Math.round((100-Number(sale))*Number(price)/10000)*100;
            return cal
        }
    },
    props:{
        slideData: Array
    },
    setup() {
      return {
        modules: [Navigation],
      };
  }
}
</script>
<style lang="css">
    
</style>
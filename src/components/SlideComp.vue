<template>
    <swiper
        :slides-per-view="4"
        :space-between="50"
        :modules="modules"
        :navigation="true"
      >
        <swiper-slide  v-for="(e, i) in slideData" :key="i">
            <img :src="require(`@/assets/images/`+e.img+`.jpg`)" alt="">
            <div class="bg-white py-5">
                <ul class="flex gap-2">
                    <li v-for="(el, index) in e.tag" :key="index" class="text-xs" :class="el === '인기'? 'text-red-600': 'text-gray-600'">#{{ el }}</li>
                </ul>
                <p class="font-bold my-1">{{ e.name }}</p>
                <p class="text-xs text-gray-600 mb-2">{{ e.desc }}</p>
                <p class="text-red-600 font-bold text-lg">{{  salePrice(e.sale, e.price) }}<span clas="text-sm">원</span></p>
                <span class="text-gray-600 strike" :v-html="e.sale !== 0 && e.sale"></span>
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
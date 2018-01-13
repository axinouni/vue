<template>
  <div class="banner">
    <div class="swiper-container" :options="swiperOption" ref="mySwiper">
      <swiper class="swiper-wrapper">
        <swiperSlide class="swiper-slide" v-for='(v, k) in fam' :key='k'>
          <img :src='v.img' alt="" :keys='k'>
        </swiperSlide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import { slideMock } from '../../mock/index.js'
// console.log(slideMock.banners)
import axios from 'axios'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      // banners: slideMock.banners, // 把mock赋值
      swiperOption: {
        notNextTick: true,
        autoplay: 1000,
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        observeParents: true,
        debugger: true
      },
      fam: []
    }
  },
  mounted () {
    this.swiper()
    axios.get('./slideMock').then((res) => {
      this.fam = res.data.banners
    })
  },
  methods: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  name: 'banner'
}
</script>
<style>
.banner img{
  width: 100%;
  height: 100%;
}
</style>

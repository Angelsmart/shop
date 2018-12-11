<template>
	<div class="swiper-container">
	    <swiper :options="swiperOption">
		    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
		    	<img :src="slide" alt="" />
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="swiper-button-prev"></div><!--左箭头-->
		<div class="swiper-button-next"></div><!--右箭头-->
	</div>
</template>

<script>
	export default{
		name:"mySwiper",
		props:['swiperSlides'],
		data(){
			return{
			  swiperOption: {
		          pagination: {
		            el: '.swiper-pagination',
		          },
		          autoplay:true,
		          navigation: {
				      nextEl: '.swiper-button-next',
				      prevEl: '.swiper-button-prev',
				    }
		       }
			}
		}
		
	}
</script>

<style scoped lang="scss">
	.swiper-container {
        width: 100%;
        img{
        	width: 100%;
        	height: 200px;
        }
    }
</style>
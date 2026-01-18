<template>
    <div class="hero-container">
        <swiper
        :modules = "modules"
        :slides-per-view="1"
        :loop="true"
        :pagination="{clickable: true}"
        :navigation="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false}"
        class="hero-swiper">
            <swiper-slide class="hero-slide" style="background-image: url('images/img_bg_1.jpg');">
                <div class="overlay"></div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 offset-sm-3 text-center slider-text">
                            <div class="slider-text-inner">
                                <div class="desc">
                                    <h1 class="head-1"> Legendary</h1>
                                    <h2 class="head-2">Dr. Martens</h2>
                                    <h2 class="head-3">Collection</h2>
                                    <p class="category"><span>Since 1947</span></p>
                                    <p><a href="#" class="btn btn-primary">Shop Collection</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide class="hero-slide" style="background-image: url('images/img_bg_2.jpg');">
                <div class="overlay"></div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 offset-sm-3 text-center slider-text">
                            <div class="slider-text-inner">
                                <div class="desc">
                                    <h1 class="head-1">Rebel</h1>
                                    <h2 class="head-2">Soles</h2>
                                    <h2 class="head-3">Sale</h2>
                                    <p class="category"><span>New Arrivals</span></p>
                                    <p><a href="#" class="btn btn-primary">Shop All</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';

    export default {
        name: 'HeroSlider',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                modules: [Autoplay, Pagination, Navigation]
            }
        }
        // ,
    	// mounted() {
      	// // code from main.js
      	// 	if (window.jQuery && window.jQuery().flexslider) {
      	// 		window.jQuery('.flexslider').flexslider({
        // 			animation: "fade",
        // 			slideshowSpeed: 5000,
        // 			animationSpeed: 600,
        // 			controlNav: true,
        // 			directionNav: true,
        // 			pauseOnHover: true

					
      	// 		});
    	// 	}
    	// }
    }
</script>
<style>
/* Задаємо висоту слайдера, інакше він буде схлопнутий */
.hero-swiper {
  width: 100%;
  height: 600px;
}

.hero-slide {
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center; 
  justify-content: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* darkest background */
  background: rgba(0, 0, 0, 0.3); 
  z-index: 1;
}

/* text upper of background */
.container-fluid {
  position: relative;
  z-index: 2;
}

.desc h1 {
    color: #fff;
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
}
.desc h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 20px;
}
.desc .category span {
    color: #FFDD00;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.swiper-button-next,
.swiper-button-prev {
  color: #ffffff !important; 
}
</style>
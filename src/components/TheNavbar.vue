<template>
    <nav class="colorlib-nav" role="navigation">
        <div class="top-menu">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7 col-md-9">
                        <div id="colorlib-logo">
                            <RouterLink to="/">The Doc Shop</RouterLink>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-3">
                        <form action="#" class="search-wrap">
                            <div class="form-group">
                                <input type="search" class="form-control search" placeholder="Search">
                                <button class="btn btn-primary submit-search text-center" type="submit">
                                    <i class="icon-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 text-left menu-1">
                        <ul>
                            <li><RouterLink to="/">Home</RouterLink></li>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li class="cart">
                                <RouterLink to="/cart">
                                    <i>Cart [{{ cartStore.items.length }}]</i>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="sale">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2 text-center">
                        <swiper
                        :modules="modules"
                        :slides-per-view="1"
                        :loop="true"
                        :autoplay="{ delay: 3000, disableOnInteraction: false }"
                        class="my-swiper"
                        >
                            <swiper-slide>
                                <h3><a href="#">Free Shipping on all orders over 100 euro!</a></h3>
                            </swiper-slide>
              
                            <swiper-slide>
                                <h3><a href="#">Summer Sale is ON! 50% OFF</a></h3>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import 'swiper/css';
    import 'swiper/css/effect-fade';
    import { mapStores } from 'pinia';
    import { useCartStore } from '@/stores/cartStore';
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Autoplay, EffectFade } from 'swiper/modules';

    export default {
        name: 'TheNavbar',
        components: {
            Swiper, SwiperSlide
        },
        data() {
            return {
                modules: [Autoplay, EffectFade]
            }
        },
        computed: {
            ...mapStores(useCartStore)
        }
    }
</script>
<style>
.sale {
    background-color: #000000 !important;
}
.my-swiper h3 a {
  color: #FFDD00 !important;
}
.search-wrap .submit-search {
  background-color: #FFDD00 !important;
  border-color: #FFDD00 !important;
  color: #000000 !important;
}
.search-wrap .submit-search:hover {
  background-color: #000000 !important;
}
.colorlib-nav .top-menu .menu-1 ul li.active a,
.colorlib-nav .top-menu .menu-1 ul li a.router-link-active {
  color: #000000 !important;
  position: relative;
  font-weight: bold !important;
}
.colorlib-nav .top-menu .menu-1 ul li a.router-link-active,
.colorlib-nav .top-menu .menu-1 ul li a.router-link-exact-active, 
.colorlib-nav .top-menu .menu-1 ul li a:hover {
  font-weight: bold !important;
}

.colorlib-nav .top-menu .menu-1 ul li a.router-link-active::after,
.colorlib-nav .top-menu .menu-1 ul li a.router-link-exact-active::after,
.colorlib-nav .top-menu .menu-1 ul li a:hover::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #ffcc00;
  animation: fadein 0.3s;
}
@keyframes fadein {
    from { opacity: 0; width: 0; margin: 0 auto;}
    to   { opacity: 1; width: 100%;}
}
</style>
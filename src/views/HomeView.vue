<template>
  <aside id="colorlib-hero">
			<div class="flexslider">
				<ul class="slides">
			   	<li style="background-image: url(images/img_bg_1.jpg);">
			   		<div class="overlay"></div>
			   		<div class="container-fluid">
			   			<div class="row">
				   			<div class="col-sm-6 offset-sm-3 text-center slider-text">
				   				<div class="slider-text-inner">
				   					<div class="desc">
					   					<h1 class="head-1">Legendary</h1>
					   					<h2 class="head-2">Dr. Martens</h2>
					   					<h2 class="head-3">Collection</h2>
					   					<p class="category"><span>Since 1947</span></p>
					   					<p><a href="#" class="btn btn-primary">Shop Collection</a></p>
				   					</div>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			   	<li style="background-image: url(images/img_bg_2.jpg);">
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
			   	</li>
			   	<!-- <li style="background-image: url(images/img_bg_3.jpg);">
			   		<div class="overlay"></div>
			   		<div class="container-fluid">
			   			<div class="row">
				   			<div class="col-sm-6 offset-sm-3 text-center slider-text">
				   				<div class="slider-text-inner">
				   					<div class="desc">
					   					<h1 class="head-1">New</h1>
					   					<h2 class="head-2">Arrival</h2>
					   					<h2 class="head-3">up to <strong class="font-weight-bold">30%</strong> off</h2>
					   					<p class="category"><span>New stylish shoes for men</span></p>
					   					<p><a href="#" class="btn btn-primary">Shop Collection</a></p>
				   					</div>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li> -->
			  	</ul>
		  	</div>
		</aside>
	<div class="colorlib-product">
    	<div class="container">
      		<div class="row">
        		<div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
          			<h2>Best Sellers</h2>
       			</div>
      		</div>
      
      		<div class="row row-pb-md">
        		<ProductCard v-for="product in products"
				:key="product.id"
				:id="product.id"
				:title="product.title"
				:price="product.price"
				:image="product.image"

				:productObj="product"  
        		@add-to-cart="addToCartParent">
				
				</ProductCard>
				<!-- :productObj="product"  put whole product in pocket -->
				<!-- @add-to-cart="addToCartParent" listener, call addToCartParent() -->
      		</div>
		</div>
	</div>

</template>

<script>
	import { mapStores } from 'pinia';
	import { useCartStore } from '@/stores/cartStore';
	import ProductCard from '@/components/ProductCard.vue';
	import productsData from '../products.json';

  	export default {
    	name: 'HomeView',
		components: {
			ProductCard
		},
		data() {
			return {
				products:  productsData,
			}
		},
		computed: {
			...mapStores(useCartStore)
		},
		methods: {
			addToCartParent(product) {
				console.log("Item moved succesfully");
				
				this.cartStore.addToCart(product);

				alert(`${product.title} added to cart!`);
			}
		},
    	mounted() {
      	// code from main.js
      		if (window.jQuery && window.jQuery().flexslider) {
      			window.jQuery('.flexslider').flexslider({
        			animation: "fade",
        			slideshowSpeed: 5000,
        			animationSpeed: 600,
        			controlNav: true,
        			directionNav: true,
        			pauseOnHover: true

					
      			});
    		}
    	}
    }

</script>
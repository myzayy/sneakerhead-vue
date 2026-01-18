<template>
  <HeroSlider />
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
	import HeroSlider from '@/components/HeroSlider.vue';

  	export default {
    	name: 'HomeView',
		components: {
			ProductCard,
			HeroSlider
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
		}
    }

</script>
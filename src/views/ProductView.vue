<template>
    <div class="colorlib-product">
        <div class="container">
            <div v-if="loading" class="row">
                <div class="col-sm-12 text-center">
                    <h3>Loading...</h3>
                </div>
            </div>
            <div class="row row-pb-lg product-detail-wrap" v-else-if="product">
                <div class="col-sm-8">
                    <div class="product-entry border">
                        <a href="#" class="prod-img">
                            <img :src="product.image" class="img-fluid" :alt="product.title">
                        </a>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="product-desc">
                        <h3>{{ product.title }}</h3>
                        <p class="price"><span>${{ product.price }}</span></p>
                        <p>{{ product.description }}</p>
                        <p>
                        <button @click="AddToCart" class="btn btn-primary btn-addtocart">
                            <i class="icon-shopping-cart"></i> Add to Cart
                        </button>
                        </p>
                    </div>
                </div>
            </div>
            <div v-else class="text-center">
                <h3>Item not found.</h3>
                <RouterLink to="/" class="btn btn-primary">Back</RouterLink>
            </div>
        </div>
    </div>
    <div class="colorlib-product">
    	<div class="container">
      		<div class="row">
        		<div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
          			<h2>Best Sellers</h2>
       			</div>
      		</div>
      
      		<div class="row row-pb-md">
        		<ProductCard v-for="item in products"
				:key="item.id"
				:id="item.id"
				:title="item.title"
				:price="item.price"
				:image="item.image"

				:productObj="item"  
        		@add-to-cart="addToCartParent">
				
				</ProductCard>
				<!-- :productObj="item"  put whole item in pocket -->
				<!-- @add-to-cart="addToCartParent" listener, call addToCartParent() -->
      		</div>
		</div>
	</div>
</template>

<script>
    import productsData from '../products.json';
    import { useCartStore } from '@/stores/cartStore';
    import { mapStores } from 'pinia';
    import ProductCard from '@/components/ProductCard.vue';

    export default {
        name: 'ProductView',
        
        components: {
            ProductCard
        },
        data() {
            return {
                product: null,
                loading: true,
                products: productsData
            }
        },
        
        computed: {
            // connect shop to component
            // ... unpack 
            ...mapStores(useCartStore)
        },

        mounted() {
            this.loadProduct();
        },
        
        methods: {
            AddToCart() {
                this.cartStore.addToCart(this.product);

                alert("Item added to cart!")
            },
            loadProduct() {
                this.loading = true;
                // scrolls user to page top when reddirect to other item
                window.scrollTo(0,0);

                setTimeout(() => {
                    // take id from link-addres
                    const id = this.$route.params.id;

                    // seek product from json by id
                    this.product = productsData.find(p => p.id == id);

                    this.loading = false;
                },  500);
            },
            addToCartParent(product) {
				console.log("Item moved succesfully");
				
				this.cartStore.addToCart(product);

				alert(`${product.title} added to cart!`);
			}
        },
        watch: { // watch needed to restart monted for new id
            '$route.params.id': function() {
                this.loadProduct();
            }
        }
    }
</script>
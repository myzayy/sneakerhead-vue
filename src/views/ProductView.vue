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
                        <p>Item description</p>
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
</template>

<script>
    import products from '../products.json';
    import { useCartStore } from '@/stores/cartStore';
    import { mapStores } from 'pinia';

    export default {
        name: 'ProductView',
        data() {
            return {
                product: null,
                loading: true
            }
        },
        
        computed: {
            // connect shop to component
            // ... unpack 
            ...mapStores(useCartStore)
        },

        mounted() {
            
            setTimeout(() => {
                // take id from link-addres
                const id = this.$route.params.id;

                // seek product from json by id
                this.product = products.find(p => p.id == id);

                this.loading = false;
            },  500);
            

            
        },
        
        methods: {
            AddToCart() {
                this.cartStore.addToCart(this.product);

                alert("Item added to cart!")
            }
        }
    }
</script>
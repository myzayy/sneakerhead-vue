<template>
    <div class="colorlib-product">
        <div class="container">
            <div class="row row-pb-lg product-detail-wrap" v-if="product">
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
                        <a href="#" class="btn btn-primary btn-addtocart">
                            <i class="icon-shopping-cart"></i> Add to Cart
                        </a>
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
    import products from '../products.json'
    export default {
        name: 'ProductView',
        data() {
            return {
                product: null
            }
        },
        mounted() {
            // take id from link-addres
            const id = this.$route.params.id;

            // seek product from json by id
            this.product = products.find(p => p.id == id);
        }
    }
</script>
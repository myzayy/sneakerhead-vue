<template>
    <div class="colorlib-product">
        <div class="container">
            
            <div class="row">
                <div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
                    <h2>{{ categoryName }}'s Collection</h2>
                </div>
            </div>

            <div class="row row-pb-md">
                <ProductCard 
                    v-for="product in filteredProducts"
                    :id="product.id"
                    :key="product.id"
                    :productObj="product" 
                    :title="product.title"
				    :price="product.price"
				    :image="product.image"
                    @add-to-cart="handleAddToCart"
                />
                
                <div v-if="filteredProducts.length === 0" class="col-12 text-center">
                    <p>No products found in {{ categoryName }}'s category.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductCard from '@/components/ProductCard.vue';
    import productsData from '@/products.json';
    import { useCartStore } from '@/stores/cartStore';
    import { mapStores } from 'pinia';

    export default {
        name: 'CategoryView',
        components: {
            ProductCard
        },
        data() {
            return {
                products: productsData
            }
        },
        computed: {
            
            ...mapStores(useCartStore),

            // router variable from url
            categoryName() {
                return this.$route.params.category;
            },
            // filtration
            filteredProducts() {
                return this.products.filter(product => product.category === this.categoryName);
            },
        },
        methods: {
            handleAddToCart(product) {
            	console.log("Item moved succesfully");

                this.cartStore.addToCart(product);
                alert(`${product.title} added to cart!`);
            }
        }   
    }
</script>
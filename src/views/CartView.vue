<template>
    <div class="colorlib-product">
        <div class="container">
            <div class="row row-pb-lg">
                <div class="col-md-10 offset-md-1">
                    <div class="process-wrap">
                        <div class="process text-center active">
                            <p><span>01</span></p>
                            <h3>Shopping Cart</h3>
                        </div>
                        <div class="process text-center">
                            <p><span>02</span></p>
                            <h3>Checkout</h3>
                        </div>
                        <div class="process text-center">
                            <p><span>02</span></p>
                            <h3>Order Complete</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-pb-lg">
                <div class="col-md-12">
                    <div class="product-name d-flex">
                        <div class="one-forth text-left px-4">
                            <span>Product Details</span>
                        </div>
                        <div class="one-eight text-center">
                            <span>Price</span>
                        </div>
                        <div class="one-eight text-center">
                            <span>Quantity</span>
                        </div>
                        <div class="one-eight text-center">
                            <span>Total</span>
                        </div>
                        <div class="one-eight text-center px-4">
                            <span>Remove</span>
                        </div>
                    </div>
                    <div v-for="(item, index) in cartStore.items" :key="index" class="product-cart d-flex">
                        <div class="one-forth">
                            <div class="product-img" :style="{ backgroundImage: 'url(' + item.image + ')' }">
                            </div>
                            <div class="display-tc">
                                <h3>{{ item.title }}</h3>
                            </div>
                        </div>
                        <div class="one-eight text-center">
                            <div class="display-tc">
                                <span class="price">
                                    {{ item.price }}
                                </span>
                            </div>

                        </div>
                        <div class="one-eight text-center">
                            <div class="display-tc">
                                <input type="text" class="form-control input-number text-center" value="1" readonly>
                            </div>
                        </div>
                        <div class="one-eight text-center">
                            <div class="display-tc">
                                <a href="#" class="closed" @click.prevent="removeFromCart(index)"></a>
                            </div>
                        </div>
                    </div>

                    <div v-if="cartStore.items.length === 0" class="text-center p-5">
                        <h3>Your cart is empty.</h3>
                        <RouterLink to="/" class="btn btn-primary">Go Shopping</RouterLink>
                    </div>
                </div>
                <div class="row row-pb-lg" v-if="cartStore.items.length > 0">
                    <div class="col-md-12">
                        <div class="total-wrap">
                            <div class="row">
                                <div class="col-sm-8"></div>
                                <div class="col-sm-4 text-center">
                                    <div class="total">
                                        <div class="sub">
                                        </div>
                                        <div class="grand-total">
                                            <p><span><strong>Total:</strong></span> <span>{{ totalPrice }}</span></p>
                                            
                                        </div>                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapStores } from 'pinia';
    import { useCartStore } from '@/stores/cartStore';
    
    export default {
        name: 'CartView',
        computed: {
            ...mapStores(useCartStore),
            totalPrice() {
                return this.cartStore.items.reduce((sum, item) => sum + item.price, 0);
            }
        },
        methods: {
            removeFromCart(index) {
                this.cartStore.removeFromCart(index)
            }
        }
    }
</script>
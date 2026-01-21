<template>

    <div class="colorlib-product">
        <div class="container">
      
            <CartProcess :step="2" />

            <div class="row">
                <div class="col-lg-8">
                    <form method="post" class="colorlib-form">
                        <h2>Billing Details</h2>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="country">Select Country</label>
                                    <div class="form-field">
                                        <i class="icon icon-arrow-down3"></i>
                                        <select name="people" id="people" class="form-control">
                                            <option value="#">Select country</option>
                                            <option value="#">Slovakia</option>
                                            <option value="#">Ukraine</option>
                                            <option value="#">USA</option>
                                            <option value="#">UK</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="fname">First Name</label>
                                    <input type="text" id="fname" class="form-control" placeholder="Your firstname">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="lname">Last Name</label>
                                    <input type="text" id="lname" class="form-control" placeholder="Your lastname">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" id="address" class="form-control" placeholder="Enter your address">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">E-mail Address</label>
                                    <input type="text" id="email" class="form-control" placeholder="State Province">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="Phone">Phone Number</label>
                                    <input type="text" id="zippostalcode" class="form-control" placeholder="">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="cart-detail">
                                <h2>Cart Total</h2>
                                <ul>
                                    <li>
                                        <span>Subtotal</span> 
                                        <span>€ {{ totalPrice }}</span>
                                    </li>
                                    <li>
                                        <span>Delivery</span> 
                                        <span>€ 0.00</span>
                                    </li>
                                    <li>
                                        <span><strong>Order Total</strong></span> 
                                        <span><strong>€ {{ totalPrice }}</strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    <div class="w-100"></div>

                    <div class="col-md-12">
                        <div class="cart-detail">
                            <h2>Payment Method</h2>
                            <div class="form-group">
                                <div class="col-md-12">
                                    <div class="radio">
                                        <label><input type="radio" name="optradio" checked> Direct Bank Tranfer</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12">
                                    <div class="radio">
                                        <label><input type="radio" name="optradio"> Check Payment</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                 <div class="col-md-12">
                                    <div class="checkbox">
                                        <label><input type="checkbox" value=""> I have read and accept the terms and conditions</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-12 text-center">
                        <button class="btn btn-primary" @click="placeOrder">Place an order</button>
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
    import CartProcess from '@/components/CartProcess.vue';

    export default {
        name: 'CheckoutView',
        components: {
            CartProcess
        },
        computed: {
            ...mapStores(useCartStore),
            totalPrice() {
                return this.cartStore.items.reduce((sum, item) => sum + item.price, 0)
            }
        },
        methods: {
            placeOrder() {
                if (this.cartStore.items.length === 0) {
                    alert("Your cart is empty!");
                    return;
                }

                alert("Order accepted! Thanks for your order.");

                this.cartStore.clearCart();

                this.$router.push('/order');
            }
        }
    }
</script>

<template>
    <div class="row row-pb-lg">
                <div class="col-md-10 offset-md-1">
                    <div class="process-wrap">
                        <div class="process text-center" :class="{active: step === 1}">
                            <p><span>01</span></p>
                            <h3>Shopping Cart</h3>
                        </div>
                        <div class="process text-center" :class="{active: step === 2}">
                            <p><span>02</span></p>
                            <h3>Checkout</h3>
                        </div>
                        <div class="process text-center" :class="{active: step === 3}">
                            <p><span>03</span></p>
                            <h3>Order Complete</h3>
                        </div>
                    </div>
                </div>
            </div>
</template>
<script>
    export default {
        name: 'CartProcess',
        props: {
            step: {
                type: Number,
                default: 1
            }
        }
    }
</script>
<style scoped>
    .process.active p{
    border-color: #FFDD00 !important;
    color: #000000 !important;
    font-weight: bold;
}
.process.active p span {
    color: #FFDD00   !important;
    font-weight: bold;
}
</style>
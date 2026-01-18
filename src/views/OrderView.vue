<template>
    <div class="colorlib-product">
        <div class="container">
            <CartProcess :step="3" />
        </div>
        <div class="text-center p-5">
            <h3>Your order was succesfully completed!</h3>
            <p></p>
            <RouterLink to="/" class="btn btn-primary">Go Shopping</RouterLink>
        </div>
    </div>
</template>
<script>
    import CartProcess from '@/components/CartProcess.vue';
    export default {
        components: {
            CartProcess
        },
    }
</script>
<style scoped>

</style>
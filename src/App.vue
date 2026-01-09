<template>
  <div class="colorlib-loader"></div>
  <div id="page">
      <TheNavbar />
      <RouterView />
      <TheFooter />
  </div>
  
</template>

<script>
  import TheFooter from './components/TheFooter.vue';
  import { RouterView } from 'vue-router';
  import TheNavbar from './components/TheNavbar.vue';

  export default {
    components: {
      TheNavbar,
      RouterView,
      TheFooter
    }
  }

</script>
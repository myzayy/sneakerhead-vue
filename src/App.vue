<template>
  <div class="colorlib-loader"></div>
  <div id="page">
      <TheNavbar />
      <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import TheNavbar from './components/TheNavbar.vue';

export default {
  components: {
    TheNavbar,
    RouterView
  }
}

</script>
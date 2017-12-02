<template>
  <div id="app">
    {{ number }}
    <button v-on:click="fetchNumber">Fetch number</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['number'])
    },
    methods: {
      ...mapActions(['fetchNumber'])
    }
  }
</script>
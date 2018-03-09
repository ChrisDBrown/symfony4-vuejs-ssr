<template>
    <div>
        {{ number }}
        <button v-on:click="fetchNumber">Fetch number</button>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        asyncData({store, route}) {
            if (!window.__INITIAL_STATE__) {
                store.dispatch('fetchNumber');
            }
        },
        name: "index",
        computed: {
            ...mapGetters(['number'])
        },
        methods: {
            ...mapActions(['fetchNumber'])
        }
    }
</script>

<style scoped>

</style>
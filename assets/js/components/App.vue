<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <router-view/>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'fetch-number' }">Fetch Number</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Welcome To My Site'
            }
        }
    }
</script>
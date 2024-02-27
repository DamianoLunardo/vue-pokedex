<script setup>
import { ref } from 'vue'




</script>

<template>

<div class="container">
    <img class="headerImg" src="../../public/header.png" />
</div>

</template>

<style lang="scss" scoped>
@use '../styles/global.scss';

.headerImg {
    width: 80%;
    
    object-fit: cover;
    padding: 20px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 60%;
    }
    
}

</style>

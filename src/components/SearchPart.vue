<script>
import Search from '../pages/Serach.vue'; 
import SavePoke from '../pages/SavePoke.vue';

export default {
    components: {
        Search,
        SavePoke,
    }
}
</script>

<template>

  <div class="row">
    <div class="col-6">
     <Search /> 
    </div>
    <div class="col-6">
    <SavePoke />  
    </div>
  </div>
  
    
</template>

<style lang="scss">
@use '../styles/global.scss'

</style>

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
  <div class="custom">
   <div class="row">
    <div class="col-6">
     <Search /> 
    </div>
    <div class="col-6">
    <SavePoke />  
    </div>
  </div> 
  </div>
  
  
    
</template>

<style lang="scss">
@use '../styles/global.scss';

.custom {
  border: solid rgb(167, 14, 14) 4px;
  border-radius: 15px;
  height: 100%;
  padding: 20px;
  background-color: rgb(167, 14, 14);
 }

</style>

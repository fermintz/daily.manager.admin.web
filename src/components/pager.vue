<template>
  <div class="pager">

    <v-btn icon class="arrow">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <div class="number">
      <v-btn 
        text 
        v-for="(item, index) in 5" 
        :key="index" 
        v-ripple
        :class="{active: active === index}"
        @click="active = index"
      >
        {{item}}
      </v-btn>
    </div>
    <v-btn icon class="arrow">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>

  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0,
    }
  },

}
</script>

<style lang="scss" scoped>

.pager{
  display:flex;
  align-items: center;
  justify-content: center;
  margin:40px 0;

  .v-btn{
    padding:0;
    width:26px;
    min-width:26px;
    height:26px;
  }

  .v-btn.arrow{
    .v-icon{font-size:20px;}
  }

  .number{
    margin:0 15px;
    .v-btn{
      border-radius:3px;
      margin:0 2px;
    }
    .v-btn.active{
      background:#D8E6EC;
    }
  }
  
}

</style>
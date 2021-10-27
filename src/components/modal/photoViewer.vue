<template>
  <v-dialog
    v-model="visible"
    width="auto"
  >
    <div class="photoViewer" >
      <div class="btns">
        <v-btn icon>
          <v-icon>mdi-download</v-icon>
        </v-btn>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <img src="https://source.unsplash.com/random" />
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
}
</script>

<style lang="scss" scoped>


.photoViewer{
  position: relative;
  height:700px;

  .btns{
    position: absolute;
    right:20px;
    top:20px;

    .v-btn{
      width:40px;
      height:40px;
      border-radius:20px;
      z-index:10;
      background:#fff;
      margin-left:15px;
    }
  }
  

  img{
    position: relative;
    display:block;
    height:100%;
    z-index:1;
  }  
}
</style>
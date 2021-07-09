<template>
  <v-dialog
    v-model="visible"
    width="900"
  >
    <div class="modal">
      <div class="modal-head">
        <h3>
          쿠폰발급하기
        </h3>

        <v-btn icon>
          <v-icon>mdi-close</v-icon>          
        </v-btn>
      </div>
      <div class="modal-cont">

      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:true
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  }
}
</script>
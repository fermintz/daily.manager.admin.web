<template>
  <v-dialog
    v-model="visible"
    width="360"
  >
    <div class="modal">
      <div class="modal-head">
        <h3>수거일 변경</h3>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="modal-cont">
        <v-date-picker 
          v-model="picker"
          locale="ko"
          :show-current="false"
        ></v-date-picker>
      </div>
      <div class="modal-footer">
        <v-btn text @click="visible = false">취소</v-btn>
        <v-btn text @click="visible = false">수정완료</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>

export default {

  data(){
    return{
      visible:false,
      picker:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOStrin,
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
.modal{
  .modal-cont{
    padding:0px;

    .v-picker{
      border-radius:0;
    }
  }
}
</style>
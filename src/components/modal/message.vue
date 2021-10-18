<template>
  <v-dialog
    v-model="visible"
    width="400"
  >
    <div class="modal">
      <div class="modal-head">
        <h3>{{title}}</h3>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="modal-cont">
        {{text}}
      </div>
      <div class="modal-footer">
        <v-btn text @click="visible = false">아니오</v-btn>
        <v-btn text @click="visible = false">네(확인)</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>

export default {
  props:['title','text'],
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

</style>
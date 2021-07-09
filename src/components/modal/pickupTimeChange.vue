<template>
  <v-dialog
    v-model="visible"
    width="360"
  >
    <div class="modal">
      <div class="modal-head">
        <h3>수거시간 변경</h3>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="modal-cont">
        <p>수거시간을 변경할 수 있습니다.</p>
        <ul class="select">
          <li 
            :class="{selectItem:true, active:selected === index}"
            v-for="(item, index) in pickupTime"
            :key="index"
            @click="selected = index"
          >
            <label>{{item.name}}</label> 
            <span>{{item.time}}</span>
          </li>
        </ul>
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
      selected:0,
      pickupTime:[
        {
          name:'오전',
          time:'08:00 ~ 12:00'
        },
        {
          name:'오후',
          time:'13:00 ~ 18:00'
        }
      ],
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
.select{
  .selectItem{
    border:1px solid #e2e2e2;
    border-radius:5px;
    margin-bottom:10px;
    padding:15px;

    label{
      font-size:16px;
      font-weight:bold;
      display:block;
    }
    span{
      display:block;
      color:#888;
    }
  }
  .selectItem:hover{
    cursor: pointer;
    background: #f8f8f8;
  }

  .selectItem.active{
    border-color:#d22828;
  }
  .selectItem:last-child{
    margin-bottom:0px;
  }
}
</style>
<template>
  <v-dialog
    v-model="visible"
    width="500"
  >
    <div class="modal calcModal">
      <div class="modal-head">
        <h3>정산하기</h3>
        <v-btn icon  @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="modal-cont">
        <dl>
          <dt>정산대상</dt>
          <dd>
            백양세탁소
          </dd>
        </dl>
        <dl>
          <dt>정산예정금액</dt>
          <dd>
            2,403,500 원
          </dd>
        </dl>
        <dl>
          <dt>정산금액확인</dt>
          <dd>
            <input type="text" value="0" placeholder="정산금액을 다시한번 입력해주세요">
          </dd>
        </dl>
        <dl class="memo">
          <dt>메모</dt>
          <dd>
            <textarea />
          </dd>
        </dl>

      </div>
      <div class="modal-footer">
        <v-btn text @click="visible = false">닫기</v-btn>
        <v-btn text @click="visible = false">정산완료하기</v-btn>
      </div>
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
.calcModal{
  .modal-cont{
    dl{
      display:flex;
      align-items: center;
      margin-bottom:15px;
      
      dt{
        width:140px;
        font-size:13px;
      }
      dd{
        flex:1;
        input{
          width:100%;
          height:36px;
          border:1px solid #c2c2c2;
          padding:0 10px;
        }
        textarea{
          border:1px solid #c2c2c2;
          min-height:100px;
          max-height:150px;
          width:100%;
          padding:10px;
        }
      }
    }

    dl:last-child{
      margin-bottom:0px;
    }
  }
}
</style>
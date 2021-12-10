<template>
  <v-dialog
    v-model="visible"
    width="auto"
  >
    <div class="modal">
      <div class="modal-head">
        <h3>기타상품 추가</h3>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="modal-cont">
     
        <dl class="name">
          <dt>상품명</dt>
          <dd><input type="text"></dd>
        </dl>

        <div class="bottom">
          <dl>
            <dt>소비자가</dt>
            <dd><input type="number"></dd>
          </dl>

          <dl>
            <dt>세탁가</dt>
            <dd><input type="number"></dd>
          </dl>

          <dl>
            <dt>수량</dt>
            <dd><input type="number"></dd>
          </dl>
        </div>
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
  data(){
    return{
      visible:true,
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  background:#fff;

  .modal-cont{

    dl{
      dt{
        font-size:12px;
        margin-bottom:5px;
      }
      dd{
        input{
          border:1px solid #d2d2d2;
          height:32px;
          border-radius:4px;
          padding:0 5px;
        }
      }
    }
    .name{
      dd{
        input{
          width:100%;
        }
      }
    }
    .bottom{
      display:flex;
      align-items: center;
      margin-top:30px;

      dl{
        flex:1;
        margin-right:15px;
      }
      dl:last-child{
        margin-right:0px;
      }
    }
  }
  
}
</style>
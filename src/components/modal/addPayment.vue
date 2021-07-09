<template>
  <v-dialog
    v-model="visible"
    width="560"
  >
    <div class="modal addPayment">

      <div class="modal-head">
        <h3>추가결제 요청</h3>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <div class="modal-cont">
        <dl class="priceIn">
          <dt>추가 요청금액 입력</dt>
          <dd>
            <input type="text">
          </dd>
        </dl>
        <dl class="textIn">
          <dt>추가안내사항</dt>
          <dd>
            <textarea placeholder="추가안내사항은 직접 입력할 수 있습니다"/>
          </dd>
        </dl>
        

        <dl class="photoUpload">
          <dt>사진등록</dt>
          <dd>
          <v-row>
            <v-col cols="3">
              <div class="img-box">
                <v-btn icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <img src="https://source.unsplash.com/random" />
              </div>
            </v-col>
            <v-col cols="3">
              <div class="img-box">
                <v-btn icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <img src="https://source.unsplash.com/random" />
              </div>
            </v-col>
            <v-col cols="3">
              <div class="img-box">
                <v-btn icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <img src="https://source.unsplash.com/random" />
              </div>
            </v-col>
            
            <v-col cols="3">
              <div class="img-btn" v-ripple>
                <v-icon>mdi-plus</v-icon>
              </div>
            </v-col>
          </v-row>
          </dd>
        </dl>
      </div>

      <div class="modal-footer">
        <v-btn text>취소</v-btn>
        <v-btn text class="finish">추가결제 요청하기</v-btn>
      </div>

    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
      selectActive:0,
      selectData:[
        {
          title:'세탁시도',
          description:'세탁 진행이전 세탁물의 상태보존 및 오염제거가 원할히 진행될 수 없다는 안내메시지가 전송됩니다. 해당 상품의 사진과 안내메시지를 작성해 주세요'
        },
        {
          title:'세탁불가',
          description:'세탁작업이 불가능한 상품에 대한 안내메시지가 전송됩니다. 해당상품의 환불처리 및 세탁이 불가능하다는 점을 사진과 함께 아래 안내메시지를 작성해 주세요'
        },
      ]
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
.addPayment{
  min-height:100%;
  background:#fff;

  .modal-cont{

    dl{
      margin-bottom:30px;

      dt{
        margin-bottom:10px;
        font-size:14px;
        font-weight:bold;
      }
    }

    .priceIn{
      position: relative;

      dd{
        display:flex;
        align-items: center;
        input{
          position: relative;
          width:100%;
          height:40px;
          border-bottom:1px solid #e2e2e2;
          outline: none;
        }
        input:focus{
          border-bottom:1px solid #008BE8;
        }
      }
     
      dd:after{
        content:'원';
        position:absolute;
        right:0px;
      }
    }

    .textIn{
      textarea{
        border:1px solid #e2e2e2;
        width:100%;
        padding:5px;
        min-height:120px;
        outline: none;;
      }
      textarea:focus{
        border:1px solid #008BE8
      }
    }

    .photoUpload{
      h4{
        font-size:16px;
        margin-bottom:15px;
      }

      .img-box{
        display:flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow:hidden;
        border-radius:5px;

        .v-btn{
          position:absolute;
          top:6px;
          right:6px;
          width:24px;
          height:24px;
          padding:0px;
          background:rgba(0,0,0,0.5);
          z-index:3;

          .v-icon{font-size:14px;color:#fff;}
        }

        img{
          position: absolute;
          width:150%;
        }
      }
      .img-box:after{
        content:'';
        display:block;
        padding-bottom:100%;
      }

      .img-btn{
        position: relative;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius:5px;
        border:1px solid #e2e2e2;

        .v-icon{font-size:32px;}
      }

      .img-btn:after{
        content:'';
        display:block;
        padding-bottom:100%;
      }
    }
  }
  
}
</style>
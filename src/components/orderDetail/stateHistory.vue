<template>
  <div class="stateHistory">
    <div class="left">
      <dl>
        <dt>주문상태</dt>
        <dd>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
          >
            <template v-slot:activator="{on,attrs}">
              <div
                class="state_btn"
                v-bind="attrs"
                v-on="on"
              >
                <label> {{nowState}} </label>
                <v-icon>{{menu ? 'mdi-arrow-up-drop-circle' : 'mdi-arrow-down-drop-circle'}}</v-icon>
              </div>
            </template>
            <div class="select-list">
              <ul>
                <li 
                  v-for="item in stateText" 
                  :key="item"
                  v-ripple
                  @click="stateHandle(item)"
                >
                  {{item}}
                </li>
              </ul>
            </div>
          </v-menu>          
        </dd>
      </dl>
      
    </div>
    <div class="right">
      <dl>
        <dt>주문일시</dt>
        <dd>2021.05.14 13:45:56</dd>
      </dl>
      <dl>
        <dt>주문번호</dt>
        <dd>175691989</dd>
      </dl>
      <dl>
        <dt>배송담당자</dt>
        <dd>박수민</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu:false,
      nowState: '주문예약',
      stateBox:false,
      stateText: [
        "주문예약",
        "수거대기",
        "세탁입고",
        "검수대기",
        "세탁대기",
        "결제대기",
        "세탁중",
        "출고대기",
        "세탁출고",
        "배송대기",
        "배송완료",
        "환불완료",
        "주문취소",
      ],
    };
  },

  methods:{
    stateHandle(item){
      this.nowState = item;
      this.menu = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.stateHistory {
  display:flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom:15px;

  .left{
    position: relative;

    dl{
      display:flex;
      align-items: center;
      dt{
        display:flex;
        align-items: center;
        font-size:12px;
        border:2px solid #2C9CD4;
        color:#2C9CD4;
        margin-right:20px;
        padding:0 5px;
        height:24px;
        font-family:'SCDream';
        border-radius:4px;
      }
      dd{
        position: relative;

        .state_btn{
          display:flex;
          width:160px;
          height:40px;
          align-items: center;
          justify-content: space-between;
          border-bottom:1px solid #292929;
          padding:0px;
          
          label{
            font-size:16px;
            font-family:'SCDream';
          }
          .v-icon{
            font-size:18px;
            color:#a2a2a2;
          }
        }
      }
    }
   
  }
  .right{
    display:flex;
    align-items: center;

    dl{
      display:flex;
      align-items: center;
      font-size:12px;
      dt{
        display:Flex;
        align-items: center;
        font-size:11px;
        line-height:11px;
        margin-right:10px;
        background:#e2e2e2;
        padding:3px 5px;
        border-radius:5px;
        color:#595959;
      }
      dd{
        font-size:14px;
      }
    }
    dl:after{
      content:'';
      width:1px;
      background:#c2c2c2;
      height:14px;
      margin:0 12px;;
    }
    dl:last-child:after{
      display:none;
    }
  }  
}

.select-list{
  width:160px;
  background:#fff;
  border:1px solid #e2e2e2;
  z-index:2;
  ul{
    li{
      display:Flex;
      align-items: center;;
      width:100%;
      height:40px;
      padding:0 15px;
      border-bottom:1px solid #e2e2e2;
    }
    li:hover{
      cursor: pointer;
      background:#f8f8f8;
    }
  }
}

</style>

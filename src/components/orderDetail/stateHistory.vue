<template>
  <div class="stateHistory">
    <div class="left">
      <label>주문상태</label>
      <span>배송중</span>
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
  align-items: center;
  justify-content: space-between;
  margin-bottom:15px;
  border:1px solid #e2e2e2;
  padding:15px;
  background:#fff;

  .left{
    display:flex;
    align-items: center;
    position: relative;

    label{
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
    
    span{
      display:flex;
      justify-content: center;
      align-items: center;
      font-size:18px;
      color:#292929;
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

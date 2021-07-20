<template>
  <dl class="keySelect">
    <dt>주문상태</dt>
    <dd>
      <div class="selectBox">
        <select>
          <option v-for="item in options" :key="item">{{item}}</option>
        </select>
        <span>
          ▼
        </span>
      </div>
    </dd>
  </dl>
</template>

<script>
export default {
  data(){
    return{
      options:[
        '전체','주문예약','수거대기','세탁입고','검수대기','세탁대기','결제대기','세탁중','출고대기','세탁출고','배송대기','배송완료','환불완료','주문취소'
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.keySelect{
  .selectBox{
    position: relative;
    display:flex;
    align-items: center;

    span{ 
      display:flex;
      justify-content: center;
      align-items: center;
      width:32px;
      height:32px;
      border-left:1px solid #e2e2e2;
      position: absolute;
      right:0px;
      background:#fff;
      font-size:9px;
    }

    select{
      position: relative;
      width:240px;
      height:32px;
      border:1px solid #e2e2e2;
      padding:0 5px;
      z-index:1;
      outline: none;;
    }

    select:hover{
      border-color:#292929;
      cursor: pointer;
    }
  }
}
</style>
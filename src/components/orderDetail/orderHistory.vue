<template>
  <div class="orderHistory">
    <div class="item head">
      <span class="num">번호</span>
      <span class="date">날짜</span>
      <span class="state">주문상태</span>
      <span class="name">사용자</span>
    </div>

    <ul>
      <li v-for="item in 10" :key="item" class="item cont">
        <span class="num">{{item}}</span>
        <span class="date">2022년 1월 4일 13:45:12</span>
        <span class="state">수거시작</span>
        <span class="name">금승록</span>
      </li>
    </ul>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.orderHistory{
  .item{
    display:flex;
    margin-bottom:10px;
    padding:10px;
    span{
      margin-right:20px;
      &:last-child{
        margin-right:0;
      }
    }
    .num{
      text-align:center;
      width:60px;
    }
    .date{
      width:200px;
    }
    .state{
      flex:2;
    }
    .name{
      text-align:center;
      width:100px;
    }
  }
  .item.head{
    background:#f2f2f2;
  }
  .item.cont{
    border:1px solid #e2e2e2;
  }
}
</style>
<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/img/logo.png">
      <span>데일리세탁</span>
    </div>
    <div class="gnb">
      <v-btn text>로그아웃</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.header{
  position: sticky;
  top:0px;
  z-index:2;
  border-bottom:1px solid #c2c2c2;
  height:50px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  background:#fff;
  z-index:10;

  .logo{
    width:200px;
    display:flex;
    justify-content: center;
    align-items: center;

    span{
      font-family:'SCDream';
      font-weight:500;
      margin-left:5px;
      font-size:18px;
    }
    img{
      display:block;
      height:26px;
    }
  }

  .gnb{
    margin-right:15px;
  }
}

</style>
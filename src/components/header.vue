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

    .v-btn{
      font-size:12px;
      background:#f2f2f2;
      border-radius:15px;
      height:30px;
    }
  }
}

.header::after{
  content:'';
  position:absolute;
  bottom:0px;
  width:100%;
  height:1px;
  background: rgb(0,160,241);
  background: linear-gradient(100deg, rgba(0,160,241,1) 0%, rgba(0,43,91,1) 100%);
}

</style>
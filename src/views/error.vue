<template>
<v-app>
  <div class="error_404">
    <div class="inner">
      <h2><span>404</span> ERROR</h2>
      <p class="text-1">페이지를 찾을 수 없습니다.</p>
      <p class="text-2">페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다.</p>

      <v-btn text>메인으로 돌아가기</v-btn>
    </div>

    <div class="logo">
      <img src="@/assets/img/logo.png">
      <h4>데일리세탁</h4>
    </div>
  </div>
</v-app>
</template>

<style lang="scss" scoped>
.error_404{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
  padding:15px;

  .logo{
    position:absolute;
    bottom:50px;
    display:flex;
    align-content: center;
    margin-top:70px;
    img{height:24px;}
    h4{
      font-size:18px;
      margin-left:10px;
    }
  }

  .inner{
    width:100%;
    max-width:1280px;
    padding:100px;
    box-shadow: 25px 25px 50px rgba(0,0,0,0.1);
    border-radius:0px 30px 0 30px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
      font-size:150px;
      font-family:'Roboto';
      font-weight:800;
      color:#aaa;
      line-height:1.2;

      span{
        color:#2C9CD4
      }
    }

    p{
      padding:0px;
      margin:0px;
      text-align:center;
    }

    p.text-1{
      font-size:2vw;
    }

    p.text-2{
      font-size:1vw;
      margin-top:10px;
      color:#888;
    }

    .v-btn{
      height:50px;
      background:#292929;
      color:#fff;
      border-radius:5px;
      margin-top:50px;
      font-size:13px;
      font-weight:normal;
    }
  }
}


@media screen and(max-width:720px){
  .error_404{
    padding:50px;
    .inner{
      padding:0;
      box-shadow: none;
      h2{
        text-align:Center;
        font-size:20vw;
        line-height:1;
        margin-bottom:30px;
      }

      p.text-1{
        font-size:18px;
      }
      p.text-2{
        font-size:14px;
      }

      .v-btn{
        font-size:12px;
      }
    }
  }
}

</style>
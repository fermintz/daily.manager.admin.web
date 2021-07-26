<template>
  <v-app>
    <div class="login_wrap">
      <div class="login_form">
        <div class="logo">
          <img src="@/assets/img/logo.png">
          <label>데일리세탁 파트너 관리자모드</label>
        </div>
        <v-text-field 
          outlined
          placeholder="아이디"
        />
        <v-text-field
          outlined
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          placeholder="비밀번호"
          @click:append="show = !show"
        />
        <v-btn text class="login_btn" @click="$router.push('/')">로그인</v-btn>

        <v-btn text class="password_find_btn">비밀번호 찾기</v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      show:false
    }
  }
};
</script>

<style lang="scss" scoped>
.login_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgb(0,160,241);
  background: linear-gradient(100deg, rgba(0,160,241,1) 0%, rgba(0,106,223,1) 100%);

  .login_form {
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:380px;
    padding:30px;
    border-radius:15px;
    border:1px solid #e2e2e2;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.15);
    background:#fff;

    .logo{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom:40px;

      img{
        display:block;
        width:60px;
      }
      label{
        font-family:'SCDream';
        font-size:14px;
        margin-top:20px;
        color:#595959;
      }
    }

   .v-btn.login_btn {
      width: 100%;
      color:#fff;
      height: 50px;
      border-radius: 4px;
      background: rgb(0,160,241);
      background: linear-gradient(100deg, rgba(0,160,241,1) 0%, rgba(0,106,223,1) 100%);
    }

    .password_find_btn{
      width:100px;
      font-size:12px;
      align-self: center;
      margin-top:20px;
      border-radius:4px;
      color:#888;
    }
    
  }
}
</style>

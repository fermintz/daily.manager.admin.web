<template>
  <div class="box partnerAccount">
    <div class="box-head">
      <h4>파트너 계정</h4>
    </div>
    <div class="box-content">
      <dl>
        <dt>아이디</dt>
        <dd>
          <input type="text">
        </dd>
      </dl>
      <dl>
        <dt>비밀번호</dt>
        <dd>
          <input type="text">
          <span>영문, 숫자 조합 10자리</span>
        </dd>
      </dl>
      <dl>
        <dt>비밀번호 확인</dt>
        <dd>
          <input type="text">
          <span>비밀번호를 다시 한번 확인해주세요</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.partnerAccount{
  dl{
    display:flex;
    margin-bottom:10px;

    dt{
      width:150px;
    }
    dd{
      display: flex;
      align-items: center;
      flex:1;

      input{
        width:200px;
        height:32px;
        border:1px solid #e2e2e2;
        padding:0 10px;
      }
      span{
        margin-left:10px;
        font-size:12px;
        color:#888;
      }
    }
  }
}

</style>
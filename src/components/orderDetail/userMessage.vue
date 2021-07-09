<template>
  <div class="box user-message">
    <div class="box-head">
      <h4>고객 요청사항</h4>
    </div>
    <div class="box-content">
      <dl>
        <dt>배송기사에게 요청</dt>
        <dd>
          등록된 메세지가 없습니다.
        </dd>
      </dl>
      <dl>
        <dt>세탁에 관한 요청</dt>
        <dd>
          등록된 메세지가 없습니다.
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.box-content{
  display:flex;
  dl{
    margin-right:20px;
    flex:1;
    
    dt{}
    dd{
      margin-top:10px;
      width:100%;
      border:1px solid #e2e2e2;
      height:80px;
      resize: none;
      border-radius:5px;
      padding:10px;
      background:#FCFCF5;
      color:#888;
    }
  }

  dl:last-child{
    margin-right:0px;
  }
}

</style>
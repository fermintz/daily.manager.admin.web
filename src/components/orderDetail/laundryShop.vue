<template>
  <div class="box delivery-man">
    <div class="box-head">
      <h4>담당세탁소</h4>
    </div>
    <div class="box-content">
      <div class="shop-info">
        <dl class="name">
          <dt>업체명</dt>
          <dd>성경세탁소</dd>
        </dl>
        <dl class="phone">
          <dt>연락처</dt>
          <dd>010-8525-4561</dd>
        </dl>
        <dl class="address">
          <dt>주소</dt>
          <dd>부산시 북구 구남언덕로 15 1층</dd>
        </dl>
        <dl class="offDay">
          <dt>휴무요일</dt>
          <dd>매 주 화요일</dd>
        </dl>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.delivery-man{
  .shop-info{
    dl{
      display:flex;
      margin-bottom:8px;

      dt{
        width:70px;
        color:#888;
        font-size:12px;
      }
      dd{
        flex:1;
      }
    }
    dl.name{
      dd{
        text-decoration: underline;
      }
      dd:hover{
        cursor: pointer;
        color:#2C9CD4;
      }
    }
    dl:last-child{
      margin-bottom:0px;
    }
  }
}
</style>
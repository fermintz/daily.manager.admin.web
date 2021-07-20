<template>
  <div class="user_summary box">
    <v-row>
      <v-col cols="2">
        <dl>
          <dt>회원등급</dt>
          <dd>
            <strong>극소노</strong>
          </dd>
        </dl>
      </v-col>
      <v-col cols="2">
        <dl>
          <dt>총 주문금액</dt>
          <dd>
            <strong>134,500</strong>
            <span>원</span>
          </dd>
        </dl>
      </v-col>
      <v-col cols="2">
        <dl>
          <dt>총 주문건수</dt>
          <dd>
            <strong>4</strong>
            <span>건</span>
          </dd>
        </dl>
      </v-col>
      <v-col cols="2">
        <dl>
          <dt>등록된 쿠폰</dt>
          <dd>
            <strong>3</strong> 
            <span>장</span>
          </dd>
        </dl>
      </v-col>
    </v-row>
  </div> <!-- user_summary -->
</template>

<style lang="scss" scoped>
.user_summary{
  padding:20px;
   
  dl{
    display:flex;
    flex-direction: column;
    border-right:1px solid #e2e2e2;
    justify-content: center;
    margin-top:0;

    dt{
      color:#888;
    }
    dd{
      strong{
        font-size:24px;
      }
      span{
        margin-left:5px;
      }
    }
  }
  .col:last-child{
    dl{
      border-right:0;
    }
  }
}
</style>
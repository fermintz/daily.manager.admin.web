<template>
  <div class="box sales_summary">
    <v-row>
      <v-col cols="2">
        <dl>
          <dt>이번달 총 매출건수</dt>
          <dd>
            <strong>134</strong>
            <span>건</span>
          </dd>
        </dl>
      </v-col>
      <v-col cols="2">
        <dl>
          <dt>이번달 총 매출</dt>
          <dd>
            <strong>2,314,000</strong>
            <span>원</span>
          </dd>
        </dl>
      </v-col>
      <v-col cols="2">
        <dl>
          <dt>전일 매출건수</dt>
          <dd>
            <strong>12</strong>
            <span>건</span>
          </dd>
        </dl>
      </v-col>
      <v-col cols="2">
        <dl>
          <dt>전일 매출금액</dt>
          <dd>
            <strong>215,000</strong>
            <span>원</span>
          </dd>
        </dl>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.sales_summary{
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
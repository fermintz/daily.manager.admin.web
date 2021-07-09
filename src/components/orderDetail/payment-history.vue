<template>
  <div class="box-content payment-history">
    <ul>
      <li class="payment-item">
        <div class="top">
          <span class="name">선결제</span>
          <span class="price">30,000 원</span>
        </div>
        <div class="divider" />
        <div class="date">2021.05.03 12:34:12</div>
        <div class="card">신한카드(0804)</div>
      </li>
      <li class="payment-item">
        <div class="top">
          <span class="name">추가결제</span>
          <span class="price">4,500 원</span>
        </div>
        <div class="divider" />
        <div class="date">2021.05.05 18:46:10</div>
        <div class="card">신한카드(0804)</div>
      </li>
    </ul>

    <div class="bill">
      <dl class="coupon">
        <dt>쿠폰할인</dt>
        <dd>-5000 원</dd>
      </dl>
      <dl class="coupon">
        <dt>배송비</dt>
        <dd>0 원</dd>
      </dl>
      <div class="divider" />
      <dl class="total">
        <dt>합계</dt>
        <dd>29,500 원</dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.payment-history{
  .divider{
    height:1px;
    background:#e2e2e2;
    margin:15px 0;
  }
  .payment-item{
    background:#f8f8f8;
    padding:15px;
    border-radius:5px;
    margin-bottom:10px;

    .top{
      display:flex;
      justify-content: space-between;

      span.price{
        font-weight:500;
      }
    }
    .divider{
      margin:10px 0;
    }

    .date{font-size:12px;color:#888;}
  }

  .payment-item:last-child{
    margin-bottom:0;
  }

  .bill{
    margin-top:20px;
    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:5px;
      dt{
        font-size:12px;
      }
    }
    dl.total{
      dd{
        font-size:18px;
        font-weight:500;
      }
    }
    dl:last-child{
      margin-bottom:0px;
    }
  }
}
</style>
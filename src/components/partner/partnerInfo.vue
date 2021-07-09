<template>
  <div class="box partnerInfo">
    <div class="box-head">
      <h4>파트너 정보입력</h4>
    </div>
    <div class="box-content">
      <dl class="shopName">
        <dt>상점명</dt>
        <dd>
          <input type="text">
        </dd>
      </dl>
      <dl class="name">
        <dt>대표자명</dt>
        <dd>
          <input type="text">
        </dd>
      </dl>
      <dl class="phone">
        <dt>연락처</dt>
        <dd>
          <input type="text">
          <input type="text">
          <input type="text">
        </dd>
      </dl>
      <dl class="email">
        <dt>이메일</dt>
        <dd>
          <input type="text">
          <span>@</span>
          <input type="text">
        </dd>
      </dl>
      <div class="divider" />
      <dl class="business_number">
        <dt>사업자번호</dt>
        <dd>
          <input type="text">
        </dd>
      </dl>
      <dl class="address">
        <dt>사업장주소</dt>
        <dd>
          <input type="text">
          <v-btn text>검색</v-btn>
        </dd>
      </dl>
      
      <div class="divider" />
      <dl class="closeDay">
        <dt>휴무요일 선택</dt>
        <dd>
          <v-btn 
            text
            v-for="(item, index) in closeDay" 
            :key="index"
            :class="{active:item.active}"
            @click="setCloseDay(!item.active ,index)"
          >
            {{item.day}}
          </v-btn>
        </dd>
      </dl>
      <dl class="shop_notice">
        <dt>운영안내</dt>
        <dd>
          <textarea />
        </dd>
      </dl>
      <div class="divider" />
      <dl class="account">
        <dt>정산계좌정보</dt>
        <dd>
          <input type="text" placeholder="예금주명">
          <div class="bottom">
            <input type="text" placeholder="은행명">
            <input type="text" placeholder="계좌번호 입력" class="account_number">
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      closeDay:[
        {
          day:'월요일',
          active:false,
        },
        {
          day:'화요일',
          active:false,
        },
        {
          day:'수요일',
          active:false,
        },
        {
          day:'목요일',
          active:false,
        },
        {
          day:'금요일',
          active:false,
        },
        {
          day:'토요일',
          active:false,
        },
        {
          day:'일요일',
          active:false,
        }
      ],
    }
  },
  methods:{
    setCloseDay(value ,index){
      const days = this.closeDay;
      days[index].active = value
      return days
    }
  },
}
</script>

<style lang="scss" scoped>

.partnerInfo{

  .divider{
    height:1px;
    background: #e2e2e2;
    margin:20px 0;
  }
  dl{
    display:Flex;
    align-items: center;
    margin-bottom:15px;

    dt{
      width:150px;
    }
    dd{
      flex:1;
      display:flex;
      align-items: center;

      input{
        width:200px;
        min-height:32px;
        border:1px solid #e2e2e2;
        padding:0 10px;
      }
      span{
        display:block;
        margin:0 10px;
      }
    }
  }

    dl.phone{
      dd{
        input{
          width:100px;
          margin-right:10px;
        }
      }
    }

    dl.address{
      dd{
        input{
          width:400px;
        }
        .v-btn{
          height:32px;
          margin-left:10px;
          border:1px solid #c2c2c2;
        }
      }
      
    }

    dl.email{
      dd{
        input{
          width:150px;
        }
      }
    }

    dl:last-child{
      margin-bottom:0px;
    }

    dl.shop_notice{
      textarea{
        width:100%;
        border:1px solid #e2e2e2;
        min-height:100px;
        padding:10px;
      }
    }

    dl.closeDay{
      dd{
        border:1px solid #e2e2e2;
        
        .v-btn{
          position:relative;
          flex:1;
          font-size:12px;
          border-right:1px solid #e2e2e2;
          z-index:1;
        }
        .v-btn.active{
          color:#2C9CD4;
          position: relative;
          z-index:1;
        }
        .v-btn.active:after{
          content:'';
          position:absolute;
          left:0;
          top:0;
          width:100%;
          height:100%;
          border:1px solid #2C9CD4;
          z-index:3;
        }
        .v-btn:last-child{
          border-right:0px;
        }
      }
    }

    dl.account{
      dd{
        flex-direction: column;
        align-items: flex-start;

        select{
          width:200px;
          height:32px;
          border:1px solid #e2e2e2;
          padding:0 10px;
          margin-bottom:10px;
        }
        .bottom{
          display:flex;
          align-items: center;
          width:100%;
          margin-top:10px;

          input{
            width:200px;
            margin-right:10px;
          }
          input.account_number{
            width:400px;
          }
          
        }
      }
    }
}

</style>
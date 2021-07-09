<template>
  <div class="box user-info">
    <div class="box-head">
      <h4>고객주문정보</h4>
    </div>
    <div class="box-content">
      <div class="top">
        <dl class="pickupDate link">
          <dt>수거일</dt>
          <dd>
            <span>21.02.04 (수)</span>
            <v-btn text @click="$refs.pickupDateChange.handle(true)">
              변경
            </v-btn>
          </dd>
        </dl>
        <div class="divider-v" />
        <dl class="pickupTime link">
          <dt>수거시간</dt>
          <dd>
            <span>오전(08:00~12:00)</span>
            <v-btn text @click="$refs.pickupTimeChange.handle(true)">
              변경
            </v-btn>
          </dd>
        </dl>
        <div class="divider-v" />
        <dl class="userName link">
          <dt>주문자</dt>
          <dd>
            <span @click="$router.push('memberDetail')">박수민</span>
          </dd>
        </dl>
        <div class="divider-v" />
        <dl class="userPhone">
          <dt>전화번호</dt>
          <dd>
            <span>010-8525-4561</span>
          </dd>
        </dl>
      </div>
      <div class="divider" />
      <div class="bottom">
        <dl>
          <dt>주소</dt>
          <dd>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</dd>
        </dl>
        <dl>
          <dt>출입문정보</dt>
          <dd>#1234 누루고 종을 눌러주세요</dd>
        </dl>
      </div>
    </div>

    <PickupDateChange ref="pickupDateChange"/>
    <PickupTimeChange ref="pickupTimeChange"/>
  </div>
</template>

<script>
import PickupDateChange from '@/components/modal/pickupDateChange.vue';
import PickupTimeChange from '@/components/modal/pickupTimeChange.vue';

export default {
  components:{PickupDateChange,PickupTimeChange},
}
</script>

<style lang="scss" scoped>
.user-info{
  .top{
    display:flex;

    .divider-v{
      height:50px;;
      width:1px;
      background:#e2e2e2;
      margin:0 20px;
    }

    dl{
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      flex:1;

      dt{
        font-size:12px;
        color:#888;
      }
      dd{
        display:flex;
        align-items: center;
        justify-content: space-between;

        .v-btn{
          border:1px solid #c2c2c2;
          height:20px;
          padding:0px;
          font-size:12px;
          border-radius:100px;
        }
      }
    }

    .link{
      dd{
        span{
          text-decoration: underline;
        }
        span:hover{
          cursor: pointer;
          color:#2C9CD4
        }
      }
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:20px 0;
  }

  .bottom{
    dl{
      display:flex;
      margin-bottom:10px;

      dt{
        width:120px;
        font-size:12px;
        color:#888;
      }
      dd{}
    }
  }
}
</style>
<template>
  <div class="memberDetail">
    <MemberHead />

    <div class="contents">
      
      <UserSummary />

      <div class="tabs">
        <div class="tab">
          <v-btn 
            text 
            v-for="(item, index) in tab" 
            :key="index"
            :class="{active:tabActive === index}"
            @click="tabActive = index"
          >
            {{item}}
          </v-btn>
        </div>
        <div class="tabCont" v-show="tabActive === 0">
          <UserInfo />
        </div>

        <div class="tabCont" v-show="tabActive === 1">
          <UserOrderList />
        </div>

        <div class="tabCont" v-show="tabActive === 2">
          쿠폰관리입니다.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MemberHead from '@/components/memberDetail/memberHead.vue'
import UserInfo from '@/components/memberDetail/userInfo.vue'
import UserSummary from '@/components/memberDetail/userSummary.vue'
import UserOrderList from '@/components/memberDetail/userOrderList'

export default {
  components:{
    MemberHead, UserInfo, UserSummary, UserOrderList
  },

  data(){
    return{
      tab:[
        '회원정보', '주문내역', '회원쿠폰관리'
      ],
      tabActive:0,
    }
  }
}
</script>

<style lang="scss" scoped>
.memberDetail{
  .box{
    margin-bottom:20px;
    padding:20px;
  }

  .tabs{
    margin-top:30px;

    .tab{
      display:flex;
      border-left:1px solid #e2e2e2;

      .v-btn{
        position: relative;
        background:#fff;
        height:50px;
        width:150px;
        border:1px solid #e2e2e2;
        border-bottom:0px;
        border-left:0px;
      }

      .v-btn.active{
        color:#d22828;
      }
      .v-btn.active:after{
        content:'';
        display:block;
        width:100%;
        height:2px;
        background:#fff;
        position: absolute;
        bottom:-1px;
      }
    }

    .tabCont{
      border:1px solid #e2e2e2;
      padding:20px;
      background: #fff;
    }
  }
}
</style>
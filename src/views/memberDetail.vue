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
      </div>

      <div class="tabCont" v-show="tabActive === 0">
        <UserInfo />
      </div>

      <div class="tabCont" v-show="tabActive === 1">
        <SearchOpt>
          <DateSelect/>
        </SearchOpt>
        <UserOrderList />
      </div>

      <div class="tabCont" v-show="tabActive === 2">
        <SearchOpt>
          <DateSelect/>
        </SearchOpt>
        <UserOrderList />
      </div>
    </div>
  </div>
</template>

<script>
import MemberHead from '@/components/memberDetail/memberHead.vue'
import UserInfo from '@/components/memberDetail/userInfo.vue'
import UserSummary from '@/components/memberDetail/userSummary.vue'
import UserOrderList from '@/components/memberDetail/userOrderList'
import SearchOpt from '@/components/searchOpt/searchOpt.vue'
import DateSelect from '@/components/searchOpt/dateSelect.vue'

export default {
  components:{
    MemberHead, UserInfo, UserSummary, UserOrderList, SearchOpt, DateSelect
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

  .tabs{
    display:flex;
    align-items: flex-end;
    border-bottom:1px solid #292929;
    margin-bottom:20px;

    .v-btn{
      position: relative;
      border:1px solid #e2e2e2;
      border-left:0px;
      border-bottom:0;
      height:45px;
      min-width:150px;
      background:#f2f2f2;
      color:#888;
    }

    .v-btn:first-child{
      border-left:1px solid #e2e2e2;
    }

    .v-btn.active{
      border-left:1px solid #292929;
      border-color:#292929;
      background:#F5F6F9;
      color:#292929;
      font-weight:500;
      height:50px;
    }
    .v-btn.active:after{
      content:'';
      position: absolute;
      bottom:-1px;
      width:100%;
      height:1px;
      background: #F5F6F9;
    }
  }

}
</style>
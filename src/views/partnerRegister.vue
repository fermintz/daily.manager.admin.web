<template>
  <div class="partnerRegister">
    <div class="subHeader">
      <div class="left">
        <h3>
          세탁소등록
        </h3>
      </div>
      <div class="sub-head-btns">
        <div class="btns">
          <v-btn text class="finish">
            등록완료
          </v-btn>
        </div>
      </div>
    </div>

    <div class="contents">
      <AreaSearch />
      <Account />
      <PartnerInfo />
      <ProductOpt />
    </div> <!-- contents -->
  </div>
</template>

<script>
import AreaSearch from '@/components/areaSearch.vue'
import Account from '@/components/partner/account.vue'
import PartnerInfo from '@/components/partner/partnerInfo.vue'
import ProductOpt from '@/components/partner/productOpt.vue'

export default {
  components:{
    AreaSearch, Account, PartnerInfo, ProductOpt
  },
  
  
}
</script>

<style lang="scss" scoped>
.box{
  margin-bottom:20px;
}


</style>
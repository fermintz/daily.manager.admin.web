<template>
  <div class="subHeader">
    <div class="left">
      <v-btn text @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3>주문상세</h3>
    </div>

    <div class="sub-head-btns">
      
      <v-btn text @click="$refs.orderCancle.handle(true)">주문취소</v-btn>
      <v-btn text @click="$refs.refound.handle(true)">부분환불</v-btn>
      
    </div>
    
    <Message ref="message"/>
    <Refound ref="refound" />
    <OrderCancle ref="orderCancle" />
  </div> <!-- sub-head -->
</template>

<script>
import Message from '@/components/modal/message.vue'
import Refound from '@/components/modal/refound'
import OrderCancle from '@/components/modal/orderCancle'

export default {
  components:{
    Message,
    Refound,
    OrderCancle
  },
  methods:{
    messagePost(value, title, text){
      this.$refs.message.handle(value);
      this.$refs.message.title = title;
      this.$refs.message.text = text;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
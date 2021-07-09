<template>
  <div class="subHeader">
    <div class="left">
      <v-btn text @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3>주문상세</h3>
    </div>

    <div class="sub-head-btns">
      <div class="btns btns-1">
        <v-btn text @click="$refs.postMessage.handle(true)">사용자알림</v-btn>
        <v-btn text @click="messagePost(true, '수거지연알림', '수거지연알림을 발송하시겠습니까?')">수거지연알림</v-btn>
        <v-btn text @click="$refs.addPayment.handle(true)">추가결제요청</v-btn>
      </div>
      <div class="btns btns-2">
        <v-btn text>주문취소</v-btn>
        <v-btn text>부분환불</v-btn>
      </div>
    </div>
    
    <AddPayment ref="addPayment"/>
    <Message ref="message"/>
    <PostMessage ref="postMessage" />
  </div> <!-- sub-head -->
</template>

<script>
import Message from '@/components/modal/message.vue'
import PostMessage from '@/components/modal/postMessage.vue'
import AddPayment from '@/components/modal/addPayment.vue'

export default {
  components:{
    Message,
    PostMessage,
    AddPayment
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
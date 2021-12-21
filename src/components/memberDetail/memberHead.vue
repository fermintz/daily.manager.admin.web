<template>
  <div class="subHeader">
    <div class="left">
      <v-btn text @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3>회원 상세정보</h3>
    </div>

    <div class="sub-head-btns">
      <div class="btns">
        <v-btn text>재세탁등록</v-btn>
        <v-btn text>쿠폰지급</v-btn>
        <v-btn text>회원탈퇴</v-btn>
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
.sub-head{
    h3{margin-right:20px;}
  }
.sub-head-btns{
  display:flex;
  align-items: center;
  margin-right:15px;

  .btns{
    .v-btn{
      border-right:1px solid #c2c2c2;
      font-size:12px;
    }

  }


}
</style>
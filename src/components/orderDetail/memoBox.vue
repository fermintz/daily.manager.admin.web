<template>
  <div class="box memoBox">
    <div class="box-head">
      <h4>메모</h4>
    </div>
    <div class="box-content">
      <div class="memoForm">
        <textarea placeholder="필요한 정보를 입력해주세요" />
        <v-btn text>저장</v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.memoForm{
  display:flex;
  textarea{
    width:100%;
    min-height:100px;
    border:1px solid #e2e2e2;
    padding:5px;
    outline: none;;
  }
  .v-btn{
    width:100px;
    height:100px;
    margin-left:10px;
    background:#e2e2e2;
  }
}
</style>
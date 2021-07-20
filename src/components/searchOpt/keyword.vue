<template>
  <dl class="keyword">
    <dt>키워드검색</dt>
    <dd>
      <div class="keySelect">
        <select>
          <option>전화번호</option>
          <option>사용자이름</option>
          <option>기사이름</option>
          <option>세탁소이름</option>
        </select>
        <span>
          ▼
        </span>
      </div>
      <input type="text" placeholder="키워드를 입력해주세요">
    </dd>
  </dl>
</template>

<style lang="scss" scoped>
.keyword{
  dd{
    .keySelect{
    width:150px;
    position: relative;
    display:flex;
    align-items: center;

    span{ 
      display:flex;
      justify-content: center;
      align-items: center;
      width:32px;
      height:32px;
      border-left:1px solid #e2e2e2;
      position: absolute;
      right:0px;
      background:#fff;
      font-size:9px;
    }

    select{
      position: relative;
      width:240px;
      height:32px;
      border:1px solid #e2e2e2;
      padding:0 5px;
      z-index:1;
      outline: none;;
    }

    select:hover{
      border-color:#292929;
      cursor: pointer;
    }
  }
    input{
      width:240px;
      margin-left:10px;
      height:32px;
      border:1px solid #e2e2e2;
      padding:0 10px;
    }
  }
}

.btns{
  display:flex;
  justify-content: center;;
  padding:10px;
  .v-btn{

    height:32px;
    background:#292929;
    color:#fff;
    font-size:12px;
    font-weight:normal;
  }
}
</style>
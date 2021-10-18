<template>
  <div class="riderRegister">
    <div class="subHeader">
      <div class="left">
        <h3>
          라이더등록
        </h3>
      </div>
     
    </div>

    <div class="contents">
      <AreaSearch />


      <div class="box riderAccount">
        <div class="box-head">
          <h4>배송기사 계정등록</h4>
        </div>
        <div class="box-content ">
          <dl>
            <dt>아이디</dt>
            <dd>
              <input type="text">
            </dd>
          </dl>
          <dl>
            <dt>비밀번호</dt>
            <dd>
              <input type="text">
              <span>영문, 숫자 조합 10자리</span>
            </dd>
          </dl>
          <dl>
            <dt>비밀번호 확인</dt>
            <dd>
              <input type="text">
              <span>비밀번호를 다시 한번 확인해주세요</span>
            </dd>
          </dl>
        </div>
      </div>

      <div class="box profile">
        <div class="box-head">
          <h4>배송기사 개인정보</h4>
        </div>
        <div class="box-content">
          <div class="left">
            <div class="profile_img">
              <div class="inner">
                <img src="https://source.unsplash.com/random">
              </div>
              <v-btn icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
            
          </div>
          <div class="right">
            <dl>
              <dt>이름</dt>
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
            <dl>
              <dt>소개글</dt>
              <dd>
                <textarea />
              </dd>
            </dl>
          </div>
          
        </div>
      </div>

      <div class="page_btns">
        <v-btn text>
          <v-icon>mdi-check</v-icon>
          <label>등록완료</label>
        </v-btn>
      </div>
    </div> <!-- contents -->
  </div>
</template>

<script>
import AreaSearch from '@/components/areaSearch.vue';

export default {
  components:{
    AreaSearch
  },
}
</script>

<style lang="scss" scoped>
.riderRegister{
  .subHeader{
    .btns{
      .v-btn{

      }
    }
  }

  .box{
    margin-bottom:20px;
  }
  .box:last-child{
    margin-bottom:0px;
  }

  

  .riderAccount{
    dl{
      display:flex;
      margin-bottom:10px;

      dt{
        width:150px;
      }
      dd{
        display: flex;
        align-items: center;
        flex:1;

        input{
          width:200px;
          height:32px;
          border:1px solid #e2e2e2;
          padding:0 10px;
        }
        span{
          margin-left:10px;
          font-size:12px;
          color:#888;
        }
      }
    }
  }

  .profile{
    .box-content{
      display:flex;
      padding:0px;
    }

    .left{
      padding:20px 40px;
      border-right:1px solid #e2e2e2;

      .profile_img{
        position: relative;
        width:140px;
        height:140px;
        z-index:1;

        .inner{
          width:140px;
          height:140px;
          overflow:hidden;
          border-radius:100px;
          display:flex;
          justify-content: center;
          align-items: center;
          background:#e2e2e2;
        }

        img{
          width:150%
        }

        .v-btn{
          position:absolute;
          background:#fff;
          border:2px solid #e2e2e2;
          width:50px;
          height:50px;
          right:0px;
          bottom:0px;
          z-index:2;
        }
      }
    }

    .right{
      flex:1;
      padding:20px;

      dl{
        display:flex;
        margin-bottom:10px;

        dt{
          width:100px;
        }
        dd{
          flex:1;
          input{
            border:1px solid #e2e2e2;
            min-height:32px;
            width:240px;
            padding:5px;
          }
          textarea{
            border:1px solid #e2e2e2;
            width:100%;
            min-height:150px;
            padding:5px;
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
    }
  }
}
</style>
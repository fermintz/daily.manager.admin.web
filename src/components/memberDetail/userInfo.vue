<template>
  <div class="box user_info">
    <dl class="membership">
      <dt>회원등급</dt>
      <dd>
        <div class="selectBox">
          <select>
            <option>Silver</option>
            <option>Gold</option>
            <option>Vip</option>
          </select>
          <span>
            ▼
          </span>
        </div>
        <v-btn text>변경완료</v-btn>
      </dd>
    </dl>

    <div class="divider" />
    <dl class="user_name">
      <dt>이름</dt>
      <dd>
        <input type="text" disabled value="박수민">
      </dd>
    </dl>
    <dl class="user_phone">
      <dt>인증전화번호</dt>
      <dd>
        <input type="text" disabled value="010">
        <input type="text" disabled value="8525">
        <input type="text" disabled value="4561">
      </dd>
    </dl>
    <dl class="user_email">
      <dt>이메일</dt>
      <dd>
        <input type="text" disabled value="fermintz">
        <span>@</span>
        <input type="text" disabled  value="gamil.com">
      </dd>
    </dl>
    <dl class="join_date">
      <dt>가입일</dt>
      <dd>
        <input type="text" disabled  value="2021년 5월 11일">
      </dd>
    </dl>
    <div class="divider" />
    <dl class="addressList">
      <dt>주소지목록</dt>
      <dd>
        <div class="table">
          <v-data-table
            :headers="headers"
            :items="addressData"
            item-key="name"
            hide-default-footer

          >
            <template v-slot:item.btn>
              <v-btn text class="table_in_btn">삭제</v-btn>
            </template>
          </v-data-table>
        </div>
      </dd>
    </dl>
    <div class="divider" />
    <dl class="memo">
      <dt>메모</dt>
      <dd>
        <textarea></textarea>
        <v-btn text>
          저장
        </v-btn>
      </dd>
    </dl>
  </div> <!-- user-info -->
</template>

<script>
export default {
  data(){
    return{
      headers: [
        { text: '주소',sortable: false, value: 'address' },
        { text: '출입문정보',sortable: false, value: 'gate' },
      ],
      addressData: [
        {
          address: '부산시 북구 구남언덕로 15 3층',
          gate:'#1234 누룰고 종 누르시면 됩니다.',
        },
        {
          address: '부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
          gate:'#1234 누룰고 종 누르시면 됩니다.',
        },
      ],
    }
  }  
}
</script>

<style lang="scss" scoped>

.divider{
  height:1px;
  background:#e2e2e2;
  margin:30px 0;
}

.user_info{
  padding:20px;
  
  dl{
    display:flex;
    align-items: center;
    margin-bottom:15px;

    dt{
      width:150px;
    }
    dd{
      flex:1;

      input{
        border:1px solid #e2e2e2;
        height:32px;
        padding:0 5px;
      }

      input:disabled{
        background:#f8f8f8;
      }

      textarea{
        width:100%;
        border:1px solid #e2e2e2;
        min-height:120px;
        padding:5px;
      }
    }
  }
  dl.user_phone{
    dd{
      input{margin-right:10px;}
    }
  }
  dl.user_email{
    dd{
      span{margin:0 5px;}
    }
  }
  dl.membership{
    margin-top:15px;
    dd{
      display:flex;
      align-items: center;

      .selectBox{
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

      .v-btn{
        height:32px;
        font-size:12px;
        background:#292929;
        color:#fff;
        margin-left:10px;
      }
    }
  }
  dl.addressList{
    dd{
      .table{
        .table_in_btn{
          font-size:12px;
          border:1px solid #c2c2c2;
          height:26px;
          border-radius:13px;
        }
      }
      .btns{
        margin-top:15px;
        display:flex;
        justify-content: flex-end;

        .v-btn{
          border:1px solid #c2c2c2;
          font-size:12px;
        }
      }
    }
  }

  dl.memo{
    dd{display:flex;
      textarea{
        flex:1;
      }
      .v-btn{
        width:100px;
        height:120px;
        background:#292929;
        color:#fff;
        margin-left:10px;
      }
    }
  }
}
</style>
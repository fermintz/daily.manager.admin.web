<template>
  <div class="request">
    <div class="subHeader">
      <div class="left">
        <h3>결제요청관리</h3>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">
      <div class="request_list">
        <div class="no_data">
          요청된 추가결제가 없습니다
        </div>
        <div class="request_item"> 
          <div class="left">
            <div class="shop">구리구리왕구리 완전 구리 세탁소</div>
            <div class="date">2021.10.14 13:43 요청</div>
            <div class="btns">
              <v-btn text  @click="$router.push('requestDetail')">
                요청검토
              </v-btn>
            </div>
            
          </div>
          <div class="right">
            <div class="report">
              <dl class="orederNum">
                <dt>주문번호</dt>
                <dd>516518</dd>
              </dl>
              <dl class="name">
                <dt>주문자명</dt>
                <dd>박수민</dd>
              </dl>
              <dl class="phone">
                <dt>전화번호</dt>
                <dd>010-8525-4561</dd>
              </dl>
              <dl class="price">
                <dt>요청금액</dt>
                <dd>5,000 원</dd>
              </dl>
            </div> <!-- report -->

            <div class="divider" />

            <div class="cont">
              <dl>
                <dt>
                  <span>요청내용</span>
                </dt>
                <dd>
                  <div class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores expedita quibusdam quo rem odio consectetur blanditiis, possimus quam doloremque, saepe temporibus, tenetur facilis mollitia rerum nobis necessitatibus! Deserunt, labore!
                  </div>
                  <div class="photos">
                    <div 
                      class="photo"
                      v-for="item in 3"
                      :key="item"
                      @click="$refs.photoViewer.handle(true)"
                    >
                      <img src="https://source.unsplash.com/random" />
                    </div>
                  </div>
                </dd>
              </dl>

            </div>
          </div> <!-- right -->
        </div> <!-- request_item -->

        <div class="request_item2">
          <div class="top">
            <div class="left">
              <div class="shop">구리구리왕구리 완전 구리 세탁소</div>
              <div class="detail">
                <dl>
                  <dt>요청일시</dt>
                  <dd>2021.11.11 08:13</dd>
                </dl>
                <dl class="orderNum">
                  <dt>주문번호</dt>
                  <dd>65184</dd>
                </dl>
                <dl class="user">
                  <dt>주문자</dt>
                  <dd>박수민</dd>
                </dl>
                <dl>
                  <dt>전화번호</dt>
                  <dd>010-8525-4561</dd>
                </dl>
              </div>
            </div>
            
            <div class="btns">
              <div class="btn" v-ripple>
                <label>요청검토</label>
                <v-icon>mdi-arrow-right-circle-outline</v-icon>
              </div>
            </div>

          </div>
          <div class="message">
            <div class="text">
              <span>요청내용</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam facilis perferendis repellendus cupiditate minus? Enim, est earum. Quas, maiores quasi earum eligendi sunt aperiam quam recusandae porro eum, expedita officiis.</p>
            </div>
            <div class="photos">
              <div 
                class="photo"
                v-for="item in 3"
                :key="item"
                @click="$refs.photoViewer.handle(true)"
              >
                <img src="https://source.unsplash.com/random" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PhotoViewer ref="photoViewer" />
  </div>
</template>

<script>
import PhotoViewer from '@/components/modal/photoViewer'

export default {
  components:{
    PhotoViewer,
  },
  data(){
    return{
      
    }
  }
}
</script>

<style lang="scss" scoped>
.request{
  .request_list{

    .no_data{
      background:#e2e2e2;
      padding:15px 20px;
      margin-bottom:20px;
    }
    .request_item{
      border:1px solid #e2e2e2;
      background:#fff;
      display:flex;
      margin-bottom:20px;
      .left{ 
        position: relative;
        width:260px;
        padding:20px;

        .shop{
          font-size:16px;
          line-height:1.2;
          font-weight:500;
          font-family:'SCDream';
          width:100%;
          overflow:hidden; 
          text-overflow:ellipsis; 
          white-space:nowrap;
        }
        .date{
          font-size:12px;
          margin-top:10px;
          color:#898989;
        }
        .btns{
          width:100%;
          position: absolute;
          left:0px;
          bottom:0px;
          padding:20px;
          .v-btn{
            height:40px;
            width:100%;
            padding:0px;
            border:1px solid #c2c2c2;
          }
        }
        
      }
      .right{
        flex:1;
        padding:20px;
        border-left:1px solid #e2e2e2;
        min-height:200px;

        .divider{
          height:1px;
          background:#e2e2e2;
          margin:25px 0;
        }

        .report{
          display:flex;
          dl{
            width:150px;
            padding-right:20px;
            margin-right:20px;
            border-right:1px solid #e2e2e2;
            dt{
              font-size:12px;
              color:#898989;
              margin-bottom:10px;
            }
            dd{
              font-size:14px;
            }
          }
          
          dl:last-child{
            border-right:0px;
          }

          dl.price{
            dd{
              color:#FF0158;
              font-weight:500;
            }
          }
        }
      }

      .cont{
        dl{
          display:flex;
          dt{
            margin-right:40px;
            span{
              display:flex;
              justify-content: center;
              align-items: center;
              font-size:12px;
              width:70px;
              height:28px;
              padding:0 10px;
              background:#e2e2e2;
            }
          }
          dd{
            .text{

            }
            .photos{
              display:flex;
              align-items: center;
              margin-top:20px;

              .photo{
                display:flex;
                align-items: center;
                justify-content: center;
                width:80px;
                height:80px;
                overflow:hidden;
                border:1px solid #e2e2e2;
                margin-right:15px;
                img{
                  width:150%;
                }
              }
              .photo:hover{
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .request_item2{
      border:1px solid #e2e2e2;
      background:#fff;
      padding:20px;

      .top{
        display:flex;
 
        .left{
          flex:1;
          .shop{
            font-family:'SCDream';
            font-size:20px;
            line-height:1.2;
          }
          .detail{
            display:flex;
            margin-top:20px;
            dl{
              margin-right:20px;
              width:200px;
              border-right:1px solid #e2e2e2;
              dt{
                font-size:12px;
                color:#898989;
              }
              dd{
                font-size:16px;
                margin-top:3px;
              }
            }
            dl:last-child{
              border-right:0px;
            }

            dl.orderNum{
              dd{
                text-decoration: underline;
              }
            }

            dl.user{
              dd{
                text-decoration: underLine;
              }
            }
            dl.user dd:hover, dl.orderNum dd:hover{
              cursor: pointer;
              color:blue
            }
          }
        }

        
        .btns{
          width:150px;
          
          .btn{
            display:flex;
            padding:10px;
            justify-content: space-between;
            height:100%;
            background:#292929;
            padding:10px;
            border-radius:5px;

            label{
              color:#fff;
              align-self: flex-start;
            }
            .v-icon{
              color:#aaa;
              align-self: flex-end;
            }
          }
          .btn:hover{
            cursor: pointer;
          }
          
        }
      }

      .message{
        background:#f8f8f8;
        padding:20px;
        border-radius:10px;
        margin-top:20px;

        .text{
          span{
            display:block;
            color:#898989;
          }
          p{
            margin:0px;
            padding:0px;
            margin-top:10px;
          }
        }
        .photos{
          display:flex;
          align-items: center;
          margin-top:20px;

          .photo{
            display:flex;
            align-items: center;
            justify-content: center;
            width:80px;
            height:80px;
            border-radius:5px;
            overflow:hidden;
            border:1px solid #e2e2e2;
            margin-right:15px;
            img{
              width:150%;
            }
          }
          .photo:hover{
            cursor: pointer;
          }
        }
      }
      
    }
  }
}
</style>
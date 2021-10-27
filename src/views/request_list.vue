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

        <div class="request_item" v-for="item in 5" :key="item"> 
          <div class="left">
            <div class="shop">구리구리왕구리 완전 구리 세탁소</div>
            <div class="date">2021.10.14 13:43 요청</div>
            <div class="btns">
              <v-btn text @click="$router.push('requestDetail')">
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
                </dd>
              </dl>

            </div>
          </div> <!-- right -->
        </div> <!-- request_item -->
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
  }
}
</style>
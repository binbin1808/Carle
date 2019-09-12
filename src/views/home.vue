<template>
  <div class="container">
    <div class="box1">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../static/images/house.jpg" class="img"></van-swipe-item>
        <van-swipe-item><img src="../static/images/house.jpg" class="img"></van-swipe-item>
        <van-swipe-item><img src="../static/images/house.jpg" class="img"></van-swipe-item>
        <van-swipe-item><img src="../static/images/house.jpg" class="img"></van-swipe-item>
      </van-swipe>
    </div>
    <div class="box2">
      <div class="container">
      <span class="title">南昌地房宝</span>
      <span class="title1">营业时间：2018-11-14</span>
      <span class="title1">地点：阿达萨达飒飒</span>
      </div>
    </div>
    <div class="box3">
      <div class="container">
        <div class="container1">
          <div class="line"></div>
          <span class="title1">公司简介</span>
        </div>
        <div class="container2">
           <p class="title">华为是全球领先的ICT（信息与通信）基础设施和智能终端提供商，致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界。我们在通信网络、IT、智能终端和云服务等领域为客户提供有竞争力、安全可信赖的产品、解决方案与服务，与生态伙伴开放合作，持续为客户创造价值，释放个人潜能，丰富家庭生活，激发组织创新。华为坚持围绕客户需求持续创新，加大基础研究投入，厚积薄发，推动世界进步。华为成立于1987年，是一家由员工持有全部股份的民营企业，目前有18万员工，业务遍及170多个国家和地区。
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      active: 0,
      img: '../static/images/tou.png'
    }
  }
}
</script>

<style rel='stylesheaet/scss' lang='scss' scoped>
.container{
  height: 100%;
  width: 100%;
  .box1{
    width: 100%;
    height: 40%;
    .img{
      width: 100%;
      height: 100%;
    }
  }
  .box2{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    .container{
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      font-family: Arial, Helvetica, sans-serif;
      border-bottom: 1px solid #e4e4e4;
      .title{
        font-weight: 600;
        font-size: 36px;
        color:#474747;
      }
      .title1{
        font-size:24px;
        color: #989898;
        margin-top: 10px;
      }
    }
  }
  .box3{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    .container{
      width: 90%;
      height: 100%;
      // margin-top: 50px;
      .container1{
        display: flex;
        align-items: center;
        margin-left: 20px;
        height: 100px;
        font-weight: 700;
        font-size:30px;
        font-family: Helvetica ;
        .line{
            width: 10px;
            height: 30px;
            background-color: black;
        }
        .title1{
            margin-left: 20px;
        }
      }
      .container2{
        width: 100%;
        height: calc(100% - 100px);
        .title{
          color: #989898;
          font-size: 28px;
          line-height: 40px;
          text-indent: 2em;
        }
      }
    }
  }
}
</style>

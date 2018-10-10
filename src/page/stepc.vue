<template>
  <div>
    <div class="relaybody">
      <div class="bear">     
      </div>
      <div class="relaytxt"> 
        <div class="zengjian" :class="pingjia"></div>
        <button class="btn-relaymoney" @click="tiaozhuan"></button>
        <div class="greenleef"></div>
      </div>
      <div class="taxrulecont"> 
        <div class="taxrule"></div>
        <button class="btn-gz" @click="guanzhu"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pingjia:'zeng1'
    }
  },
  beforeCreate(){
    document.getElementsByTagName('body')[0].style.background = '#eab61a';
  },
  created(){
    this.pingjia=this.$route.params.pingjia;
  },
  methods:{
    tiaozhuan:function(){
      this.$router.push({
        name: 'stepd',
        params: {
          pingjia: this.pingjia
        }
      })
    },
    guanzhu:function(){
      window.location.href = 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzgxNDA3MTYyNw==#wechat_redirect';
    }
  }
}
</script>
<style scoped>
.relaybody{
  background: url(../assets/relaybg.png) no-repeat 0.1rem 0.28rem;
  background-size: 7.1rem 6.09rem;
  width: 100%;
  min-height: 6.4rem;
  padding-top: 0.6rem;
}
.bear{
  width: 4.97rem;
  height: 5.17rem;
  background: url(../assets/relaybear.png) no-repeat center;
  background-size: 100%;
  margin-left: 1.08rem;
  margin-bottom: 0.4rem;
}
.relaytxt{
  width: 6.5rem;
  border-radius: 0.5rem;
  border:2px solid #560102;
  margin:0 auto;
  background: #fff;
  padding-top: 0.6rem;
  position: relative;
  margin-bottom: 0.66rem;
}
.zengjian{
  width: 5.2rem;
  height: 1.17rem;
  background: url(../assets/zeng1.png) no-repeat center;
  background-size: 100%;
  margin:0 auto;
  margin-bottom: 0.7rem;
}
.zeng1{
  background: url(../assets/zeng1.png) no-repeat center;
  background-size: 100%;
}
.zeng2{
  background: url(../assets/zeng2.png) no-repeat center;
  background-size: 100%;
}
.zeng3{
  background: url(../assets/zeng3.png) no-repeat center;
  background-size: 100%;
}
.zeng4{
  background: url(../assets/zeng4.png) no-repeat center;
  background-size: 100%;
}
.zeng5{
  background: url(../assets/zeng5.png) no-repeat center;
  background-size: 100%;
}
.jian1{
  background: url(../assets/jian1.png) no-repeat center;
  background-size: 100%;
}
.jian2{
  background: url(../assets/jian2.png) no-repeat center;
  background-size: 100%;
}
.jian3{
  background: url(../assets/jian3.png) no-repeat center;
  background-size: 100%;
}
.jian4{
  background: url(../assets/jian4.png) no-repeat center;
  background-size: 100%;
}
.btn-relaymoney{
  width: 3.76rem;
  height: 0.98rem;
  background: url(../assets/btn-relaymoney.png) no-repeat center;
  background-size: 100%;
  margin:0 auto;
  margin-bottom: 0.65rem;
  display: block;
  border:none;
}
.greenleef{
  width: 0.45rem;
  height: 0.34rem;
  background: url(../assets/greenleef.png) no-repeat center;
  background-size: 100%;
  position: absolute;
  bottom: 0.18rem;
  left: -0.18rem;
}
.taxrulecont{
  padding: 0 0.45rem 0.36rem 0.9rem;
  overflow: hidden;
}
.taxrule{
  width: 3.36rem;
  height: 0.79rem;
  background: url(../assets/rules.png) no-repeat center;
  background-size: 100%;
  float: left;
}
.btn-gz{
  width: 2.27rem;
  height: 0.74rem;
  background: url(../assets/btngz.png) no-repeat center;
  background-size: 100%;
  float: right;
  display: block;
  border:none;
}
</style>

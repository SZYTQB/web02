<template>
  <div>
    <div class="relaybody">
    <div class="bear">     
    </div>
    <div class="relaytxt"> 
      <div class="zengjian" :class="pingjia"></div>
        <div class="after-tax">
        <div class="after-taxtxt"></div>
        <img src="../assets/code.png" class="code" />
      </div>
      <div class="greenleef"></div>
    </div>
    <div class="btn-loogpress"></div>
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
    jingxi:function(){
      
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
.after-tax{
  overflow: hidden;
  width: 4.2rem;
  margin:0 auto;
  padding-bottom: 0.3rem;
}
.after-taxtxt{
  width: 2.27rem;
  height: 1.21rem;
  background: url(../assets/after-taxsr.png) no-repeat center;
  background-size: 100%;
  float: left;
  margin-top: 0.2rem;
}
.code{
  width: 1.6rem;
  float: right;
}
.btn-loogpress{
  width: 4.57rem;
  height: 0.67rem;
  background: url(../assets/long-press.png) no-repeat center;
  background-size: 100%;
  margin:0.5rem auto;
}
</style>

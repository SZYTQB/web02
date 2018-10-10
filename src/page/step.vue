<template>
  <div>
    <div class="firstbejing"></div>
    <div class="next-step">
      <router-link to="/stepa"><img src="../assets/jiantou.png" /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate(){
    document.getElementsByTagName('body')[0].style.background = '#ffffff';  
  }
}
</script>
<style scoped>
  .firstbejing{
    width:100%;
    height:10.9rem;
    background: url(../assets/a0.jpg) no-repeat center; 
    background-size: 100% 100%;
  }
  .next-step{
    width:100%;
    height:1.2rem;
    background: white;
    text-align: center;
    position:relative;
  }
  .next-step.active{
    position:fixed;
    bottom:0;
  }
  .next-step img{
    width:0.73rem;
    height:0.88rem;
    position:absolute;
    left:50%;
    top:0.15rem;
    margin-left: -0.46rem;
  }
</style>

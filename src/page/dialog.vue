<template>
  <div @click="fnclick">
    <div ref="box" class="tologoin-alert" :class="{'active':alertjuege}">{{alerttext}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props:['alerttext','alertjuege'],
  /*created: function() {
    this.$watch('alertjuege', function(){
      if(this.alertjuege){
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let topH = this.$refs.box.clientHeight;console.log(topH);
        this.$refs.box.style.top=(h-topH)/2+'px';
      }
    },{deep: true})
  },*/
  watch:{
    alertjuege:{
      handler:function(alertjuege){
        if(alertjuege){
          this.$refs.box.style.display='inline-block';
          let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          let topH = this.$refs.box.clientHeight;
          this.$refs.box.style.top=(h-topH)/2+'px';
        }else{
          this.$refs.box.style.display='none';
        }
      },
      deep:true
    }
  },
  methods:{
    fnclick:function(){
      console.log(this.alertjuege);
    }
  }
}
</script>
<style scoped>
.tologoin-alert{
  padding: 0.6rem 0;
  position: fixed;
  top: 0;
  left: 1rem;
  z-index: 99999;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  line-height: 0.45rem;
  width:5.5rem;
  font-size:0.28rem;
  color:#ffffff;
  display:none ;
  text-indent: 0;
}
.tologoin-alert.active{
  display: inline-block;
}
</style>

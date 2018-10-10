<template>
  <div class="body-bj">
    <div class="stcontent">
      <div class="inpu-group">
        <input type="text" v-model='salary01' placeholder="请输入税前薪资" />
        <div class="right-unit">/&nbsp;月</div>
      </div>
      <div class="inpu-group">
        <input type="text" v-model='cardinal' placeholder="五险一金缴费基数" />
        <div class="right-unit">/&nbsp;月</div>
      </div>
      <div class="inpu-group">
        <input type="text" v-model='bonus' placeholder="税前奖金" />
        <div class="right-unit">/&nbsp;年</div>
      </div>
      <div class="inpu-group">
        <input type="text" v-model='districtcity' placeholder="请选择所在地区" readonly="true" />
        <div class="right-unit bluecolor" @click='showcity'>自&nbsp;定&nbsp;义</div>
      </div>
      <div v-if="jisuan" class="btn-jisuan">
        <img src="../assets/jisuan.png" @click='startjisuan' />
      </div>
      <div v-else class="btn-jisuan">
        <img src="../assets/jisuanzhong.png" />
      </div>
      <!-- <router-link to="/stepb">跳转</router-link> -->
    </div>
    <div class="cityselect" :class="{'active':cityjudge}">
      <h5>选择城市（{{districtcity}}）</h5>
      <p v-for="dislist in districtlist" @click='fnselectcity(dislist.value,dislist.code)'>{{dislist.value}}</p>
    </div>
    <dialog-bar :alerttext="dialogc" :alertjuege="dialogjudge"></dialog-bar>
  </div>
</template>

<script>
import dialogBar from './dialog.vue'
import {taxrate} from './../router/taxrate'
export default {
  data() {
    return {
      salary01:'',
      cardinal:'',
      bonus:'',
      district:'',
      districtcity:'',
      districtlist:[],
      dialogc:'',
      dialogjudge:false,
      jisuan:true,
      cityjudge:false
    }
  },
  components:{
    'dialog-bar': dialogBar,
  },
  beforeCreate(){
    document.getElementsByTagName('body')[0].style.background = '#eab61a';
  },
  created() {  
    this.districtlist=taxrate; 
  },
  methods:{
    startjisuan:function(){
      /*this.dialogjudge=!this.dialogjudge*/
      let datanum01=parseFloat(this.salary01);
      let datanum02=parseFloat(this.cardinal);
      let datanum03=parseFloat(this.bonus);
      let discode=this.district;
      let timeoutdia;
      var that=this;
      if(!datanum01){
        this.dialogc='税前薪资不能为空';
        this.dialogjudge=true;
        clearTimeout(timeoutdia);
        timeoutdia=setTimeout(function(){
          that.dialogjudge=false;
        },1500);
        return ;
      }
      if(!datanum02){
        this.dialogc='五险一金缴费基数不能为空';
        this.dialogjudge=true;
        clearTimeout(timeoutdia);
        timeoutdia=setTimeout(function(){
          that.dialogjudge=false;
        },1500);
        return ;
      }
      if(!discode){
        this.dialogc='请选择一个城市';
        this.dialogjudge=true;
        clearTimeout(timeoutdia);
        timeoutdia=setTimeout(function(){
          that.dialogjudge=false;
        },1500);
        return ;
      }
      if(!datanum03){
        this.bonus=0;
        datanum03=0;
      }
      this.jisuan=false;
      /*计算五险一金*/
      /*参数*/
      let rationum=parseFloat(discode)/100;
      let lowestnum=749;
      let highestnum=3744;
      /*计算*/
      let oldSocial=datanum02*rationum;
      let newSocial=datanum01*rationum;
      if(oldSocial<lowestnum){
        oldSocial=lowestnum;
      }else if(oldSocial>highestnum){
        oldSocial=highestnum;
      }
      if(newSocial<lowestnum){
        newSocial=lowestnum;
      }else if(newSocial>highestnum){
        newSocial=highestnum;
      }
      /*计算个人所得税*/
      let oldtax=0;
      let newtax=0;
      let oldtaxnum=datanum01-oldSocial-3500;
      let newtaxnum=datanum01-newSocial-5000;
      if(newtaxnum<=0){
        newtax=0;
      }else if(newtaxnum<=3000){
        newtax=newtaxnum*0.03;
      }else if(newtaxnum>3000&&newtaxnum<=12000){
        newtax=newtaxnum*0.1-210;
      }else if(newtaxnum>12000&&newtaxnum<=25000){
        newtax=newtaxnum*0.2-1410;
      }else if(newtaxnum>25000&&newtaxnum<=35000){
        newtax=newtaxnum*0.25-2660;
      }else if(newtaxnum>35000&&newtaxnum<=55000){
        newtax=newtaxnum*0.3-4410;
      }else if(newtaxnum>55000&&newtaxnum<=80000){
        newtax=newtaxnum*0.35-7160;
      }else if(newtaxnum>80000){
        newtax=newtaxnum*0.45-15160;
      }
      if(oldtaxnum<=0){
        oldtax=0;
      }else if(oldtaxnum<=1500){
        oldtax=oldtaxnum*0.03;
      }else if(oldtaxnum>1500&&oldtaxnum<=4500){
        oldtax=oldtaxnum*0.1-105;
      }else if(oldtaxnum>4500&&oldtaxnum<=9000){
        oldtax=oldtaxnum*0.2-555;
      }else if(oldtaxnum>9000&&oldtaxnum<=35000){
        oldtax=oldtaxnum*0.25-1005;
      }else if(oldtaxnum>35000&&oldtaxnum<=55000){
        oldtax=oldtaxnum*0.3-2755;
      }else if(oldtaxnum>55000&&oldtaxnum<=80000){
        oldtax=oldtaxnum*0.35-5505;
      }else if(oldtaxnum>80000){
        oldtax=oldtaxnum*0.45-13505;
      }
      /*计算奖金税*/
      let oldbonustax=0; //老的奖金税
      let newbonustax=0; //新的奖金税
      if(datanum01<3500){
        datanum03=datanum03-3500+datanum01;
      }
      let monthnum03=datanum03/12;
      if(monthnum03>0&&monthnum03<=1500){
        oldbonustax=datanum03*0.03;
      }else if(monthnum03>1500&&monthnum03<=4500){
        oldbonustax=datanum03*0.1-105;
      }else if(monthnum03>4500&&monthnum03<=9000){
        oldbonustax=datanum03*0.2-555;
      }else if(monthnum03>9000&&monthnum03<=35000){
        oldbonustax=datanum03*0.25-1005;
      }else if(monthnum03>35000&&monthnum03<=55000){
        oldbonustax=datanum03*0.3-2755;
      }else if(monthnum03>55000&&monthnum03<=80000){
        oldbonustax=datanum03*0.35-5505;
      }else if(monthnum03>80000){
        oldbonustax=datanum03*0.45-13505;
      }
      if(monthnum03>0&&monthnum03<=3000){
        newbonustax=newtaxnum*0.03;
      }else if(monthnum03>3000&&monthnum03<=12000){
        newbonustax=datanum03*0.1-210;
      }else if(monthnum03>12000&&monthnum03<=25000){
        newbonustax=datanum03*0.2-1410;
      }else if(monthnum03>25000&&monthnum03<=35000){
        newbonustax=datanum03*0.25-2660;
      }else if(monthnum03>35000&&monthnum03<=55000){
        newbonustax=datanum03*0.3-4410;
      }else if(monthnum03>55000&&monthnum03<=80000){
        newbonustax=datanum03*0.35-7160;
      }else if(monthnum03>80000){
        newbonustax=datanum03*0.45-15160;
      }
      /*年收入*/
      let oldtotalnum=(parseFloat(this.salary01)-oldtax-oldSocial)*12+parseFloat(this.bonus)-oldbonustax;
      let newtotalnum=(parseFloat(this.salary01)-newtax-newSocial)*12+parseFloat(this.bonus)-newbonustax;
      this.jisuan=true;
      console.log('老的：'+oldSocial+','+oldtax+','+oldbonustax+','+oldtotalnum);
      console.log('新的：'+newSocial+','+newtax+','+newbonustax+','+newtotalnum);
      this.$router.push({
        name: 'stepb',
        params: {
          oldSocial: oldSocial,
          oldtax: oldtax,
          oldbonustax: oldbonustax,
          oldtotalnum: oldtotalnum,
          newSocial: newSocial,
          newtax: newtax,
          newbonustax: newbonustax,
          newtotalnum: newtotalnum
        }
      })
    },
    showcity:function(){
      this.cityjudge=true;
    },
    fnselectcity:function(cityvalue,citycode){
      this.cityjudge=false;
      this.district=citycode;
      this.districtcity=cityvalue;
    }
  }
}
</script>
<style scoped>
  .body-bj{
    background: url(../assets/a1.jpg) no-repeat center;
    background-size: 100% 100%;
    width:100%;
    height:12rem;
  }
  .stcontent{
    padding:0.84rem 0.55rem 0 0.55rem;
  }
  .inpu-group{
    width:100%;
    height:0.7rem;
    margin-bottom: 0.15rem;
    position:relative;
    padding-right:1.6rem;
    font-size:0.28rem;
    color:#000000;
  }
  .inpu-group input{
    width:4.7rem;
    height:0.7rem;
    line-height: 0.7rem;
    padding:0 0.3rem;
    background: white;
    border:none; 
    box-shadow: darkgrey 0px 2px 5px 0px inset;
    -webkit-box-shadow: darkgrey 0px 2px 5px 0px inset;
    position: absolute;
    top:0;
    left:0;
  }
  .inpu-group .right-unit{
    width:1.4rem;
    height:0.7rem;
    line-height: 0.7rem;
    text-align: center;
    background: white;
    border:none; 
    box-shadow: darkgrey 0px 2px 5px 0px inset;
    -webkit-box-shadow: darkgrey 0px 2px 5px 0px inset;
    position:absolute;
    right:0;
    top:0;
  }
  .inpu-group .right-unit.bluecolor{
    color:#34a2ff;
  }
  .cityselect{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: white;
    overflow-y:auto;
    display: none;
    z-index: 50;
  }
  .cityselect.active{
    display: block;
  }
  .cityselect h5{
    width:100%;
    height:0.8rem;
    line-height: 0.8rem;
    padding:0 0.3rem;
    font-size:0.3rem;
    border-bottom: solid 1px #000000;
    margin:0;
  }
  .cityselect p{
    width:100%;
    height:0.7rem;
    line-height: 0.7rem;
    padding:0 0.3rem;
    font-size:0.28rem;
    border-bottom: solid 1px #d7d7d7;
    margin:0;
  }
  .btn-jisuan{
    width:100%;
    height:1.2rem;
    position: fixed;
    text-align: center;
    bottom: 0.3rem;
    left:0;
  }
  .btn-jisuan img{
    width:3.13rem;
    height:0.93rem;
    display: inline-block;
  }
</style>

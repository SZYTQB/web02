<template>
  <div>
    <div class="taxbody">
        <div class="tax-reform">   
          <table border="0" cellpadding="0" cellspacing="0">
            <thead>
              <tr><th></th><th>税改前</th><th>税改后</th><th></th></tr>
            </thead>
            <tbody>
              <tr class="yellow">
                <td>年度纳税额</td>
                <td><span :class="{'chang':!taxchajud}"></span>{{oldtax}}</td>
                <td><span :class="{'chang':taxchajud}"></span>{{newtax}}</td>
                <td><b :class="taxchaclass">&#8595;</b>{{taxcha}}</td>
              </tr>
              <tr class="yellow">
                <td>年度缴纳五险一金</td>
                <td><span :class="{'chang':!socialchajud}"></span>{{oldSocial}}</td>
                <td><span :class="{'chang':socialchajud}"></span>{{newSocial}}</td>
                <td><b :class="socialchaclass">&#8593;</b>{{socialcha}}</td>
              </tr>
               <tr class="blue">
                <td>年度税后收入</td>
                <td><span :class="{'chang':!totalchajud}"></span>{{oldtotalnum}}</td>
                <td><span :class="{'chang':totalchajud}"></span>{{newtotalnum}}</td>
                <td><b :class="totalchaclass">&#8593;</b>{{totalcha}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="taxgai"> 
          <div class="bear"></div>
          <div class="taxgai-diaglog">
            <div class="taxgaitxt"></div>
            <router-link to="/stepa" class="btn-again"></router-link>
          </div>
        </div>
        <div class="taxgaiborder"></div> 
        <div class="pokeme"><button class="btn-pokeme" @click='jingxi'></button></div> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldSocial: '',
      oldtax: '',
      oldtotalnum: '',
      newSocial: '',
      newtax: '',
      newtotalnum: '',
      taxcha:'',
      taxchajud:'',
      taxchaclass:'',
      socialcha:'',
      socialchajud:'',
      socialchaclass:'',
      totalcha:'',
      totalchajud:'',
      totalchaclass:'',
    }
  },
  beforeCreate(){
    document.getElementsByTagName('body')[0].style.background = '#ffffff';  
  },
  created() {  
    let oldsc=parseFloat(this.$route.params.oldSocial)*12;
    let oldta=parseFloat(this.$route.params.oldtax)*12+parseFloat(this.$route.params.oldbonustax);
    let oldto=parseFloat(this.$route.params.oldtotalnum);
    let newsc=parseFloat(this.$route.params.newSocial)*12;
    let newta=parseFloat(this.$route.params.newtax)*12+parseFloat(this.$route.params.newbonustax);
    let newto=parseFloat(this.$route.params.newtotalnum);
    this.oldSocial=getV(oldsc);
    this.oldtax=getV(oldta);
    this.oldtotalnum=getV(oldto);
    this.newSocial=getV(newsc);
    this.newtax=getV(newta);
    this.newtotalnum=getV(newto);
    if(oldsc>newsc){
      this.socialcha=getV(oldsc-newsc);
      this.socialchajud=false;
      this.socialchaclass='arrdown';
    }else{
      this.socialcha=getV(newsc-oldsc);
      this.socialchajud=true;
      this.socialchaclass='arrup';
    }
    if(oldta>newta){
      this.taxcha=getV(oldta-newta);
      this.taxchajud=false;
      this.taxchaclass='arrdown';
    }else{
      this.taxcha=getV(newta-oldta);
      this.taxchajud=true;
      this.taxchaclass='arrup';
    }
    if(oldto>newto){
      this.totalcha=getV(oldto-newto);
      this.totalchajud=false;
      this.totalchaclass='arrdown';
    }else{
      this.totalcha=getV(newto-oldto);
      this.totalchajud=true;
      this.totalchaclass='arrup';
    }
  },
  methods:{
    jingxi(){
      let random='';
      if(this.totalchajud){
        random='zeng'+Math.ceil(Math.random()*4.99);
      }else{
        random='jian'+Math.ceil(Math.random()*3.99);
      }
      this.$router.push({
        name: 'stepc',
        params: {
          pingjia: random
        }
      })
    }
  }
}
function getV(vol){
  if(vol==undefined){
    return '';
  }
  if(isNaN(vol)){
    return vol;
  }
  try{
    if(vol||vol<0){
      if(Math.abs(vol)>10000000){
        return (vol/100000000).toFixed(2)+"亿";
      }
      if(Math.abs(vol)>100000){
        if(Math.abs(vol)>10000000){
          return (vol/10000).toFixed(2)+"万";
        }
        return (vol/10000).toFixed(2)+"万";
      }
      return (vol.toFixed(0));
    }else{
      return "-";
    }
  }catch(e){
    return vol;
  }
}
</script>
<style scoped>
*{
  padding: 0;margin:0;
}
.tax-reform{
  padding:0.05rem 0.3rem 0.4rem 0.3rem;
  background-color: #fff;
}
.tax-reform table{
  width: 100%;
}
.tax-reform table tr{
  line-height: 0.95rem;
  text-align: left;
}
.tax-reform table th,.tax-reform table td{
  border-bottom: 1px solid #000;
}
.tax-reform table thead th{
  font-size: 0.36rem;
}
.tax-reform table thead th:nth-child(1){
  width: 1.1rem;
}
.tax-reform table tbody td:nth-child(1){
  line-height: normal;
}
.tax-reform table thead th:nth-child(3){
  color: #9a3636;
}
.tax-reform table tbody td{
  font-size: 0.3rem;
}
.yellow span{
  height: 0.3rem;
  background-color: #e2bc42;
  width: 0.3rem;
  float: left;
  margin-top: 0.32rem;
  margin-right: 0.2rem;
}
.blue span{
  height: 0.3rem;
  background-color: #34a2ff;
  width: 0.3rem;
  float: left;
  margin-top: 0.32rem;margin-right: 0.2rem;
}
.yellow span.chang,
.blue span.chang{
  width:0.6rem;
}
.arrdown{
  font-size: 0.36rem;
  padding-right: 0.1rem;
  background: none;
}
.arrup{
  font-size: 0.36rem;
  padding-right: 0.1rem;
  background: none;
}
.taxgai{
  border-top: 2px solid #560102;
  height: 5.95rem;
  background: url(../assets/taxgaibg.png) no-repeat 0.18rem 0.3rem;
  background-size: 4.9rem 5.41rem;
  margin:0 auto;
  background-color: #eab61a;
}
.bear{
  width: 3.3rem;
  height: 4.57rem;
  background: url(../assets/taxgaibear.png) no-repeat center;
  background-size: 100%;
  margin-top: 1.02rem;
  margin-left: 0.45rem;
  float: left;
}
.taxgai-diaglog{
  float: left;
  padding-top: 0.7rem;
}
.taxgaitxt {
  width: 3.69rem;
  height: 3.17rem;
  background: url(../assets/diaglog.png) no-repeat center;
  background-size: 100%;
  margin-bottom: 0.7rem;
}
.btn-again{
  width: 2.54rem;
  height: 0.83rem;
  background: url(../assets/btn-again.png) no-repeat center;
  background-size: 100%;
  border:none;
  display: block;
  margin:0 auto;
}
.taxgaiborder{
  background: url(../assets/taxbord.png) no-repeat center 0px;
  background-size: 100%;
  height: 0.16rem;
  margin-bottom: 0.7rem;
  border-top: 2px solid #560102;
}
.btn-pokeme{
  width: 3.55rem;
  height: 1.21rem;
  background: url(../assets/btncwjx.png) no-repeat center;
  background-size: 100%;
  border:none;
  display: block;
  margin:0 auto;
}
</style>

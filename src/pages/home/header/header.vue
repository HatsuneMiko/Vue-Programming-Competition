<template>
  <div id="Header">
    <img src="@/assets/logo.png" width="70px" style="float: left"/>
    <span style="font-size: 50px;">&nbsp;程序设计大赛</span>
    <span style="float: right;font-size: 25px;">姓名:{{user}}&nbsp;&nbsp;学号:{{xh}}&nbsp;&nbsp;&nbsp;语言类型:{{lg}}&nbsp;</span>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user:localStorage.getItem('user'),
      xh:localStorage.getItem('xh'),
      lg:localStorage.getItem('lg')
    }
  },
  methods:{
  },
  created(){

  }
}
</script>


<style>
#Header{
  position: absolute;
  top:0;
  left:0%;
  width:100%;
  height: 70px;
  background: #ffffff;
  text-align: left;
}
</style>

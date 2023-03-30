<template>
  <div id="box">
    <cl-header></cl-header>
    <cl-main></cl-main>
  </div>
</template>

<script>
import ClHeader from '@/pages/home/header/header'
import ClMain from '@/pages/home/main/main'


export default ({
  name:"home",
  data() {
    return {
    }
  },
  components:{
    ClHeader,
    ClMain,
  }
})
</script>


<style scoped>
#box{
  width: 100%;
  min-width: 1000px;
}
</style>

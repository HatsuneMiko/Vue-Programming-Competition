<template>
  <div id="Main">
    <el-container>
      <el-container>
        <el-aside>
          <el-row class="tac">
            <el-col :span="24">
              <el-menu default-active="1-1" class="el-menu-vertical-demo" :default-openeds="openeds">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span style="font-weight:bold;">选题菜单</span>
                  </template>
                  <el-menu-item @click="comName=''">第一题(填空题)</el-menu-item>
                  <el-menu-item @click="comName=''">第二题(填空题)</el-menu-item>
                  <el-menu-item @click="comName=''">第三题(填空题)</el-menu-item>
                  <el-menu-item @click="comName=''">第四题(填空题)</el-menu-item>
                  <el-menu-item @click="comName=''">第五题(编程题)</el-menu-item>
                  <el-menu-item @click="comName=''">第六题(编程题)</el-menu-item>
                  <el-menu-item @click="comName=''">第八题(编程题)</el-menu-item>
                  <el-menu-item @click="comName=''">第九题(编程题)</el-menu-item>
                  <el-menu-item @click="comName=''">第十题(编程题)</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>
            <div id="leftmain">
              <component :is="comName"></component>
            </div>
            <div id="rightmain">
              <monaco-editor></monaco-editor>
            </div>
          </el-main>
          <el-footer>四川职业技术学院·编程爱好者协会</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import about from '@/views/AboutView'
import HdAPI from "@/api/network"
import MonacoEditor from '@/pages/mb'

export default {
  created(){
    HdAPI.Nati().then(rep=>{
      this.tm=rep
      console.log(this.tm)
    }).catch(error=>{
      console.log("获取题失败!")
    })
  },
  data(){
    return{
      openeds: ['1'],
      uniqueOpened: false,
      comName:'about',
      tm:'',
    }
  },
  components:{
    about,
    MonacoEditor
  },
  methods:{

  }
}
</script>

<style>
#Main{
  position: absolute;
  top:70px;
  bottom: 0px;
  width: 100%;
}

#leftmain{
  float: left;
  width: 60%;
  background: #D3DCE6;
}

#rightmain{
  float: left;
  width: 40%;
  background: #333333;
  border-radius:10px;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  line-height: 200px;
}

.el-main {
  height: 600px;
  background-color: #E9EEF3;
  color: #333;
}
</style>

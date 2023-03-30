<template>
  <div id="box">
    <div id="loginBg">
      <div id="loginBg-title-bg">
        <h1 id="login-title">编 程 竞 赛</h1><img src="@/assets/logo.png" style="width:50%;float:left" />
      </div>
      <div id="login">
        <h2>选手登录</h2>
        <el-form :model="form" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="姓  名:" prop="user">
            <el-input type="text" v-model="form.user" auto-complete="off" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="学  号" prop="pass">
            <el-input type="text" v-model="form.pass" auto-complete="off" placeholder="学号"></el-input>
          </el-form-item>
          <el-select v-model="value" placeholder="选择语言">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-button @click="yd" v-text="ydgz" style="margin-left: 10px;"></el-button>
          <el-form-item style="width:100%;margin-top: 10px">
            <el-button round type="primary" style="width:100%;" @click.native.prevent="submitForm('ruleForm')" :loading="logining"  :disabled="can_not_completed==true">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import HdAPI from "@/api/network";



export default {
  created(){
    localStorage.clear()
  },
  name: "login",
  data() {
    return {
      //声明的存储变量
      form: {
        //用户名
        user: '',
        //密码
        pass: '',
      },
      options: [{
        value: 'C/C++',
        label: 'C/C++'
      }, {
        value: 'Java',
        label: 'Java'
      }, {
        value: 'Python',
        label: 'Python'
      }],
      value: '',
      can_not_completed: true,
      ydgz:'是否同意参赛规则',
      checked:true,
      logining: false,
      //表单验证规则
      rules: {
        user: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 11, message: "长度在 2 到 18 个字符", trigger: "blur" },
        ],
        pass: [
          { required: true, message: "请输入12位学号", trigger: "blur" },
          {
            min: 12,
            max: 12,
            message: "长度在12个字符",
            trigger: "blur",
          }
        ]
      }
    };
  },
  methods: {
    yd(){
      this.can_not_completed = !this.can_not_completed
      if(true==this.can_not_completed){
        this.ydgz='是否同意参赛规则'
      }
      else{
        this.ydgz='已同意参赛规则'
      }
      //console.log(this.can_not_completed)
    },
    submitForm(formName) {
      if(this.value==''){
        this.$message.error('请选择语言!')
      }else {
        this.$refs[formName].validate((result) => {
          if (result){
            HdAPI.login(this.form.pass,this.form.user).then(rep=>{
              console.log('返回'+rep)
              // 判断用户名密码是否正确,如果正确返回true,如果错误就返回false
              if(rep==true){
                let { token } = rep;
                localStorage.setItem('access-token', token)
                localStorage.setItem("user",this.form.user)
                localStorage.setItem("xh",this.form.pass)
                localStorage.setItem("lg",this.value)
                console.log(localStorage.getItem('user'))
                this.$message.success('登录成功！')
                this.$router.push("/home");
              }else{
                this.$message.error('登录失败,姓名或者学号错误！')
              }
            }).catch(error=>{
              this.$message.error('提交失败服务器异常！')
            })
          }
        });
      }
    },
  }
}
</script>

<style scoped>
body{
  height:100%;
  width:100%;
  padding:0;
  margin: 0;
}

#box{
  height: 4000px;
  background-image: url("@/assets/bg.jpeg");
  background-size:100% 100%;
  background-attachment:fixed;
}

#loginBg{
  min-width: 800px;
  height: 500px;
  position:fixed;
  left: 30%;
  top:20%;
  background-image: url("@/assets/loginBg.jpg");
  border-radius: 20px;
}

#loginBg-title-bg{
  width: 70%;
  margin: 20px;
  padding: 0px;
  background-color: #ff3399;
  border-radius: 20px;
}

#login-title{
  color: #39c5bb;
  font-size: 60px;
}

#login{
  position:absolute;
  left: 36%;
  top:21%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  width: 450px;
}
</style>


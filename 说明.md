# 编程竞赛系统(前端)说明文档

基于Vue2.0、element UI界面、封装Axios的前端,完工百分之80。
才学2个月做的，大佬别吐槽。



1、安装依赖

```shell
npm install
```

2、运行

```shell
npm run serve
```

3、接口
```text
//登录接口
    login(stuId,stuName)
         url: '/contestTable/login'
           method: 'GET'
              stuId: stuId
              stuName: stuName

//拿题接口
    Nati() 
         url: '/question/getQuestion',
           method: 'GET',
//提交接口
    Tijiao(stuId,stuName) 
         url: '/contestTable/login'
           method: 'POST'
              stuId: stuId
              stuName: stuName
```

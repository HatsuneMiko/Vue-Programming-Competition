<<<<<<< HEAD
# 编程竞赛系统(前端)说明文档

基于Vue2.0、element UI界面、封装Axios的前端,完工百分之80。
才学2个月做的，大佬别吐槽。
=======
# 说明文档

基于Vue2.0、element UI界面、封装Axios的前端登录例子。
>>>>>>> origin/main



1、安装依赖

```shell
npm install
```

3、接口
```javascript
//登录接口
    login(stuId,stuName) {
        return request({
            url: '/contestTable/login',
            method: 'GET',
            params: {
                stuId: stuId,
                stuName: stuName
            }
        })
    },
    //拿题接口
    Nati() {
        return request({
            url: '/question/getQuestion',
            method: 'GET',
        })
    },
    //提交接口
    Tijiao(stuId,stuName) {
        return request({
            url: '/contestTable/login',
            method: 'POST',
            params: {
                stuId: stuId,
                stuName: stuName
            }
        })
    }
```
2、运行

```shell
npm run serve
```
<<<<<<< HEAD

=======
>>>>>>> origin/main

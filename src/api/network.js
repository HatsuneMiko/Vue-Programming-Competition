// 导入封装好的Axios
import {request} from '@/utils/request'


export default {
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
}

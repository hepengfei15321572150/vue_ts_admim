import axios from 'axios';

export default class Http {
    private AXIOS: any;

    constructor(initParams: object = {}) {
        this.AXIOS = axios.create(initParams);
    }

    ajax({ url = "", method = 'get', data = {}, header = {} }): Promise<any> {

        console.log(url, method, data)

        //添加请求头
        this.addHeader(header);

        return new Promise((resolve) => {
            this.AXIOS({
                url,
                method,
                data
            }).then((res: any) => {
                let { data: resData } = res;
                let { code, msg, data } = resData;
                if (code == 1) {
                    resolve({ data, code, msg });
                } else {
                    alert(msg);
                };
            }).catch(() => {
                alert('网络链接错误');
            });
        });
    }

    get({ url = "", data = {}, header = {} }): Promise<any> {
        return this.ajax(
            {
                url,
                method: 'get',
                data,
                header
            }
        );
    }

    post({ url = "", data = {}, header = {} }): Promise<any> {
        return this.ajax(
            {
                url,
                method: 'post',
                data,
                header
            }
        );
    }

    addHeader(headerParams = {}): void {
        let headerSetting: any = {};
        let newHeader = Object.assign(headerSetting, headerParams);

        for (let s in newHeader) {
            this.AXIOS.defaults.headers.common[s] = newHeader[s];
        };
    }
}




// 快应用 deeplink 地址

// 已有的
//     书架页：hap://app/com.cwg.quickapp/pages/tabbar?index=0
//     精选页：hap://app/com.cwg.quickapp/pages/tabbar?index=1
//     排行榜：hap://app/com.cwg.quickapp/pages/tabbar?index=2
//     个人中心：hap://app/com.cwg.quickapp/pages/tabbar?index=3
//     书籍详情：hap://app/com.cwg.quickapp/pages/bookDetail?bookId=11672

// 暂时没有的
//     书库页：hap://app/com.cwg.quickapp/pages/bookcity
//     限免页：hap://app/com.cwg.quickapp/pages/free
//     VIP会员页：hap://app/com.cwg.quickapp/pages/vip
//     签到：hap://app/com.cwg.quickapp/pages/sign
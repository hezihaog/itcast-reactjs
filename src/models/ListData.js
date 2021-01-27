//引入请求工具类
import request from "../util/request";

export default {
    //命名空间
    namespace: 'list',
    //状态，保存数据
    state: {
        data: [],
        maxNum: 0
    },
    reducers: {
        //定义一些函数
        addNewData: function (state, result) {//这里state参数，指的是更新之前的状态数据，result指的是请求到的数据
            //如果state中存在data数据，直接返回，因为这时是在做初始化操作，否则就是增加数据
            if (result.data) {
                return result.data;
            }
            //数组扩长1个
            let maxNum = state.maxNum + 1;
            let newArr = [...state.data, maxNum];
            //通过return，将新的状态数据返回
            return {
                data: newArr,
                maxNum: maxNum
            };
        }
    },
    //新增effects配置，用于异步加载数据
    effects: {
        //定义异步方法，*代表是异步操作
        * initData(params, sagaEffects) {
            //获取call、put方法
            const {call, put} = sagaEffects;
            //定义请求的url
            const url = "/ds/list";
            //执行请求
            let data = yield call(request, url);
            //调用上面reducers的方法
            yield put({
                //type属性，指定要调用的方法名
                type: "addNewData",
                //传递ajax请求回来的数据
                data: data
            });
        }
    }
}

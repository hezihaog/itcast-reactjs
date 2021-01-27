export default {
    //命名空间
    namespace: 'list',
    //状态，保存数据
    state: {
        data: [1, 2, 3],
        maxNum: 3
    },
    reducers: {
        //定义一些函数
        addNewData: function (state) {//这里state参数，指的是更新之前的状态数据
            //数组扩长1个
            let maxNum = state.maxNum + 1;
            let newArr = [...state.data, maxNum];
            //通过return，将新的状态数据返回
            return {
                data: newArr,
                maxNum: maxNum
            };
        }
    }
}

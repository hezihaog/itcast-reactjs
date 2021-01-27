export default {
    //数据列表模拟
    'get /ds/list': function (req, res) {
        //模拟请求返回数据
        res.json({
            data: [1, 2, 3, 4, 5],
            maxNum: 5
        });
    },
    //用户列表数据模拟
    'get /ds/user/list': function (req, res) {
        res.json([{
            key: '1',
            name: '张三1',
            age: 32,
            address: '上海市',
            tags: ['程序员', '帅气'],
        }, {
            key: '2',
            name: '李四', age: 42,
            address: '北京市', tags: ['屌丝'],
        }, {
            key: '3',
            name: '王五',
            age: 32,
            address: '杭州市',
            tags: ['高富帅', '富二代'],
        }]);
    }
}

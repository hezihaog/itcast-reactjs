// 导出一个对象，暂时设置为空对象，后面再填充内容 export default {};
export default {
    plugins: [['umi-plugin-react', {
        //开启dva功能
        dva: true,
        //开启ant design
        antd: true
    }]]
};

//导入React
import React from 'react';

//新建类，继承React.Component
class HelloWorld extends React.Component {
    //复写render方法
    render() {
        return (
            //1、通过this.props.属性名来获取传递的属性
            //2、通过this.props.children来获取子标签内容
            <div>我的第一个React.js组件，name = {this.props.name}，内容 = {this.props.children}</div>
        );
    }
}

//导出该类
export default HelloWorld;

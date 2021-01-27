import React from 'react';
//导入HelloWorld组件
import HelloWorld from "./HelloWorld";

class Show extends React.Component {
    render() {
        //1、通过属性传递数据
        return (
            //2、通过内容标签传递数据
            <HelloWorld name="张三">传智播客</HelloWorld>
        );
    }
}

export default Show;

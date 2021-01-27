import React from 'react';
//导入dva的connect方法
import {connect} from 'dva';

//model层中定义的命名空间
const namespace = "list";

//使用修饰符@connect，传入一个回调函数，参数state
//作用，将page层和model层进行连接，返回model中的数据
//并且，将返回的数据，绑定到this.props中

//@connect还接受第二个函数，这个函数的作用：将在model层中reducers属性中，定义的函数绑定到this.props中，调用model层中的函数
@connect((state) => {
    //state是全局的，需要通过命名空间从里面取出数据，并返回一个对象，这个对象会保存到当前页面的props中，对象中的属性是从dva中取出的数据
    return {
        dataList: state[namespace].data,
        maxNum: state[namespace].maxNum
    }
}, (dispatch) => {//dispatch作用：可以调用model层，reducers属性中定义的杉树
    return {//返回一个对象，对象中写方法
        //将返回的函数，绑定到this.props中
        add: function () {
            //通过dispatch方法，调用model层中的addNewData方法，该方法传入一个对象，并且有一个type属性
            //注意：格式是 namespace/函数名
            dispatch({
                type: namespace + "/addNewData"
            });
        },
        //初始化方法
        init: () => {
            dispatch({
                type: namespace + "/initData"
            });
        }
    }
})
class List extends React.Component {
    componentDidMount() {
        //初始化操作
        this.props.init();
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        //遍历状态中的数据，将数据转为视图返回
                        this.props.dataList.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })
                    }
                </ul>
                {/*添加点击事件*/}
                <button onClick={() => {
                    this.props.add();
                }}>点我
                </button>
            </div>
        );
    }
}

export default List;

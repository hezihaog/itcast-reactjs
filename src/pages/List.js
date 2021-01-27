import React from 'react';

class List extends React.Component {
    //添加构造方法，props是必写的
    constructor(props) {
        //调用父类的构造方法
        super(props);
        //对状态赋值，状态是一个对象，存放我们的数据
        this.state = {
            dataList: [1, 2, 3],
            maxNum: 3
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        //遍历状态中的数据，将数据转为视图返回
                        this.state.dataList.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })
                    }
                </ul>
                {/*添加点击事件*/}
                <button onClick={() => {
                    //数组扩长1个
                    let maxNum = this.state.maxNum + 1;
                    let newArr = [...this.state.dataList, maxNum];
                    //将state中的数据更新
                    this.setState({
                        dataList: newArr,
                        maxNum: maxNum
                    });
                }}>点我
                </button>
            </div>
        );
    }
}

export default List;

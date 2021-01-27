import React from 'react'
//导入需要使用的组件
import {Tabs} from 'antd'
//导入TabPane
const TabPane = Tabs.TabPane;

//切换Tab时的回调函数
function callback(key) {
    console.log(key);
}

class MyTabs extends React.Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Tab 1" key="1">
                        hello antd 第一个 tabs
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default MyTabs;

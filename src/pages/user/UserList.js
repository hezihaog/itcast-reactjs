import React from 'react';

import {Table, Divider, Tag, Pagination} from 'antd';

const {Column} = Table;

const data = [{
    key: '1',
    name: '张三',
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
}];

class UserList extends React.Component {
    render() {
        return (
            <div>
                <Table dataSource={data}
                       pagination={{position: "bottom", total: 500, pageSize: 10, defaultCurrent: 3}}>
                    <Column
                        title="姓名"
                        dataIndex="name"
                        key="name"
                    />
                    <Column
                        title="年龄"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="地址"
                        dataIndex="address"
                        key="address"
                    />
                    <Column
                        title="标签"
                        dataIndex="tags"
                        key="tags"
                        render={tags => (
                            <span>
                                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                            </span>
                        )}
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <a href="javascript:;">编辑</a>
                                <Divider type="vertical"/>
                                <a href="javascript:;">删除</a>
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    }
}

export default UserList;

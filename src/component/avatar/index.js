import { Avatar, Input, Menu, Space, Tabs } from "antd";
import { HomeFilled, DashboardOutlined, MoneyCollectOutlined, AppleOutlined } from '@ant-design/icons';
import { useRef, useState } from "react";
const AvartarAnt = () => {
    return (
        <>
            <Space>
                <Avatar.Group>
                    <Avatar />
                    <Avatar size={12} direction='vertical' />
                    <Avatar shape="square" />
                    <Avatar style={{ backgroundColor: 'blue' }}> A</Avatar>

                    <Avatar
                        src={'https://www.youtube.com/watch?v=ifQ7uXQv8xc&list=PL-JTnqZPF5z2qTGwNkYln3m0pA0qfgHFR&index=27&ab_channel=CodeWithAamir'}
                    />
                    <Avatar icon={<HomeFilled />} />


                </Avatar.Group>
                <Avatar.Group maxCount={2} >
                    <Avatar />
                    <Avatar size={12} direction='vertical' />
                    <Avatar shape="square" />
                    <Avatar style={{ backgroundColor: 'blue' }}> A</Avatar>

                    <Avatar
                        src={'https://www.youtube.com/watch?v=ifQ7uXQv8xc&list=PL-JTnqZPF5z2qTGwNkYln3m0pA0qfgHFR&index=27&ab_channel=CodeWithAamir'}
                    />
                    <Avatar icon={<HomeFilled />} />


                </Avatar.Group>

            </Space>


        </>
    )
}
export default AvartarAnt;
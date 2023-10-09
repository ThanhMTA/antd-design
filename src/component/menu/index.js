import { Input, Menu, Space } from "antd";
import { HomeFilled, DashboardOutlined, MoneyCollectOutlined } from '@ant-design/icons';

const MenuAnt = () => {
    return (
        <>
            <Space>
                <Menu
                    mode="inline"
                    onClick={(info)=> {
                        console.log(info.key)
                    }}
                    defaultOpenKeys={['dashboard']}
                    items={[
                        { label: <Input.Search placeholder="enter your text"></Input.Search>, key: 'search' },

                        { label: "Home", key: 'home', icon: <HomeFilled /> },
                        {
                            label: "Dashboard", key: 'dashboard', icon: <DashboardOutlined />,
                            children: [
                                { label: "Revenue", key: 'rev' },
                                { label: "Expenses", key: 'exp', icon: <MoneyCollectOutlined /> },


                            ]
                        },
                        {
                            label: "User Management", key: 'um', type: 'group',
                            children: [
                                { label: "Edit profile", key: 'ep' },
                                { label: "Switch Account", key: 'sa' },


                            ]
                        },
                        { label: "Signout", key: 'signout', danger: true },






                    ]}
                >

                </Menu>
            </Space>

        </>
    )
}
export default MenuAnt;
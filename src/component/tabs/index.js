import { Input, Menu, Space, Tabs } from "antd";
import { HomeFilled, DashboardOutlined, MoneyCollectOutlined, AppleOutlined } from '@ant-design/icons';
import { useRef, useState } from "react";
const TabsAnt = () => {
    const [tabslist, settablist] = useState([
        { tab: "tab 1", key: "tap1" },
        { tab: "tab 2", key: "tap2" },
        { tab: "tab 3", key: "tap3" }


    ])
    const nextTabindex = useRef(3)
    const onEdit = (tabKey, action) => {
        if (action === "add") {
            settablist(pre => [...pre, {
                tab: `Tab ${nextTabindex.current}`, key: `tab${nextTabindex.current}`
            }]);
            nextTabindex.current += 1
        }
        else if (action === 'remove') {
            settablist(pre => [...pre.filter(tab => tab.key !== tabKey)
            ]);
        }
        console.log({ action })
    }
    return (
        <>
            <Space size={20} direction="vertical">
                {/* tab on add delete  */}
                <Tabs defaultActiveKey="tab2" type="editable-card" onEdit={onEdit}>

                    {tabslist.map((tabInfo, index) => {
                        return (
                            <>
                                <Tabs.TabPane tab={tabInfo.tab} key={tabInfo.key}>
                                    <div> this is a content of {tabInfo.tab} </div>

                                </Tabs.TabPane>
                            </>
                        )


                    })}


                </Tabs>
                {/* tab on left  */}
                <Tabs defaultActiveKey="tab2" tabPosition="left">
                    <Tabs.TabPane tab="Tab 1" key='tab1'>
                        <div> this is a content of Tab1</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 2" key='tab2'>
                        <div> this is a content of Tab2</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 3" key='tab3'>
                        <div> this is a content of Tab3</div>
                    </Tabs.TabPane>

                </Tabs>
                {/* tab with icon  */}
                <Tabs defaultActiveKey="tab2">
                    <Tabs.TabPane tab={<span><AppleOutlined /> Tab1</span>} key='tab1'>
                        <div> this is a content of Tab1</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span><MoneyCollectOutlined /> Tab1</span>} key='tab2'>
                        <div> this is a content of Tab2</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span><DashboardOutlined /> Tab1</span>} key='tab3'>
                        <div> this is a content of Tab3</div>
                    </Tabs.TabPane>

                </Tabs>
                {/* tab on add and delete Options  */}
                <Tabs defaultActiveKey="tab2">
                    <Tabs.TabPane tab="Tab 1" key='tab1'>
                        <div> this is a content of Tab1</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 2" key='tab2'>
                        <div> this is a content of Tab2</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 3" key='tab3'>
                        <div> this is a content of Tab3</div>
                    </Tabs.TabPane>

                </Tabs>
            </Space>
        </>
    )
}
export default TabsAnt;
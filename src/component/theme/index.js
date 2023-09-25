import { Button, DatePicker, Input, Progress, Slider, Space, Spin } from 'antd';
const ThemeAnt =() => {
    return (
        <>
        <Space>
        <Button type='primary'></Button>
        <Input placeholder='type here..'></Input>
        <Progress percent={50} type='circle' ></Progress>
        <Spin spinning ></Spin>
        <DatePicker/>
        <Slider/>
        </Space>
       
        </>
    )
}
export default ThemeAnt;
import {Button, Spin} from 'antd';
import {useState} from 'react';
 const Spinant =()=>{
    const [loading, setLoading]= useState(false)
    return (
        <>
        <Spin spinning={true}></Spin>
        <Button onClick={()=> {setLoading(preValue=>!preValue)}}>spin</Button>
        <Spin spinning={loading}>
            <p>2</p>
            <p>3</p>

        </Spin>
        </>
    )
 }
 export default Spinant;
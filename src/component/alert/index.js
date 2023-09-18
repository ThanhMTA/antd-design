import { Form, Input, Button, message, Alert } from 'antd';
import React, { useState } from 'react';
import './alert.css'

const Alertant = () => {
    const [showAlert, setShowAlert]=useState(false)
    const handleLogin= (e)=>{
        // alert('thong bao')
        setTimeout(()=>{
            setShowAlert(true)
        },2000);

    }
    return (
        <>
        {showAlert &&
        <Alert
        type='error'
        message="Error"
        description='there was an error on login'
        ></Alert>
        }
            <div className='form'>
                <Form onFinish={handleLogin}>
                    <Form.Item label="user-name" name="username">
                        <Input placeholder='user name' required allowClear></Input>
                    </Form.Item>
                    <Form.Item label="password" name="password">
                        <Input.Password placeholder='password' required allowClear></Input.Password>
                    </Form.Item>
                    <Form.Item >
                        <Button type='primary' htmlType='submit'>Login</Button>
                    </Form.Item>
                </Form>
            </div>

        </>
    )
}
export default Alertant;
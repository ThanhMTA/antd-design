import { Form, Input, Button } from 'antd';
import React from 'react';
import './form.css'

const Formant = () => {
    const handleLogin= (e)=>{
        alert('thong bao')

    }
    return (
        <>
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
export default Formant;
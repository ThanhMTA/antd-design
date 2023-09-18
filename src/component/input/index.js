import React, { useState } from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './input.css';

const InputAnt = () => {
    return (
        <>
            <Input.Search
                placeholder='name' /* chu an */
                maxLength={10} /* so tu*/
                prefix={<UserOutlined />} /* icon*/
                allowClear /* them dau x de xoa het cac string da nhap*/
                className='input1'
            ></Input.Search>
        </>
    )
}
export default InputAnt;



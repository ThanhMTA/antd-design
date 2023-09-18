import React, { useState } from 'react';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons'
import './button.css'


const ButtonAnt = () => {
    const [loading, setLoading] = useState(false)
    const onButtonClick = (e) => {
        alert('thanh')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }
    return (
        <>
            <Button type='link' herf='https://www.youtube.com/watch?v=-R2nRzsytig&list=PL-JTnqZPF5z2qTGwNkYln3m0pA0qfgHFR&index=2&ab_channel=CodeWithAamir'> button 1</Button>
            <Button
                type='primary'

                loading={loading}
                icon={<PoweroffOutlined />}
                onClick={onButtonClick}
                style={{ backgroundColor: 'pink', color: 'red' }}
                className='button2'
            >button 2</Button>
        </>
    )
}
export default ButtonAnt;
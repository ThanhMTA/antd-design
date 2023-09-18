import React from 'react';
import './select.css';
import { Select } from 'antd';
const Selectant = () => {

    const fruits = ["banana", "cherry", "orange"]


    return (
        <>
            <p> which is your favorite fruit </p>
            <Select
            className='select'
            placeholder ='select fruit'
            allowClear
            mode='multiple'
            maxTagCount={2}
            >
                {fruits.map((fruit, index) => {
                    return <Select.Option
                        key={index}
                        value={fruit}
                    ></Select.Option>
                })}
            </Select>

        </>
    )
}
export default Selectant;
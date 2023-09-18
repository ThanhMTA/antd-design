import {Table} from 'antd';
import './table.css'


const Tableant =()=>{
   const data =[
    {
        name:'name1',
        age:10,
        adress:"Nghe an ",
        Key:'1'
    },
    {
        name:'name2',
        age:101,
        adress:"Nghe an ",
        Key:'2'
    },
    {
        name:'name3',
        age:14,
        adress:"Nghe an ",
        Key:'3'
    }

   ]

    const columns=[
        {
        title:'Name',
        dataIndex:'name',
        key:'key'

    },
    {
        title:'Age',
        dataIndex:'age',
        key:'key'

    }, 
    {
        title:'Address',
        dataIndex:'adress',
        key:'key'

    }
]
    return (
        <>
        <Table
        dataSource={data}
        columns={columns}

        >

        </Table>
        </>
    )
}
export default Tableant;
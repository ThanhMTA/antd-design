import { Table, Tag } from 'antd';
import './table.css'
import { useEffect, useState } from 'react';


const TableSelectant = () => {
   const [AlreadySelectRow, setAlreadySelectRow]= useState(['1','3'])

   const dataSource= [
        {
            id: '1',
            name: 'thanh',
            grade: 'A',
            key: '1'

        },
        {
            id: '2',
            name: 'Trang',
            grade: 'A+',
            key: '2'

        },
        {
            id: '3',
            name: 'Hoa',
            grade: 'B',
            key: '3'

        },
        {
            id: '4',
            name: 'An',
            grade: 'C',
            key: '4'

        },
        {
            id: '5',
            name: 'Linh',
            grade: 'A',
            key: '5'

        },


    ]
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',



        },
        {
            title: 'Name',
            dataIndex: 'name',



        },
        {
            title: 'Grade',
            dataIndex: 'grade',

            render: (tag) => {
                const color = tag.includes('A') ? 'Green' : tag.includes('B') ? 'Blue' : 'red'
                return <Tag color={color} key={tag}>{tag}</Tag>
            }


        }
    ]
    return (
        <>
            <Table
               
                dataSource={dataSource}
                columns={columns}
                rowSelection={{
                    type:'checkbox',
                    selectedRowKeys:AlreadySelectRow,
                    onChange:(keys)=> {
                        setAlreadySelectRow(keys)
                    }, 
                    // getCheckboxProps:(record) => ({
                    //     disabled:record.grade==='C'
                    // }), 
                   selections:[
                    Table.SELECTION_NONE, 
                    Table.SELECTION_ALL, 
                    Table.SELECTION_INVERT,
                    {
                        key:'even',
                        text:'select even rows',
                        onSelect:(allkeys)=>{
                            const selectedKey = allkeys.filter(key =>{
                               const isExcellent= dataSource.find(student =>{
                                    return student.key==key && student.grade.includes('A')
                                })
                                return isExcellent;
                            })
                            setAlreadySelectRow(selectedKey)
                        }
                    }
                    
                   ]
                }}
          
            >

            </Table>
        </>
    )
}
export default TableSelectant;
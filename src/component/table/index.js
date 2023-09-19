import { Table } from 'antd';
import './table.css'
import { useEffect, useState } from 'react';


const Tableant = () => {
    const [loading, setLoading] = useState(false)

    const [dataSource, setDataSource] = useState([])
    const [page, setPage] = useState(10)
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => {
                setDataSource(data)
            })
            .catch(err => {

            }).finally(() => {
                setLoading(false)
            })
    }, [])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: '1',


        },
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: '2',
            sorter: (record1, record2) => {
                return record1.userId > record2.userId
            }

        },
        {
            title: 'Status',
            dataIndex: 'completed',
            key: '3',
            render: (completed) => {
                return <p>{completed ? 'Complete' : 'In Progress'}</p>
            },
            filters: [
                { text: 'Complete', value: true },
                { text: 'In Progress', value: false },

            ],
            onFilter: (value, record) => {
                return record.completed === value
            }

        }
    ]
    return (
        <>
            <Table
                loading={loading}
                dataSource={dataSource}
                columns={columns}
                pagination={
                    {
                        current: page,
                        pageSize: pageSize,
                        total: 500,
                        onChange: (page, pageSize) => {
                            setPage(page);
                            setPageSize(pageSize)
                        }
                    }
                }

            >

            </Table>
        </>
    )
}
export default Tableant;
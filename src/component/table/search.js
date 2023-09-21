import { Button, Input, Table } from 'antd';
import './table.css'
import { useEffect, useState, React } from 'react';
import { SearchOutlined } from '@ant-design/icons'


const TableSearchant = () => {
    const [loading, setLoading] = useState(false)

    const [dataSource, setDataSource] = useState([])
    const [page, setPage] = useState(10)
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
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
            title: 'Name',
            dataIndex: 'name',
            key: '2',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
                return <>
                    <Input
                        autoFocus
                        placeholder='name'
                        value={selectedKeys[0]}
                        onPressEnter={() => {
                            confirm()
                        }}
                        onBlur={() => {
                            confirm()

                        }}
                        onChange={(e) => {
                            setSelectedKeys(e.target.value ? [e.target.value] : [])
                        }}
                    ></Input>
                    <Button
                        onClick={() => { confirm() }}
                        type='primary'
                    >Search</Button>
                    <Button
                        onClick={() => {
                            clearFilters()
                            confirm()
                        }}
                        type='danger'
                    >Reset</Button>
                </>
            },
            filterIcon: () => {
                return <SearchOutlined />;
            },
            onFilter: (value, record) => {
                return record.name.toLowerCase().includes(value.toLowerCase())
            }


        },
        {
            title: 'User Name',
            dataIndex: 'username',
            key: '3',


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
export default TableSearchant;
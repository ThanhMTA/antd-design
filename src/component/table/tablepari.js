import { Table } from 'antd';
import './table.css'
import { useEffect, useState } from 'react';


const TablePagination = () => {
    const [loading, setLoading] = useState(false)

    const [dataSource, setDataSource] = useState([])
    const [totalPage, setTotalPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        fetchRecords(1);
    }, [])
    const fetchRecords = (page) => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                res.json().then((response) => {
                    console.log(dataSource)
                    setDataSource(response.data)
                    setTotalPage(response.totalPage)
                    setLoading(false)
                })
            })

    }

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


        },
        {
            title: 'Status',
            dataIndex: 'completed',
            key: '3',


        }
    ]
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >

            </div>
            <Table
                loading={loading}
                dataSource={dataSource}
                columns={columns}
                // pagination={{
                //     pageSize: 10,
                //     total: totalPage,
                //     onChange: (page) => {
                //         fetchRecords(page)
                //     }
                // }
                // }


            >

            </Table>
        </>
    )
}
export default TablePagination;
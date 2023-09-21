import { Button, Modal, Table, Tag, Input } from 'antd';
import './table.css'
import { useEffect, useState } from 'react';
import { EditTwoTone, DeleteOutlined } from '@ant-design/icons';

const TableAddant = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [Editing, setEditing] = useState(null)
    const [dataSource, setDataSourse] = useState([{
        id: '1',
        name: 'thanh',
        email: 'thanh@gmail.com',
        address: 'nghe an'

    },
    {
        id: '2',
        name: 'Trang',
        email: 'Trang@gmail.com',
        address: 'nghe an'

    },
    {
        id: '3',
        name: 'Hoa',
        email: 'Hoa@gmail.com',
        address: 'nghe an'

    },
    {
        id: '4',
        name: 'An',
        email: 'thanh@gmail.com',
        address: 'nghe an'

    },
    {
        id: '5',
        name: 'Linh',
        email: 'thanh@gmail.com',
        address: 'nghe an'

    },
    ])
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id',




        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name',



        },
        {
            key: '3',
            title: 'Address',
            dataIndex: 'address',




        },
        {
            key: '4',
            title: 'Email',
            dataIndex: 'email',



        },
        {
            key: '5',
            title: 'Action',
            render: (record) => {
                return <>
                    <EditTwoTone onClick={() => {onEdit(record)}} />
                    <DeleteOutlined onClick={() => { onDelete(record) }} style={{ color: 'red' }} />

                </>
            }



        }
    ]
    const onAddStudent = () => {
        const randomNumber = parseInt(Math.random() * 1000)
        const newStudent = {
            id: randomNumber,
            name: 'Linh',
            email: 'thanh@gmail.com',
            address: 'nghe an'

        }
        setDataSourse((pre) => {
            return [...pre, newStudent]
        })
    }
    const onDelete = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this studen",
            okText: 'Yes',
            okType: 'danger',
            onOk: () => {
                setDataSourse(pre => {
                    return pre.filter(student => student.id !== record.id)
                })
            }
        })

    }
    const onEdit = (record) => {
        setIsEditing(true)
        setEditing({ ...record })
    }
    const resetEditing = () => {
        setIsEditing(false)
        setEditing(null)
    }
    return (
        <>
            <div>
                <Button onClick={onAddStudent}>Add a new Student</Button>
                <Table

                    dataSource={dataSource}
                    columns={columns}




                >

                </Table>
                <Modal
                    title='Edit student'
                    visible={isEditing}
                    // visible
                    okText="Save"
                    // okType=''
                    onCancel={() => {
                        resetEditing()
                    }}
                    onOk={() => {
                        setDataSourse(pre => {
                            return pre.map((student) => {
                                if (student.id === Editing.id) {
                                    return Editing
                                }
                                else {
                                    return student
                                }
                            })
                        })

                        resetEditing()
                    }}

                >
                    <Input value={Editing?.name} onChange={(e) => {
                        setEditing((pre )=> {
                            return { ...pre, name: e.target.value };
                        });
                    }} />
                    <Input value={Editing?.address} onChange={(e) => {
                        setEditing((pre) => {
                            return { ...pre, address: e.target.value }
                        });
                    }} />
                    <Input value={Editing?.email} onChange={(e) => {
                        setEditing((pre) => {
                            return { ...pre, email: e.target.value }
                        });
                    }} />

                </Modal>

            </div>

        </>
    )
}
export default TableAddant;
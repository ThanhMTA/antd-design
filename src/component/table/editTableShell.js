import { Button, Form, Input, Table } from "antd";
import { useEffect, useState, React } from 'react';

const EditTableShell = () => {
    const [dataSource, setDataSource] = useState([]);
    const [editRow, setEditRow] = useState(null)
    const [form] = Form.useForm()
    useEffect(() => {
        const data = [];
        for (let index = 0; index < 7; index++) {
            data.push(
                {
                    key: `${index}`,
                    name: `Name ${index}`,
                    address: `Address ${index}`
                });
        }
        setDataSource(data);

    }, []
    )
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => {
                if (editRow === record.key) {
                    return (
                        <>
                            <Form.Item
                                name="name"
                                rules={[{
                                    required: true,
                                    message: 'please enter your data'
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                        </>
                    )



                }
                else {
                    return <p>{text}</p>
                }
            }
        },
        {
            title: 'Address',
            dataIndex: 'address',
            render: (text, record) => {
                if (editRow === record.key) {
                    return (
                        <Form.Item
                            name="address"
                            rules={[{
                                required: true,
                                message: 'please enter your data'
                            }]}
                        >
                            <Input />
                        </Form.Item>
                    )

                }
                else {
                    return <p>{text}</p>
                }
            }
        },
        {
            title: 'Actions',
            render: (_, record) => {
                return <>
                    <Button type='link'
                        onClick={() => {
                            setEditRow(record.key);
                            form.setFieldsValue({
                                name: record.name,
                                address: record.address,
                            });
                        }}
                    >Edit</Button>
                    <Button type='link' htmlType="submit">Save</Button>

                </>
            }
        }
    ]
    const onFinish = (values) => {
        const updatedDataSource = [...dataSource]
        updatedDataSource.splice(editRow, 1, {
            key: editRow,
            name: form.getFieldValue('name'), // Sử dụng form.getFieldValue để lấy giá trị
            address: form.getFieldValue('address'),
        })
        setDataSource(updatedDataSource);
        setEditRow(null);
        console.log({ updatedDataSource })
    }
    return (
        <>
            <Form form={form} onFinish={onFinish}>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                >

                </Table>

            </Form>
        </>
    )
}
export default EditTableShell;
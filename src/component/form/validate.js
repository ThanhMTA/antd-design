import { Button, Checkbox, DatePicker, Form, Input, Select } from 'antd'
const FormValAntd = () => {
    return (
        <>
            <Form autoComplete='off'
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
                onFinish={(values) => {
                    console.log({ values });
                }}
            >

                <Form.Item
                    name='fullName'
                    label='Full Name'
                    rules={[
                        {
                            required: true,
                            message: 'please enter your name',
                        },
                        { whitespace: true },
                        { min: 3 }
                    ]}
                    hasFeedback
                >
                    <Input placeholder='fullName' />
                </Form.Item>
                <Form.Item
                    name='email'
                    label='Email'
                    rules={[
                        {
                            required: true,

                        },
                        { type: 'email', message: 'please enter a valid email' }
                    ]}
                    hasFeedback
                >
                    <Input placeholder='your email' />
                </Form.Item>
                <Form.Item
                    name='password'
                    label='Password'
                    rules={[
                        {
                            required: true,

                        },
                        { min: 6 },
                        // {
                        //     validator: (_, value) =>
                        //         value && value.inclues('A') ? Promise.resolve() : Promise.reject('Password dose not match..')
                        // }
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder='Password' />
                </Form.Item>
                <Form.Item
                    name='confirmPassword'
                    label='Confirm Password'
                    dependencies={['password']}

                    rules={[
                        {
                            required: true,

                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Hai mật khẩu bạn nhập không khớp.');
                            },
                        }),
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder='Confirm Password' />
                </Form.Item>
                <Form.Item
                    name='gender'
                    label='Gender'
                    requiredMark='optional'

                >
                    <Select placeholder='select your gender'>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Felale</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='dob'
                    label='Date of Birth'
                    rules={[
                        {
                            required: true,
                            message: 'please chose your birth',
                        },

                    ]}
                    hasFeedback
                >
                    <DatePicker style={{ width: '100%' }} picker="date" placeholder="chose date of birthday"></DatePicker>
                </Form.Item>
                <Form.Item
                    name='website'
                    label='website'
                    rules={[
                        {
                            type: 'url',
                            message: 'please enter your url'

                        }

                    ]}
                    hasFeedback
                >
                    <Input placeholder='website' />
                </Form.Item>
                <Form.Item
                    name='agreement'
                    wrapperCol={{ span: 24 }}
                    valuePropName='checked'
                    rules={[
                        {
                            required: true,
                            message: 'you need to agree with our terms and conditios',
                        }

                    ]}
                    hasFeedback
                >
                    <Checkbox>
                        {" "}
                        Agree to our
                        <a href='#'> link</a>
                    </Checkbox>

                </Form.Item>
                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button block type='primary' htmlType='submit'>Regender</Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default FormValAntd;
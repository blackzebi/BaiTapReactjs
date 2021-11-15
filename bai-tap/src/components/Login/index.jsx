import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();

    const onFinish = (values) => {
        const accounts = require('../../Data/data.json');

        accounts.forEach((account) => {
            if (values.username === account.username && values.password === account.password) {
                return history.push("/Employees");
            }
        });
        if (history.location.pathname !== "/Employees")
            message.warning('Nhập sai thông tin, Nhập lại đi');
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100vh',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
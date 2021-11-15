import React, { useState } from 'react';
import { message, Radio, Button, Form, Space, Row, Col, Input, InputNumber, Select } from "antd";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
// import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const IInputNumber = styled(InputNumber)`
    .ant-input-number-handler-wrap {
        display: none;
    }
`;

const { Option } = Select;


function EmployeesAdd({ employees, addEmployee }) {
    const history = useHistory();
    const [employeeCode, setEmployeeCode] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [employeePhone, setEmployeePhone] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [employeeType, setEmployeeType] = useState("");
    const [tuyen, setTuyen] = useState("");
    const [status, setStatus] = useState("");
    // const [tuyenValue, setTuyenValue] = useState("");

    const handleOnClick = () => {
        if (!employeeCode || !employeeName ||
            !employeePhone || employeePhone < 1000000000 || !employeeEmail ||
            !employeeType || !status) {
            return message.warning('Nhập thông tin đi chứ');
        }

        const data = {
            key: employees.length > 0 ? employees[employees.length - 1].stt + 1 : 0,
            stt: employees.length > 0 ? employees[employees.length - 1].stt + 1 : 0,
            employeeCode,
            employeeName,
            employeePhone,
            employeeEmail,
            employeeType,
            tuyen,
            status
        }

        addEmployee(data);
        message.success("added successfully !");
        history.push("/employees")
    }

    const status1 = [
        {
            key: 1,
            name: 'hoạt động'
        },
        {
            key: 2,
            name: 'không hoạt động'
        }
    ]
    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <div>
            <div>
                <p>Tạo nhân viên bán hàng mới</p>
            </div>

            <Form layout="vertical" onFinish={onFinish}>
                <Row>
                    <Col span={20}></Col>
                    <Col span={4}>
                        <Button
                            title={"Lưu"}
                            htmlType="submit"
                            style={{ margin: '4px' }}
                            onClick={handleOnClick}
                        >
                            Lưu
                        </Button>
                        <Button
                            title={"Hủy"}
                            onClick={() => history.push("/employees")}
                            style={{ margin: '4px' }}
                        >
                            Hủy
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ background: '#fff', boxShadow: '1px 1px 10px 1px rgba(123, 255, 255, 0.8)' }}
                        span={24}
                    >
                        <Row>
                            <Col span={16}>
                                <Row style={{ paddingLeft: '8px' }}>
                                    <p style={{ fontWeight: "bold" }}>Thông tin cá nhân</p>
                                </Row>
                                <Row>
                                    <Col span={12} style={{ padding: '0 8px' }}>
                                        <Form.Item
                                            label="Họ & tên"
                                            name="employees_name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Nhập họ và tên đi'
                                                }
                                            ]}
                                        >
                                            <Input
                                                placeholder="Nhập họ tên nhân viên"
                                                onChange={e => setEmployeeName(e.target.value)}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12} style={{ padding: '0 8px' }}>
                                        <Form.Item
                                            label="Mã nhân viên"
                                            name="employees_code"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Nhập mã nhân viên'
                                                }
                                            ]}
                                        >
                                            <Input placeholder="Nhập mã nhân viên"
                                                onChange={e => setEmployeeCode(e.target.value)}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12} style={{ padding: '0 8px' }}>
                                        <Form.Item
                                            label="Nhập số điện thoại"
                                            name="employees_phone"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Nhập số điện thoại'
                                                },
                                                {
                                                    type: 'number', min: 1000000000, message: 'không được ít hơn 10 ký tự'
                                                }
                                            ]}
                                        >
                                            <IInputNumber placeholder="Nhập số điện thoại"
                                                onChange={e => setEmployeePhone(e)}
                                                controls={false}
                                                style={{ width: "100%" }}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12} style={{ padding: '0 8px' }}>
                                        <Form.Item
                                            label="Nhập Email"
                                            name="employees_email"

                                            rules={[
                                                {
                                                    type: "email",
                                                    message: "không đúng định dạng (abc@gmail.com)"
                                                },
                                                {
                                                    // required: this.state.checkNick,
                                                    required: true,
                                                    max: 50,

                                                    message: "nhập địa chỉ email, không quá 50 kí tự"
                                                }
                                            ]}
                                        >
                                            <Input placeholder="Nhập Email"
                                                onChange={e => setEmployeeEmail(e.target.value)}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12} style={{ padding: '0 8px' }}>
                                        <Form.Item
                                            label="Nhập tuyến"
                                            name="Tuyen"
                                        // rules={[
                                        //     {
                                        //         required: true,
                                        //         message: 'Nhập Tuyến phụ thuộc'
                                        //     }
                                        // ]}
                                        >
                                            <Input placeholder="Nhập Tuyến phụ thuộc"
                                                // defaultValue={}
                                                onChange={e => setTuyen(e.target.value)}
                                            />
                                            {/* <Form.List name="users">
                                                {(fields, { add, remove }) => (
                                                    <>
                                                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                                                <Form.Item
                                                                    {...restField}
                                                                    name={[name, 'last']}
                                                                    fieldKey={[fieldKey, 'last']}
                                                                    rules={[{ required: true, message: 'Nhập lại tuyến trực thuộc' }]}
                                                                >
                                                                    <Input
                                                                        placeholder="tạo tuyến trực thuộc"
                                                                        onChange={(e) => setTuyenValue(e.target.value)}
                                                                        onPressEnter={(e) => console.log(e.target.value)}
                                                                    />
                                                                </Form.Item>
                                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                                            </Space>
                                                        ))}
                                                        <Form.Item>
                                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                                Tạo tuyến trực thuộc
                                                            </Button>
                                                        </Form.Item>
                                                    </>
                                                )}
                                            </Form.List> */}
                                        </Form.Item>
                                    </Col>
                                    <Col span={12} style={{ padding: '0 8px' }}>
                                        <Form.Item
                                            label="Nhập trạng thái"
                                            name="status"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Nhập trạng thái'
                                                }
                                            ]}
                                        >
                                            {/* <Input placeholder="Nhập trạng thái"
                                                onChange={e => setStatus(e.target.value)}
                                            /> */}
                                            <Select onChange={e => setStatus(e)}>
                                                <Option value={status1[0].key}>{status1[0].name}</Option>
                                                <Option value={status1[1].key}>{status1[1].name}</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={8}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start', borderLeft: '1px solid #ccc', paddingLeft: '8px' }}
                            >
                                <p style={{ fontWeight: 'bold', float: 'left' }}>Thông tin vận hành</p>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Form.Item
                                        label="Phân loại nhân viên"
                                        name="employees_type"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Lựa chọn loại nhân viên'
                                            }
                                        ]}
                                        flex-direction="column"
                                    >
                                        <Radio.Group onChange={e => setEmployeeType(e.target.value)}>
                                            <Space style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                                                <Radio value={1}>Nhân viên bán hàng</Radio>
                                                <Radio value={2}>Nhân viên Sales Rep</Radio>
                                                <Radio value={3}>Nhân viên 3 Cùng</Radio>
                                            </Space>
                                        </Radio.Group>
                                    </Form.Item>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

const mapStateToProps = (state) => ({
    employees: state,
});

const mapDispatchToProps = (dispatch) => ({
    addEmployee: (data) => {
        dispatch({ type: "ADD_EMPLOYEE", payload: data });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesAdd);
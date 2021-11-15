import React, { useState, useEffect } from 'react';
import { message, Radio, Button, Form, Space, Row, Col, Input, InputNumber, Select } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const IInputNumber = styled(InputNumber)`
    .ant-input-number-handler-wrap {
        display: none;
    }
`;

const { Option } = Select;

function EmployeesEdit({ employees, updateEmployee }) {
    const history = useHistory();
    const { id } = useParams();
    const [employeeName, setEmployeeName] = useState("");
    const [employeePhone, setEmployeePhone] = useState();
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [employeeType, setEmployeeType] = useState("");
    const [tuyen, setTuyen] = useState("");
    const [status, setStatus] = useState("");
    const [stt, setStt] = useState();
    const [employeeCode, setEmployeeCode] = useState("")

    const currentEmployee = employees[id];
    useEffect(() => {
        setStt(currentEmployee.stt);
        setEmployeeCode(currentEmployee.employeeCode);
        setEmployeeName(currentEmployee.employeeName);
        setEmployeePhone(currentEmployee.employeePhone);
        setEmployeeEmail(currentEmployee.employeeEmail);
        setEmployeeType(currentEmployee.employeeType);
        setTuyen(currentEmployee.tuyen);
        setStatus(currentEmployee.status);
    }, [currentEmployee]);
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
        if (values.employeeEmail === "" || values.employeeName === "" || values.employeePhone === "" || values.employeeType === "" || values.Tuyen === "" || values.status === "") {
            return message.warning('Nhập đầy đủ lại nào');
        }
        const data = {
            stt,
            employeeCode,
            employeeName,
            employeePhone,
            employeeEmail,
            employeeType,
            tuyen,
            status
        }

        updateEmployee(data);
        message.success("updated successfully !")
        history.push('/employees')
    }
    return (
        <div>
            <div>
                <p>Chỉnh sửa nhân viên</p>
            </div>

            <Form layout="vertical" onFinish={onFinish}>
                <Row>
                    <Col span={20}></Col>
                    <Col span={4}>
                        <Button
                            title={"Lưu"}
                            htmlType="submit"
                            style={{ margin: '4px' }}
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
                                            name="employeeName"
                                        >
                                            <Input
                                                placeholder="Nhập họ tên nhân viên"
                                                defaultValue={employees[id].employeeName}
                                                value={employeeName}
                                                onChange={e =>
                                                    setEmployeeName(e.target.value)
                                                }
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12} style={{ padding: '0 8px' }}>
                                        <Form.Item
                                            label="Mã nhân viên"
                                            name="employeeCode"
                                        >
                                            <Input
                                                placeholder="Nhập mã nhân viên"
                                                defaultValue={employees[id].employeeCode}
                                                disabled
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12} style={{ padding: '0 8px' }}>
                                        <Form.Item
                                            label="Nhập số điện thoại"
                                            name="employeePhone"
                                        >
                                            <IInputNumber
                                                placeholder="Nhập số điện thoại"
                                                defaultValue={employees[id].employeePhone}
                                                style={{ width: "100%" }}
                                                onChange={e => setEmployeePhone(e)}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12} style={{ padding: '0 8px' }}>
                                        <Form.Item
                                            label="Nhập Email"
                                            name="employeeEmail"
                                        // initialValue={"abc@gmai.com"}
                                        // rules={[
                                        //     {
                                        //         type: "email",
                                        //         message: "không đúng định dạng (abc@gmail.com)"
                                        //     },
                                        //     {
                                        //         // required: this.state.checkNick,
                                        //         required: true,
                                        //         max: 50,

                                        //         message: "nhập địa chỉ email, không quá 50 kí tự"
                                        //     }
                                        // ]}
                                        >
                                            <Input placeholder="Nhập Email"
                                                defaultValue={employees[id].employeeEmail}

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
                                        >
                                            <Input placeholder="Nhập Tuyến phụ thuộc"
                                                defaultValue={employees[id].tuyen}

                                                onChange={e => setTuyen(e.target.value)}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12} style={{ padding: '0 8px' }}>
                                        <Form.Item
                                            label="Nhập trạng thái"
                                            name="status"
                                        >
                                            {/* <Input placeholder="Nhập trạng thái"
                                                defaultValue={employees[id].status}
                                                onChange={e => setStatus(e.target.value)}
                                            /> */}
                                            <Select

                                                defaultValue={employees[id].status}
                                                onChange={e => setStatus(e)}>
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
                                        name="employeeType"
                                        flex-direction="column"
                                    >
                                        <Radio.Group
                                            defaultValue={employees[id].employeeType}
                                            disabled={tuyen !== "" ? true : false}
                                            onChange={e => setEmployeeType(e.target.value)}

                                        >
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
    updateEmployee: (data) => {
        dispatch({ type: "EDIT_EMPLOYEE", payload: data });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesEdit);
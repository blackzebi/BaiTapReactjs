import React from 'react';
import { Row, Col, Button, message } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";


function EmployeesDetail({ employees, deleteEmployee }) {
    const history = useHistory();
    const { id } = useParams();
    const handleEdit = () => {
        history.push(`/Employees/EmployeesEdit/${id}`)
    }
    console.log(id);
    console.log(employees);
    const handleCancel = () => {
        history.push('/Employees')

    }
    const handleDelete = () => {
        if (employees[id].tuyen !== "") {
            return message.warning('Có tuyến trực thuộc ko xóa được');
        }
        deleteEmployee(Number(id))
        history.push('/Employees')
    }

    return (
        <Row gutter={[0, 24]}>
            <Col span={24}>
                <div>
                    <p style={{ color: '#ccc', fontSize: 22 }}>
                        Chi tiết nhân viên
                    </p>
                </div>
                <div>
                    <Button
                        onClick={handleEdit}
                        style={{ margin: '4px' }}
                    >
                        Chỉnh sửa
                    </Button>
                    <Button
                        onClick={handleDelete}
                        style={{ margin: '4px' }}
                    >
                        Xóa
                    </Button>
                    <Button
                        onClick={handleCancel}
                        style={{ margin: '4px' }}
                    >
                        Hủy bỏ
                    </Button>
                </div>
            </Col>
            <Col span={24}>
                <div style={{ width: "100%" }} className="shadow">
                    <Row type="flex">
                        <Col
                            span={24}
                            style={{
                                backgroundColor: "white",
                            }}
                        >
                            <div style={{ padding: "30px 40px" }}>
                                <Row gutter={[0, 12]}>
                                    <Col span={24}>
                                        <p style={{ color: "black", fontSize: 16 }}>
                                            Thông tin cá nhân
                                        </p>
                                    </Col>
                                    <Col span={24}>
                                        <div>
                                            <span style={{ fontWeight: 500 }}>Họ & tên: </span>
                                            <span>
                                                {employees[id].employeeName}
                                            </span>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={12}>
                                                <div>
                                                    <span style={{ fontWeight: 500 }}>Số điện thoại: </span>
                                                    <span>
                                                    </span>
                                                </div>
                                            </Col>
                                            <Col span={12}>
                                                <div>
                                                    <span style={{ fontWeight: 500 }}>Email: </span>
                                                    <span>
                                                        {employees[id].employeeEmail}
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col span={24}>
                                        <Row>
                                            <Col span={12}>
                                                <div>
                                                    <span style={{ fontWeight: 500 }}>Mã nhân viên: </span>
                                                    <span>
                                                        {employees[id].employeeCode}
                                                    </span>
                                                </div>
                                            </Col>
                                            <Col span={12}>
                                                <div>
                                                    <span style={{ fontWeight: 500 }}>Trạng thái: </span>
                                                    <span>
                                                        {
                                                            employees[id].status === 1
                                                                ? "hoạt động"
                                                                : "không hoạt động"
                                                        }
                                                    </span>
                                                </div>
                                            </Col>

                                        </Row>
                                    </Col>


                                    <Col span={24}>
                                        <Row>
                                            <Col span={12}>
                                                <div>
                                                    <span style={{ fontWeight: 500 }}>Tuyến: </span>
                                                    <span>
                                                        {employees[id].tuyen}
                                                    </span>
                                                </div>
                                            </Col>
                                            <Col span={12}>
                                                <div>
                                                    <span style={{ fontWeight: 500 }}>Loại NV: </span>
                                                    <span>
                                                        {
                                                            employees[id].employeeType === 1
                                                                ? "NV bán hàng"
                                                                : employees[id].employeeType === 2
                                                                    ? "NV Sales Rep"
                                                                    : employees[id].employeeType === 3
                                                                        ? "NV 3 Cùng"
                                                                        : "-"
                                                        }
                                                    </span>
                                                </div>
                                            </Col>

                                        </Row>
                                    </Col>

                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

const mapStateToProps = (state) => ({
    employees: state,
});

const mapDispatchToProps = dispatch => ({
    deleteEmployee: key => {
        dispatch({ type: "DELETE_EMPLOYEE", payload: key })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesDetail);
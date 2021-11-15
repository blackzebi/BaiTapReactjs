import React, { useState } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, message, Popconfirm } from 'antd';


function Employees({ employees, deleteEmployee }) {
    const history = useHistory();
    const [indexRowKey, setIndexRowKey] = useState([])
    const columns = [
        {
            title: "STT",
            dataIndex: "stt",
            key: "stt",

        },
        {
            title: "Mã nhân viên",
            dataIndex: "employeeCode",
            key: "employeeCode"
        },
        {
            title: "Tên nhân viên",
            dataIndex: "employeeName",
            key: "employeeName"
        },
        {
            title: "Số điện thoại",
            dataIndex: "employeePhone",
            key: "employeePhone"
        },
        {
            title: "Email",
            dataIndex: "employeeEmail",
            key: "employeeEmail"
        },
        {
            title: "Loại nhân viên",
            dataIndex: "employeeType",
            key: "employeeType",
            render: (employees_type) => (
                <span>
                    {employees_type === 1
                        ? "NV bán hàng"
                        : employees_type === 2
                            ? "NV Sales Rep"
                            : employees_type === 3
                                ? "NV 3 Cùng"
                                : "-"
                    }
                </span>
            )
        },
        {
            title: "Tuyến",
            dataIndex: "tuyen"

        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <span>
                    {
                        status === 1
                            ? "Hoạt động"
                            : "Không hoạt động"
                    }
                </span>
            )
        }
    ];

    const handleCreate = () => {
        history.push('/Employees/EmployeesAdd');
    }
    const handleDelete = (e) => {
        console.log('xóa')
        deleteEmployee(indexRowKey);

    }
    console.log(indexRowKey);
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setIndexRowKey(selectedRowKeys);
        },
        getCheckboxProps: (record) => (
            {
                disabled: record.tuyen !== "",
                name: console.log(record),
            }),
    };
    return (
        <div>
            <div>
                <p>Danh sách nhân viên</p>
                <button onClick={handleCreate}>
                    Tạo mới
                </button>
                <Popconfirm
                    title="có đồng ý để xóa không?"
                    okText="Đồng ý"
                    cancelText="Hủy"
                    onConfirm={() => {
                        if (indexRowKey.length < 1) {
                            return message.warning("Vui lòng chọn nhân viên cần xóa")
                        }
                        else {
                            handleDelete()
                        }
                    }}
                >
                    <button>
                        xóa
                    </button>
                </Popconfirm>
            </div>
            <Table
                rowSelection={{ type: "checkbox", ...rowSelection, }}
                columns={columns}
                dataSource={employees}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => {
                            history.push(`/Employees/EmployeesDetail/${rowIndex}`)
                        }
                    }
                }}
            />
            <div>

            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    employees: state,
});

const mapDispatchToProps = dispatch => ({
    deleteEmployee: key => {
        dispatch({ type: "DELETE_EMPLOYEE_LIST", payload: key })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
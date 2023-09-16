import React, { useState } from 'react';
import axios from '../../../config/axios';
import './DetailTable.css'

function DetailTable() {
    const [tableContents, setTableContents] = useState([]);

    axios
        .get("cotangten")
        .then((res) => {
            setTableContents(res.data)
        })
        .catch(err => {
            throw err;
        })

    const tbodys = tableContents.map((props, index) => {
        return (
            <tr id={index} key={index} >
                <td>{index+1}</td>

                <td>{props.tendoituong}</td>
                <td>{props.tendoituong}</td>
                <td>{props.diachi}</td>
                <td>{props.kinhdo}</td>
                <td>{props.vido}</td>
                <td>{props.donviquanly}</td>
                <td>{props.chusohuucot}</td>
                <td>{props.tenquanhuyen}</td>
                <td>{props.loaicot}</td>
                <td>{props.kieucot}</td>
                <td>{props.chieucao}</td>
                <td>{props.chieucaoct}</td>
                <td>{props.khanangdungchung}</td>
                <td>{props.doanhnghiepdungchung}</td>
                <td>{props.ngayhoatdong}</td>
                <td>{props.sogiaychungnhankiemdinh}</td>
                <td>{props.diachigiaycnkiemdinh}</td>
                <td>{props.chungloaithietbiphat}</td>
                <td>{props.soantenphat}</td>
                <td>{props.somayphat}</td>
                <td>{props.tongcongsuatphattunganten}</td>
                <td>{props.bangtanhoatdong}</td>
                <td>{props.docaotunganten}</td>
                <td>{props.gioihanantoan}</td>
                <td>{props.chenhlechdocao}</td>
                <td>{props.ngaycapgiaychungnhan}</td>
                <td>{props.cogiatriden}</td>
                <td>{props.tinhtranggcn}</td>
                <td>{props.tailieu}</td>

            </tr>
        )
    })

    return (
        <div className='scroll-table'>
            <table className="table table-striped">
                <thead>
                    <tr className='table-head'>
                    <th>STT</th>
                        <th>Mã cột angten</th>
                        <th>Tên cột angten</th>
                        <th>Địa chỉ</th>
                        <th>Kinh độ</th>
                        <th>Vĩ độ</th>
                        <th>Đơn vị sử dụng</th>
                        <th>Chủ sở hữu cột</th>
                        <th>Huyện/ Thành phố</th>
                        <th>Loại cột angten</th>
                        <th>Kiểu cột</th>
                        <th>Chiều cao cột (m)</th>
                        <th>Chiều cao công trình (m)</th>
                        <th>Khả năng dùng chung</th>
                        <th>Doanh nghiệp dùng chung</th>
                        <th>Thời điểm đưa vào hoạt động</th>
                        <th>Số giấy chứng nhận kiểm định</th>
                        <th>Địa chỉ giấy chứng nhận kiểm định</th>
                        <th>Chủng loại thiết bị phát</th>
                        <th>Số angten phát</th>
                        <th>Số máy phát</th>
                        <th>Tổng công suất phát từng angten</th>
                        <th>Băng tầng hoạt động</th>
                        <th>Độ cao từng angten</th>
                        <th>Giới hạn an toàn</th>
                        <th>Chênh lệch độ cao</th>
                        <th>Ngày cấp giấy chứng nhận</th>
                        <th>Có giá trị đến</th>
                        <th>Tình trạng GCN</th>
                        <th>Tài liệu</th>
                    </tr>
                </thead>
                <tbody >
                    {tbodys}
                </tbody>
            </table >
        </div>
    )
}
export default DetailTable;
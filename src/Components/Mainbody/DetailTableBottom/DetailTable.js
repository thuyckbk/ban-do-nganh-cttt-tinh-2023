import React, { useState } from 'react';
import axios from '../../../config/axios';
import './DetailTable.css'

function DetailTable(props) {
    const [tableContents, setTableContents] = useState([]);
    const [addattribute, setAddattribute] = useState({})

    axios
        .get("cotangten")
        .then((res) => {
            setTableContents(res.data)
        })
        .catch(err => {
            throw err;
        })
        
    const addattributes = (e) =>{
        const classview = e.target.className;
        tableContents.map((props, index) => {
            if(classview == index+1){
                setAddattribute(props)
            }
        })

    }
    const tbodys = tableContents.map((props, index) => {
        return (
            <tr id={index} key={index} className='detailtable-row' onClick={(e) => addattributes(e)} >
                <td className={index+1}>{index+1}</td>
                <td className={index+1}>{props.tendoituong}</td>
                <td className={index+1}>{props.tendoituong}</td>
                <td className={index+1}>{props.diachi}</td>
                <td className={index+1}>{props.kinhdo}</td>
                <td className={index+1}>{props.vido}</td>
                <td className={index+1}>{props.donviquanly}</td>
                <td className={index+1}>{props.chusohuucot}</td>
                <td className={index+1}>{props.tenquanhuyen}</td>
                <td className={index+1}>{props.loaicot}</td>
                <td className={index+1}>{props.kieucot}</td>
                <td className={index+1}>{props.chieucao}</td>
                <td className={index+1}>{props.chieucaoct}</td>
                <td className={index+1}>{props.khanangdungchung}</td>
                <td className={index+1}>{props.doanhnghiepdungchung}</td>
                <td className={index+1}>{props.ngayhoatdong}</td>
                <td className={index+1}>{props.sogiaychungnhankiemdinh}</td>
                <td className={index+1}>{props.diachigiaycnkiemdinh}</td>
                <td className={index+1}>{props.chungloaithietbiphat}</td>
                <td className={index+1}>{props.soantenphat}</td>
                <td className={index+1}>{props.somayphat}</td>
                <td className={index+1}>{props.tongcongsuatphattunganten}</td>
                <td className={index+1}>{props.bangtanhoatdong}</td>
                <td className={index+1}>{props.docaotunganten}</td>
                <td className={index+1}>{props.gioihanantoan}</td>
                <td className={index+1}>{props.chenhlechdocao}</td>
                <td className={index+1}>{props.ngaycapgiaychungnhan}</td>
                <td className={index+1}>{props.cogiatriden}</td>
                <td className={index+1}>{props.tinhtranggcn}</td>
                <td className={index+1}>{props.tailieu}</td>

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
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTable, faChevronDown, faPrint, faFileExcel, faShareNodes, faBookmark } from '@fortawesome/free-solid-svg-icons'
  // import axios from '../../../config/axios';
  import './SideBarContent.css'

const SideBarContent = (props) => {

  const [toggleState, setToggleState] = useState(1);
    // const [tableContents, setTableContents] = useState([]);

  const toggleTag = (index) => {
    setToggleState(index);
    const tabActive = document.getElementById(`${index}`);
    const line = document.getElementsByClassName("line");
    line[0].style.width = tabActive.offsetWidth + 'px';
    line[0].style.left = tabActive.offsetLeft + 'px';
  }


// const itemAttribute = (e) =>{
//     axios
//         .get("cotangten")
//         .then((res) => {
//             setTableContents(res.data)
//         })
//         .catch(err => {
//             throw err;
//         })
//         const clickedId = e.target.id;
//     const tbs = tableContents.map((props, index) => {
//         if (e==props)
//         return (
//             <tr id={index} key={index} >
//                 <td>{index+1}</td>

//                 <td>{props.tendoituong}</td>
//                 <td>{props.tendoituong}</td>
//                 <td>{props.diachi}</td>
//                 <td>{props.kinhdo}</td>
//                 <td>{props.vido}</td>
//                 <td>{props.donviquanly}</td>
//                 <td>{props.chusohuucot}</td>
//                 <td>{props.tenquanhuyen}</td>
//                 <td>{props.loaicot}</td>
//                 <td>{props.kieucot}</td>
//                 <td>{props.chieucao}</td>
//                 <td>{props.chieucaoct}</td>
//                 <td>{props.khanangdungchung}</td>
//                 <td>{props.doanhnghiepdungchung}</td>
//                 <td>{props.ngayhoatdong}</td>
//                 <td>{props.sogiaychungnhankiemdinh}</td>
//                 <td>{props.diachigiaycnkiemdinh}</td>
//                 <td>{props.chungloaithietbiphat}</td>
//                 <td>{props.soantenphat}</td>
//                 <td>{props.somayphat}</td>
//                 <td>{props.tongcongsuatphattunganten}</td>
//                 <td>{props.bangtanhoatdong}</td>
//                 <td>{props.docaotunganten}</td>
//                 <td>{props.gioihanantoan}</td>
//                 <td>{props.chenhlechdocao}</td>
//                 <td>{props.ngaycapgiaychungnhan}</td>
//                 <td>{props.cogiatriden}</td>
//                 <td>{props.tinhtranggcn}</td>
//                 <td>{props.tailieu}</td>

//             </tr>
//         )
//     })

// }
  return (
    <div>
      <div className="tabs">
        <div id='1' className={toggleState === 1 ? "tab-item active" : "tab-item"} onClick={() => toggleTag(1)}>
          <i className="tab-icon fas fa-code"></i>
          Lớp bản đồ
        </div>
        <div id='2' className={toggleState === 2 ? "tab-item active" : "tab-item"} onClick={() => toggleTag(2)}>
          <i className="tab-icon fas fa-cog"></i>
          Tìm kiếm
        </div>
        <div id='3' className={toggleState === 3 ? "tab-item active" : "tab-item"} onClick={() => toggleTag(3)}>
          <i className="tab-icon fas fa-plus-circle"></i>
          Thuộc tính
        </div>
        <div id='4' className={toggleState === 4 ? "tab-item active" : "tab-item"} onClick={() => toggleTag(4)}>
          <i className="tab-icon fas fa-pen-nib"></i>
          Đã lưu
        </div>
        <div className="line" ></div>
      </div>

      {/* <!-- Tab content --> */}
      <div className="tab-content">
        <div className={toggleState === 1 ? "tab-pane active" : "tab-pane"} >
          <ul className="list-group">
            <li className="list-group-item">
              <div className='item-list'>
                <FontAwesomeIcon icon={faChevronDown} />
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <span>Hiện trạng hạ tầng viễn thông</span></label>
              </div>
              <table className="table table-striped text-left table-list">
                <tbody>
                  <tr>
                    <td><input type='checkbox' /> <span>Cột ăng ten</span></td>
                    <td>
                      <button type="button" className={props.isDTBottomOpen ? "btn btn-outline-primary btn-sm btn-bottom-active" : "btn btn-outline-primary btn-sm" }
                        onClick={props.DTBottomOpen}
                      >
                        <FontAwesomeIcon icon={faTable} />
                      </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Trạm BTS</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.DTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Điểm dịch vụ viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.DTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Doanh nghiệp viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li className="list-group-item">
              <div className='item-list'>
                <FontAwesomeIcon icon={faChevronDown} />
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <span>Hiện trạng hạ tầng viễn thông</span></label>
              </div>
              <table className="table table-striped text-left table-list">
                <tbody>
                  <tr>
                    <td><input type='checkbox' /> <span>Cột ăng ten</span></td>
                    <td>
                      <button type="button" className="btn btn-outline-primary btn-sm"
                        onClick={props.isDTBottomOpen}
                      >
                        <FontAwesomeIcon icon={faTable} />
                      </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Trạm BTS</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Điểm dịch vụ viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Doanh nghiệp viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li className="list-group-item">
              <div className='item-list'>
                <FontAwesomeIcon icon={faChevronDown} />
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <span>Hiện trạng hạ tầng viễn thông</span></label>
              </div>
              <table className="table table-striped text-left table-list">
                <tbody>
                  <tr>
                    <td><input type='checkbox' /> <span>Cột ăng ten</span></td>
                    <td>
                      <button type="button" className="btn btn-outline-primary btn-sm"
                        onClick={props.isDTBottomOpen}
                      >
                        <FontAwesomeIcon icon={faTable} />
                      </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Trạm BTS</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Điểm dịch vụ viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Doanh nghiệp viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li className="list-group-item">
              <div className='item-list'>
                <FontAwesomeIcon icon={faChevronDown} />
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <span>Hiện trạng hạ tầng viễn thông</span></label>
              </div>
              <table className="table table-striped text-left table-list">
                <tbody>
                  <tr>
                    <td><input type='checkbox' /> <span>Cột ăng ten</span></td>
                    <td>
                      <button type="button" className="btn btn-outline-primary btn-sm"
                        onClick={props.isDTBottomOpen}
                      >
                        <FontAwesomeIcon icon={faTable} />
                      </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Trạm BTS</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Điểm dịch vụ viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Doanh nghiệp viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li className="list-group-item">
              <div className='item-list'>
                <FontAwesomeIcon icon={faChevronDown} />
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <span>Hiện trạng hạ tầng viễn thông</span></label>
              </div>
              <table className="table table-striped text-left table-list">
                <tbody>
                  <tr>
                    <td><input type='checkbox' /> <span>Cột ăng ten</span></td>
                    <td>
                      <button type="button" className="btn btn-outline-primary btn-sm"
                        onClick={props.isDTBottomOpen}
                      >
                        <FontAwesomeIcon icon={faTable} />
                      </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Trạm BTS</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Điểm dịch vụ viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Doanh nghiệp viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li className="list-group-item">
              <div className='item-list'>
                <FontAwesomeIcon icon={faChevronDown} />
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <span>Hiện trạng hạ tầng viễn thông</span></label>
              </div>
              <table className="table table-striped text-left table-list">
                <tbody>
                  <tr>
                    <td><input type='checkbox' /> <span>Cột ăng ten</span></td>
                    <td>
                      <button type="button" className="btn btn-outline-primary btn-sm"
                        onClick={props.isDTBottomOpen}
                      >
                        <FontAwesomeIcon icon={faTable} />
                      </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Trạm BTS</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Điểm dịch vụ viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><input type='checkbox' /> <span>Doanh nghiệp viễn thông</span></td>
                    <td><button type="button" className="btn btn-outline-primary btn-sm"
                      onClick={props.isDTBottomOpen}
                    >
                      <FontAwesomeIcon icon={faTable} />
                    </button>
                      <button type="button" className="btn btn-outline-primary btn-sm m-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
        <div className={toggleState === 2 ? "tab-pane active" : "tab-pane"} >
          <h2>Angular</h2>
          <p>Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.</p>
        </div>
        <div className={toggleState === 3 ? "tab-pane active" : "tab-pane"} >
          <div className='icon-attribute-tab'>
            <button className="btn btn-outline-success me-1" type="submit"><FontAwesomeIcon icon={faShareNodes} /></button>
            <button className="btn btn-outline-success me-1" type="submit"><FontAwesomeIcon icon={faBookmark} /></button>
            <button className="btn btn-outline-success me-1" type="submit"><FontAwesomeIcon icon={faFileExcel} /></button>
            <button className="btn btn-outline-success me-1" type="submit"><FontAwesomeIcon icon={faPrint} /></button>
          </div>
          <h2>Ember</h2>
          <p>Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device.</p>
        </div>
        <div className={toggleState === 4 ? "tab-pane active" : "tab-pane"} >
          <h2>Vue.js</h2>
          <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. </p>
        </div>
      </div>
    </div>
  );
};

export default SideBarContent;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTable, faChevronDown, faPrint, faFileExcel, faShareNodes, faBookmark, faChevronRight,  } from '@fortawesome/free-solid-svg-icons'
import AttributeTab from './AttributeTab';
import './SideBarContent.css'

const SideBarContent = (props) => {

  const [toggleState, setToggleState] = useState(1);
  const [toggleTableChild, setToggleTableChild] = useState(false);

  const tableChild = () => {
    setToggleTableChild(!toggleTableChild)
  }

  // const [tableContents, setTableContents] = useState([]);

  const toggleTag = (index) => {
    setToggleState(index);
    const tabActive = document.getElementById(`${index}`);
    const line = document.getElementsByClassName("line");
    line[0].style.width = tabActive.offsetWidth + 'px';
    line[0].style.left = tabActive.offsetLeft + 'px';
  }
  const listItemGroup_1 = ["Cột angten", "Trạm BTS", "Điểm dịch vụ viễn thông", "Doanh nghiệp viễn thông"];
  const listItemGroup_2 = ["Cột angten", "Trạm BTS", "Điểm dịch vụ viễn thông", "Doanh nghiệp viễn thông"];
  const listItemGroup_3 = ["Cột angten", "Trạm BTS", "Điểm dịch vụ viễn thông", "Doanh nghiệp viễn thông"];
  const listItemGroup_4 = ["Cột angten", "Trạm BTS", "Điểm dịch vụ viễn thông", "Doanh nghiệp viễn thông"];
  const listItemGroup_5 = ["Cột angten", "Trạm BTS", "Điểm dịch vụ viễn thông", "Doanh nghiệp viễn thông"];
  const listItemGroup_6 = ["Cột angten", "Trạm BTS", "Điểm dịch vụ viễn thông", "Doanh nghiệp viễn thông"];

  const listItemGroup1_child = listItemGroup_1.map((list, index) => {
    return (
      <tr key={index}>
        <td><input type='checkbox' /> <span>{list}</span></td>
        <td>
          <button type="button" className={props.isDTBottomOpen ? "btn btn-outline-primary btn-sm btn-bottom-active" : "btn btn-outline-primary btn-sm"}
            onClick={props.DTBottomOpen}
          >
            <FontAwesomeIcon icon={faTable} />
          </button>
          <button type="button" className="btn btn-outline-primary btn-sm m-1 " onClick={() => toggleTag(2)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </td>
      </tr>
    )

  })
  const listItemGroup2_child = listItemGroup_2.map((list, index) => {
    return (
      <tr key={index}>
        <td><input type='checkbox' /> <span>{list}</span></td>
        <td>
          <button type="button" className={props.isDTBottomOpen ? "btn btn-outline-primary btn-sm btn-bottom-active" : "btn btn-outline-primary btn-sm"}
            onClick={props.DTBottomOpen}
          >
            <FontAwesomeIcon icon={faTable} />
          </button>
          <button type="button" className="btn btn-outline-primary btn-sm m-1">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </td>
      </tr>
    )

  })
  const listItemGroup3_child = listItemGroup_3.map((list, index) => {
    return (
      <tr key={index}>
        <td><input type='checkbox' /> <span>{list}</span></td>
        <td>
          <button type="button" className={props.isDTBottomOpen ? "btn btn-outline-primary btn-sm btn-bottom-active" : "btn btn-outline-primary btn-sm"}
            onClick={props.DTBottomOpen}
          >
            <FontAwesomeIcon icon={faTable} />
          </button>
          <button type="button" className="btn btn-outline-primary btn-sm m-1">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </td>
      </tr>
    )

  })
  const listItemGroup4_child = listItemGroup_4.map((list, index) => {
    return (
      <tr key={index}>
        <td><input type='checkbox' /> <span>{list}</span></td>
        <td>
          <button type="button" className={props.isDTBottomOpen ? "btn btn-outline-primary btn-sm btn-bottom-active" : "btn btn-outline-primary btn-sm"}
            onClick={props.DTBottomOpen}
          >
            <FontAwesomeIcon icon={faTable} />
          </button>
          <button type="button" className="btn btn-outline-primary btn-sm m-1">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </td>
      </tr>
    )

  })
  const listItemGroup5_child = listItemGroup_5.map((list, index) => {
    return (
      <tr key={index}>
        <td><input type='checkbox' /> <span>{list}</span></td>
        <td>
          <button type="button" className={props.isDTBottomOpen ? "btn btn-outline-primary btn-sm btn-bottom-active" : "btn btn-outline-primary btn-sm"}
            onClick={props.DTBottomOpen}
          >
            <FontAwesomeIcon icon={faTable} />
          </button>
          <button type="button" className="btn btn-outline-primary btn-sm m-1">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </td>
      </tr>
    )

  })
  const listItemGroup6_child = listItemGroup_6.map((list, index) => {
    return (
      <tr key={index}>
        <td><input type='checkbox' /> <span>{list}</span></td>
        <td>
          <button type="button" className={props.isDTBottomOpen ? "btn btn-outline-primary btn-sm btn-bottom-active" : "btn btn-outline-primary btn-sm"}
            onClick={props.DTBottomOpen}
          >
            <FontAwesomeIcon icon={faTable} />
          </button>
          <button type="button" className="btn btn-outline-primary btn-sm m-1">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </td>
      </tr>
    )

  })
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
                <button type="button" className="btn btn-outline-info" onClick={tableChild}>
                  {toggleTableChild
                   ? <FontAwesomeIcon icon={faChevronRight} />
                   : <FontAwesomeIcon icon={faChevronDown} />}
                </button>
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <span>Hiện trạng hạ tầng viễn thông</span></label>
              </div>
              <div>
              <table className={toggleTableChild ? "table table-striped text-left table-list  " : "table table-striped text-left table-list-open "}>
                <tbody>
                  {listItemGroup1_child}
                </tbody>
              </table>
              </div>
            </li>
            <li className="list-group-item">
              <div className='item-list'>
              <button type="button" className="btn btn-outline-info" onClick={tableChild}>
                  {toggleTableChild
                   ? <FontAwesomeIcon icon={faChevronRight} />
                   : <FontAwesomeIcon icon={faChevronDown} />}
                </button>
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <span>Tuyến cáp</span></label>
              </div>
              <table className="table table-striped text-left table-list">
                <tbody>
                  {listItemGroup2_child}
                </tbody>
              </table>
            </li>
            <li className="list-group-item">
              <div className='item-list'>
              <button type="button" className="btn btn-outline-info" onClick={tableChild}>
                  {toggleTableChild
                   ? <FontAwesomeIcon icon={faChevronRight} />
                   : <FontAwesomeIcon icon={faChevronDown} />}
                </button>
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <span>Hạ tầng bưu chính</span></label>
              </div>
              <table className="table table-striped text-left table-list">
                <tbody>
                  {listItemGroup3_child}
                </tbody>
              </table>
            </li>
            <li className="list-group-item">
              <div className='item-list'>
              <button type="button" className="btn btn-outline-info" onClick={tableChild}>
                  {toggleTableChild
                   ? <FontAwesomeIcon icon={faChevronRight} />
                   : <FontAwesomeIcon icon={faChevronDown} />}
                </button>
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <span>Hạ tầng báo chí xuất bản</span></label>
              </div>
              <table className="table table-striped text-left table-list">
                <tbody>
                  {listItemGroup4_child}
                </tbody>
              </table>
            </li>
            <li className="list-group-item">
              <div className='item-list'>
              <button type="button" className="btn btn-outline-info" onClick={tableChild}>
                  {toggleTableChild
                   ? <FontAwesomeIcon icon={faChevronRight} />
                   : <FontAwesomeIcon icon={faChevronDown} />}
                </button>
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <span>QH HTVT Cấp Tỉnh</span></label>
              </div>
              <table className="table table-striped text-left table-list">
                <tbody>
                  {listItemGroup5_child}
                </tbody>
              </table>
            </li>
            <li className="list-group-item">
              <div className='item-list'>
              <button type="button" className="btn btn-outline-info" onClick={tableChild}>
                  {toggleTableChild
                   ? <FontAwesomeIcon icon={faChevronRight} />
                   : <FontAwesomeIcon icon={faChevronDown} />}
                </button>
                <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label m-1" htmlFor="firstCheckbox">
                  <p>Thẩm định QH Angten Doanh Nghiệp</p></label>
              </div>
              <table className="table table-striped text-left table-list">
                <tbody>
                  {listItemGroup6_child}
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
          <div>
            <AttributeTab />
          </div>
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
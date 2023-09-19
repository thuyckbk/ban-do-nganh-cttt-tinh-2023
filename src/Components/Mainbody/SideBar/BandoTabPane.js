import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faMagnifyingGlass, faTable } from '@fortawesome/free-solid-svg-icons';

const BandoTabPane = (props) => {

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
                        <FontAwesomeIcon icon={faChevronDown} />
                        <input className="form-check-input m-2" type="checkbox" value="" id="firstCheckbox" />
                        <label className="form-check-label m-1" htmlFor="firstCheckbox">
                            <span>Hiện trạng hạ tầng viễn thông</span></label>
                    </div>
                    <table className="table table-striped text-left table-list">
                        <tbody>
                            {listItemGroup2_child}
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
                            {listItemGroup3_child}
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
                            {listItemGroup4_child}
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
                            {listItemGroup5_child}
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
                            {listItemGroup6_child}
                        </tbody>
                    </table>
                </li>
            </ul>
        </div>
    );
};


export default BandoTabPane;
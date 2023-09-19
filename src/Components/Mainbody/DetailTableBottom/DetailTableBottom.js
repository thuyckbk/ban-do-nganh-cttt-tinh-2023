import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'
import DetailTable from "./DetailTable";
import './DetailTableBottom.css'

const DetailTableBottom = props => {
  const detaiBottomClass = props.isOpenDetailBottom ? "detail-bottom detail-bottom-open" : "detail-bottom detail-bottom-close";
  return (
    <div className={detaiBottomClass}>
      <div> 
        <DetailTable />
      </div>
      <button onClick={props.toggleDetailBottom} className="bottom-toggle ">
      <FontAwesomeIcon icon={faRectangleXmark} />
      </button>
    </div>
  );
};
export default DetailTableBottom;
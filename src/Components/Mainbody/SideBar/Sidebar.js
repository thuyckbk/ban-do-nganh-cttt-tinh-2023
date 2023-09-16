import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward,faBackward } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';
import SideBarContent from "./SideBarContent";

const Sidebar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  const sideBarToggleIcon = props.isOpen ? <FontAwesomeIcon icon={faBackward} /> : <FontAwesomeIcon icon={faForward} />
  
  return (
    <div className={sidebarClass}>
      <SideBarContent isDTBottomOpen ={props.toggleDetailBottom} DTBottomOpen = {props.toggleDetailBottom} />
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
      {sideBarToggleIcon}
      </button>
    </div>
  );
};
export default Sidebar;
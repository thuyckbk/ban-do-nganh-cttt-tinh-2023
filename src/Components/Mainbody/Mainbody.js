import React, { useState } from 'react';
import Sidebar from './SideBar/Sidebar';
import DetailTableBottom from './DetailTableBottom/DetailTableBottom';
import CanvasMaps from './CanvasMaps/CanvasMaps';
import './MainBody.css'

const MainBody = () => {
    const [sidebarOpen, setSideBarOpen] = useState(true);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };
    const [detailBottomOpen, setDetailBottomOpenOpen] = useState(false);
    const handleViewDetailBottomOpen = () => {
        setDetailBottomOpenOpen(!detailBottomOpen);
    };
    return (
        <>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} isOpenDetailBottom={detailBottomOpen} toggleDetailBottom={handleViewDetailBottomOpen}/>
            <div className='canvas-maps'>
                <CanvasMaps/>
            </div>
            <div><DetailTableBottom isOpenDetailBottom={detailBottomOpen} toggleDetailBottom={handleViewDetailBottomOpen} /></div>
        </>
    )
}

export default MainBody;
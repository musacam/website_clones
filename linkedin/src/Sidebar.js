import React from 'react'
import "./css/Sidebar.css"
import { Avatar } from '@material-ui/core'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="SidebarRecentItem">
            <span className="SidebarHash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="Sidebar">
            <div className="SidebarTop">
                <img src="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                <Avatar className="SidebarAvatar"/>
                <h2>Name Surname</h2>
                <h4>Title at Workplace</h4>
            </div>

            <div className="SidebarStats">
                <div className="SidebarStat">
                    <p>Your Profile Viewed</p>
                    <p className="SidebarStatNumber">147</p>
                </div>
                <div className="SidebarStat">
                    <p>Views on Your Posts</p>
                    <p className="SidebarStatNumber">147</p>
                </div>
            </div>

            <div className="SidebarBottom">
                <p>Recent</p>
                {recentItem("React.js")}
                {recentItem("Programming")}
                {recentItem("Redux")}
                {recentItem("UI/UX")}
            </div>
        </div>
    )
}

export default Sidebar

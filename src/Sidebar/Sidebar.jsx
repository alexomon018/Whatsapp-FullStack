import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SerachOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "../SidebarChat/SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
      <Avatar/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__serach">
          <div className="sidebar__serachContainer">
            <SerachOutlined />
            <input type="text" placeholder="Serach or start new chat"/>
          </div>
      </div>
      <div className="sidebar__chats">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;

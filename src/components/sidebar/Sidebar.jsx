import React,{useState} from 'react';
import './Sidebar.css';
import { SidebarData } from '../../Data/Data';
import Logo from "../../imgs/logo.png"

 import {UilSignOutAlt} from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0)
  return (
    <div className='Sidebar'>
     {/* logo */}
      <div className='logo'>
        <img src={Logo} alt=''/>
        <span>
          Dan<span>Z</span>ee
        </span>
      </div>
      {/* menu */}
      <div className='menu'>
    {/* menu item map */}
    {SidebarData.map((item, index)=>{
      return(
                <div className={selected===index?"menuItem active": "menuItem"}
          key={index}
            onClick={()=>setSelected(index)}
            >
          <item.icon/>
          <span>
            {item.heading}
          </span>
            </div>
      )
        })}
        <div className='menuItem '>
              <UilSignOutAlt/>
                  </div>
    </div>
    
    </div>
  ); }

export default Sidebar;

import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Sidebar() {
  return (
    <div>
        <div className="sidebar">
            <div className="home-logo">
                <img
                 style={{ height: 40 }}
                className="my-3"
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
                alt="X logo"
                />
            </div>
            <div className="sidebarLinks">
             <button className = "sb-link-btn"> <a className='sblink' href=""><i class="fa fa-solid fa-house fa-lg"></i>Home</a></button><br /><br />
              <button className = "sb-link-btn"><a className='sblink' href=""><i class="fa fa-solid fa-magnifying-glass fa-lg"></i>Explore</a></button><br /> <br />
              <button className = "sb-link-btn"><a className='sblink' href=""><i class="fa fa-regular fa-bell fa-lg"></i>Notificatons</a></button><br /> <br />
              <button className = "sb-link-btn"><a className='sblink' href=""><i class="fa fa-regular fa-envelope fa-lg"></i>Messages</a></button><br /><br />
             <button className = "sb-link-btn"> <a className='sblink' href=""><i class="fa fa-regular fa-bookmark fa-lg"></i>Bookmarks</a></button><br /><br />
             <button className = "sb-link-btn"> <a className='sblink' href=""><i class="fa fa-solid fa-user-group fa-lg"></i>Communities</a></button><br /><br />
             <button className = "sb-link-btn"> <a className='sblink' href=""><i class="fa fa-brands fa-x-twitter fa-lg"></i>Premium</a></button><br /><br />
              <button className = "sb-link-btn"><a className='sblink' href=""><i class="fa fa-regular fa-user fa-lg"></i>Profile</a></button><br /><br />
             <button className = "sb-link-btn"> <a className='sblink' href=""><i class="fa fa-solid fa-ellipsis fa-lg"></i>More</a> </button><br /><br />
              <button className='sb-button btn btn-primary rounded-pill fw-bold'>Post</button><br /><br />
              <img src=".." alt="" className='fa pfp border boerder-1 rounded-pill'/>
              <p className='text-light d-inline'>Your Name</p>
            </div>
        </div>
    </div>
  )
}

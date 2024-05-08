import React from 'react'
import SideMenuBar from '../componenets/SideMenuBar'
import Header from '../componenets/Header'

const StoryAppPage = () => {
  return (
    <div style={{width:'100%', height:'100%', background:'#deebf7', padding:'20px 0', display:'flex', justifyContent:'space-between'}}>
        <SideMenuBar currentPage='storyApp'/>

        <div style={{border:'1px solid', width:'calc(100% - 240px)'}}>
            content
        </div>
    </div>
  )
}

export default StoryAppPage
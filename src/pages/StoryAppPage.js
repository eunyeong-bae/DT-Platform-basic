import React from 'react'
import SideMenuBar from '../componenets/SideMenuBar'

const StoryAppPage = () => {

  return (
    <div style={{width:'100%', height:'100%', background:'#deebf7', padding:'10px 5px', display:'flex', justifyContent:'space-between'}}>
        <SideMenuBar />

        <div style={{border:'1px solid', width:'calc(100% - 240px)'}}>
            content
        </div>
    </div>
  )
}

export default StoryAppPage
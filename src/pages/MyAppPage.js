import React from 'react'
import SideMenuBar from '../componenets/SideMenuBar'
import Menu from '../componenets/Menu'

const MyAppPage = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', width:'100%', height:'100%', background:'#deebf7', padding:'20px 0' }}>
        <Menu />

        <div style={{width:'100%', height:'calc(100% - 70px)', display:'flex',  justifyContent:'space-around'}}>
            <SideMenuBar />

            <div style={{border:'1px solid', width:'calc(100% - 240px)', background:'#fff2cc'}}>
                myApp
            </div>
        </div>
    </div>

  )
}

export default MyAppPage
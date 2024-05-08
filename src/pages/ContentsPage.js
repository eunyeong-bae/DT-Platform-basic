import React from 'react'
import Header from '../componenets/Header'
import SideMenuBar from '../componenets/SideMenuBar'

const ContentsPage = () => {
  return (
    <div style={{width:'100%', height:'100%', background:'#deebf7', display:'flex', justifyContent:'space-between', padding:'10px 5px'}}>
      <SideMenuBar />
      
      <div style={{border:'1px solid', width:'calc(100% - 240px)'}}>
          content
      </div>
    </div>
  )
}

export default ContentsPage
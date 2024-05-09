import React from 'react'
import Menu from '../componenets/Menu'

const MainPage = () => {

  return (
    <>
        <div style={{ display:'flex', flexDirection:'column', height:'100%'}}>
            <Menu />
            
            <div style={{width:'100%', height:'calc(100% - 60px)', background:'#ffffe1'}}>
                플랫폼 관련 공지사항 임시
            </div>
        </div>
    </>
  )
}

export default MainPage
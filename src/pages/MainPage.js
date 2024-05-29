import React from 'react'
import NavBarMenu from '../componenets/NavBarMenu'

const MainPage = () => {

  return (
    <>
        <div style={{ display:'flex', flexDirection:'column', height:'100%'}}>
            <NavBarMenu />
            
            <div style={{width:'100%', height:'calc(100% - 50px)', alignContent:'center'}}>
                플랫폼 관련 공지사항 임시
            </div>
        </div>
    </>
  )
}

export default MainPage
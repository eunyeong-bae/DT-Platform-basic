import React from 'react'

const menus = ['사용자 등록정보','사용 중인 앱','로그아웃'];
const dropDownStyle = {
  ul: {
    
  }
}

const DropdownMenu = ({currentMenuType}) => {

  return (
    <>
        <ul style={{listStyle:'none', display: currentMenuType ? 'block' : 'none', zIndex:'3', border:'1px solid', position:'absolute', width:'100%', background:'white', top:'35px'}}>
            { menus.map((menu) => {
                return(
                    <li style={{padding:'15px 5px'}}>{menu}</li>
                )
            })}
        </ul>
    </>
  )
}

export default DropdownMenu
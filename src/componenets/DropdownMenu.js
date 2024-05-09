import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const menus = ['사용자 등록정보','사용 중인 앱','로그아웃'];

const DropdownMenu = ({currentMenuType, setCurerntMenuType}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModalPortal = (selectedMenu) => {
    setCurerntMenuType(false);
    
    if(selectedMenu === '로그아웃'){
      dispatch({ type:"LOGOUT_SUCCESS" });

      navigate('/login');
    } else {
      dispatch({
        type:"SET_MODAL_INFO",
        payload: {
          selectedMenu,
          isOpenModal: true,
        }
      })
    }

  }

  return (
    <>
        <ul style={{listStyle:'none', display: currentMenuType ? 'block' : 'none', zIndex:'3', position:'absolute', background:'#ffffff', width:'100%',  top:'47px', fontWeight:'bold'}}>
            { menus.map((menu, idx) => {
                return(
                    <li key={idx + menu} style={{padding:'15px 5px', borderBottom:'1px solid'}} onClick={() => handleModalPortal(menu)}>{menu}</li>
                )
            })}
        </ul>
    </>
  )
}

export default DropdownMenu
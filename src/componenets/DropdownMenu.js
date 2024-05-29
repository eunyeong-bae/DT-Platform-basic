import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Style/style.css';

//홈 화면의 사용자 관리 하단 메뉴와 내 콘텐츠 관리의 내 서비스 목록 관리 메뉴용
const DropdownMenu = () => {
  const subBarMenuInfo = useSelector(state => state.subBarMenuInfo);

  const menus = subBarMenuInfo?.selectedSubMenu === '사용자 관리' ? 
                ['사용자 등록정보','사용 중인 앱','로그아웃'] : 
                ['내 서비스 목록 추가', '내 서비스 목록 선택'] ;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickDropdownMenu = (menu) => {
    if(subBarMenuInfo?.selectedSubMenu === '사용자 관리'){
      dispatch({
        type:"SET_SUBBAR_INFO",
        payload:{
            isSubMenuOpen: !subBarMenuInfo.isSubMenuOpen,
            selectedSubMenu: '사용자 관리',
        }
      })

      if(menu === '로그아웃'){
        dispatch({ type:"LOGOUT_SUCCESS" });
  
        navigate('/login');
      } else {
        dispatch({
          type:"SET_MODAL_INFO",
          payload: {
            selectedMenu: menu,
            isModalOpen: true,
          }
        })
      }
    } else {
      dispatch({
        type:"SET_SUBBAR_INFO",
        payload:{
          isSubMenuOpen: !subBarMenuInfo.isSubMenuOpen,
          selectedSubMenu: menu,
        }
      })
    }
  }

  return (
    <>
      {
        subBarMenuInfo?.selectedSubMenu === '사용자 관리' ? 
          <ul className='dropdown-wrap'>
              { menus.map((menu, idx) => {
                  return(
                      <li key={idx + menu} 
                        className='dropdown-list' 
                        style={{borderTop: menu === '로그아웃' && '1px solid #e5e5e5'}}
                        onClick={() => onClickDropdownMenu(menu)}
                      >
                        {menu}
                      </li>
                  )
              })}
          </ul>
        :
          <ul className='dropdown-wrap content'>
            { menus.map((menu, idx) => {
                return(
                    <li key={idx + menu} 
                      className='dropdown-list'
                      onClick={() => onClickDropdownMenu(menu)}
                    >
                      {menu}
                    </li>
                )
            })}
          </ul>
      }
    </>
  )
}

export default DropdownMenu
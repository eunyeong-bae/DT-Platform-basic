import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './Style/style.css';

//홈 메뉴와 나의 앱 페이지 메뉴용
const NavBarMenu = () => {
    const currentPage = useSelector(state => state.currentPage);

    const menus = currentPage === 'home' ? 
                    ['내 콘텐츠 관리','나의 앱','나의 스토리 앱'] : 
                    [['파일', '도움말'], ['측정','단면 절단','가시권 분석','3D 객체 위치조정']];

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickNavMenu = (menu) => {
        const nextPage = menu === '내 콘텐츠 관리' ? 
                        'contents' : menu === '나의 앱' ? 'myApp' : 'storyApp';

        if(nextPage) {
            dispatch({
                type: "SET_CURRENT_PAGE",
                payload: {
                    currentPage: nextPage
                }
            });

            dispatch({
                type:"SET_SUBBAR_INFO",
                payload:{
                    isSubMenuOpen: false,
                    selectedSubMenu: null,
                }
            });

            navigate(`/${nextPage}`)
        }else {
            //나의 앱 Navbar menu 기능 동작 구현
        }
    }

  return (
    <div className='navbar-container'>
        <ul className='navbar-list-wrap'>
            { currentPage === 'home' 
                ? 
                    <>
                        {
                            menus.map((menu, idx) => {
                                return(
                                    <li key={idx + menu} className='navbar-list' onClick={() => onClickNavMenu(menu)}>{menu}</li>
                                )
                            })
                        }
                    </>
                : 
                    <>
                        <div style={{display:'flex'}}>
                            {menus[0].map((menu, idx) => {
                                return(
                                    <li key={idx + menu} 
                                        className='navbar-list' 
                                        onClick={() => onClickNavMenu(menu)}
                                    >
                                        {menu}
                                    </li>
                                )
                            })}
                        </div>
                        <div style={{display:'flex'}}>
                            {menus[1].map((menu, idx) => {
                                return(
                                    <li key={idx + menu} 
                                        className='navbar-list' 
                                        onClick={() => onClickNavMenu(menu)}
                                    >
                                        {menu}
                                    </li>
                                )
                            })}
                        </div>
                    </>
            }
        </ul>
    </div>
  )
}

export default NavBarMenu
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


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
    <div style={{ height:'60px', display:'flex', alignItems:'center', marginBottom:'15px'}}>
        <ul style={{boxSizing:'border-box', listStyle:'none', display:'flex', height:'100%', margin:'0', alignItems:'center', justifyContent:'space-around', width:'100%', background:'#deebf7', padding:`${currentPage === 'home'? '10px 20px' : '10px 0px'}`}}>
            { currentPage === 'home' 
                ? 
                    <>
                        {
                            menus.map((menu, idx) => {
                                return(
                                    <li key={idx + menu} style={{border:'1px solid #EDF1F5', padding:'10px 20px', background:'white', borderRadius:'5px', fontWeight:'bold'}} onClick={() => onClickNavMenu(menu)}>{menu}</li>
                                )
                            })
                        }
                    </>
                : 
                    <>
                        <div style={{border:'1px solid', display:'flex', justifyContent:'space-around', background:'#fff2cc', width:'450px', padding:'10px 0'}}>
                            {menus[0].map((menu, idx) => {
                                return(
                                    <li key={idx + menu} 
                                        style={{border:'1px solid lightgrey', padding:'10px 20px', background:'white', width:'130px'}} 
                                        onClick={() => onClickNavMenu(menu)}
                                    >
                                        {menu}
                                    </li>
                                )
                            })}
                        </div>
                        <div style={{border:'1px solid', display:'flex', justifyContent:'space-around', background:'#fff2cc', width:'calc(100% - 480px)', padding:'10px 0'}}>
                            {menus[1].map((menu, idx) => {
                                return(
                                    <li key={idx + menu} 
                                        style={{border:'1px solid lightgrey', padding:'10px 20px', background:'white', width:'130px'}} 
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
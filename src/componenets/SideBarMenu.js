import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DropdownMenu from './DropdownMenu';

//나의 콘텐츠 관리와 나의 스토리 앱 하단 서브메뉴용 
const SideBarMenu = () => {
    const subBarMenuInfo = useSelector(state => state.subBarMenuInfo);

    const currentPage = useSelector(state => state.currentPage);

    const sideMenus = currentPage === 'contents' ? 
                        ['내 서비스 목록 관리','공공 개방 서비스 연계 등록','URL 지정 서비스 연계 등록','공유 관리'] : 
                        ['내 스토리 목록 관리', '내 스토리 작성'];

    const dispatch = useDispatch();

    const onClickSideBarMenu = (menu) => {
                
        switch(menu){
            case"내 서비스 목록 관리":
                dispatch({
                    type:"SET_SUBBAR_INFO",
                    payload:{
                        isSubMenuOpen: !subBarMenuInfo.isSubMenuOpen,
                        selectedSubMenu: menu,
                    }
                })
                break;
            case"공공 개방 서비스 연계 등록":
                break;
            case"URL 지정 서비스 연계 등록":
                break;
            case"공유 관리":
                break;
            case"내 스토리 작성":
                break;
        }
    }

    return (
        <ul style={{width:'200px'}}>
            { sideMenus.map((menu, idx) => {
                return(
                    <li key={idx + menu} 
                        style={{border: '1px solid #EEE', width:'100%', padding:'15px', margin:'10px 0', boxSizing:'border-box',background:'#ffffff'}}
                        onClick={() => onClickSideBarMenu(menu)}
                    >
                        <strong>{menu}</strong>
                        {
                            subBarMenuInfo?.selectedSubMenu === '내 서비스 목록 관리' && subBarMenuInfo?.isSubMenuOpen &&
                            <DropdownMenu />
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default SideBarMenu
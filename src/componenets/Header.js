import React, { useEffect, useState } from 'react'
import DropdownMenu from './DropdownMenu';
import Logo from '../assets/dtp_logo.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const headerStyle = {
    container: {
        display:'flex', 
        justifyContent:'space-between', 
        alignItems:'center',
        height: '100%'
    },
    list: {
        listStyle:'none', 
        position:'relative', 
        width:'140px', 
        border:'1px solid',
    }
}

const Header = () => {
    const [currentMenuType, setCurerntMenuType] = useState(false);
    
    const currentPage = useSelector(state => state.currentPage);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleMenuType = () => {

        if(currentPage === 'home'){
            setCurerntMenuType((prev) => !prev)

        } else {
            dispatch({
                type:"SET_CURRENT_PAGE",
                payload: {
                    currentPage: 'home'
                }
            })

            navigate('/')
        }
    }

  return (
    <div style={headerStyle.container}>
        <img src={Logo} alt='DT 플랫폼 로고' width='120px' height='40px'/>

        <li style={headerStyle.list}>
            <a onClick={handleMenuType}>{currentPage === 'home' ? '사용자 관리' : '되돌아가기'}</a>
            { currentPage === 'home' && <DropdownMenu currentMenuType={currentMenuType} setCurerntMenuType={setCurerntMenuType}/> }
        </li>
    </div>
  )
}

export default Header;
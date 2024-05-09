import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu';
import Logo from '../assets/company_logo.png'
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
        width:'160px', 
    },
    
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
        <img src={Logo} alt='DT 플랫폼 로고' width='150px' height='50px' style={{padding:'3px 5px'}}/>

        <li style={headerStyle.list}>
            <p style={{height:'45px', alignContent:'center', color:'#ffffff', border:'1px solid #EDF1F5', borderRadius:'5px', fontWeight:'bold'}} onClick={handleMenuType}>{currentPage === 'home' ? '사용자 관리' : '되돌아가기'}</p>
            { currentPage === 'home' && <DropdownMenu currentMenuType={currentMenuType} setCurerntMenuType={setCurerntMenuType}/> }
        </li>
    </div>
  )
}

export default Header;
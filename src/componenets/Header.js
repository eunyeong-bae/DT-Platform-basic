import React from 'react'
import DropdownMenu from './DropdownMenu';
import Logo from '../assets/company_logo.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Style/style.css';

const Header = () => {    

    const subBarMenuInfo = useSelector(state => state.subBarMenuInfo);

    const currentPage = useSelector(state => state.currentPage);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickRMenu = () => {
        if(currentPage === 'home'){
            dispatch({
                type:"SET_SUBBAR_INFO",
                payload:{
                    isSubMenuOpen: !subBarMenuInfo.isSubMenuOpen,
                    selectedSubMenu: '사용자 관리',
                }
            })
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
    <div className='header-wrap'>
        <img className='header-logo' src={Logo} alt='DT 플랫폼 로고' width='150px' height='45px'/>

        <div className='header-rMenuWrap'>
            <p 
                className='header-rMenuTitle'
                onClick={onClickRMenu}
            >
                {currentPage === 'home' ? '사용자 관리' : '되돌아가기'}
            </p>
            
            { subBarMenuInfo?.isSubMenuOpen && <DropdownMenu /> }
        </div>
    </div>
  )
}

export default Header;

const headerStyle = {
    container: {
        display:'flex', 
        justifyContent:'space-between', 
        alignItems:'center',
        height: '100%'
    },
    rMenuWrap: {
        width:'160px', 
        listStyle:'none', 
        position:'relative', 
    },
    rMenuTitle: {
        height:'45px', 
        alignContent:'center', 
        borderRadius:'5px', 
        fontWeight:'bold',
        background:'#ffffff'
    }
    
};
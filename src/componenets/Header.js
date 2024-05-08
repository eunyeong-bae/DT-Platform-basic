import React, { useEffect, useState } from 'react'
import DropdownMenu from './DropdownMenu';
import Logo from '../assets/dtp_logo.png'
import { useNavigate } from 'react-router-dom';

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

const Header = ({rMenu}) => {
    const [rMenuType, setRMenuType] = useState(null);
    const [currentMenuType, setCurerntMenuType] = useState(false);
    const navigate = useNavigate();

    const handleMenuType = (currMenuType) => {
        if(currMenuType === '사용자 관리'){
            setCurerntMenuType((prev) => !prev)
        } else {
            navigate('/')
        }
    }

    useEffect(() => {
        setRMenuType(rMenu);

    }, [rMenu])

  return (
    <div style={headerStyle.container}>
        <img src={Logo} alt='DT 플랫폼 로고' width='120px' height='40px'/>

        <li style={headerStyle.list}>
            <a onClick={() => handleMenuType(rMenuType)}>{rMenuType}</a>
            { rMenuType === '사용자 관리' && <DropdownMenu currentMenuType={currentMenuType} /> }
        </li>
    </div>
  )
}

export default Header;
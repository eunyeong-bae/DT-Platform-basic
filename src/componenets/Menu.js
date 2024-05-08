import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


const Menu = () => {
    const currentPage = useSelector(state => state.currentPage);

    const menus = currentPage === 'home' ? ['내 콘텐츠 관리','나의 앱','나의 스토리 앱'] : [['파일', '도움말'], ['측정','단면 절단','가시권 분석','3D 객체 위치조정']];

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleMovePage = (page) => {
        const nextPage = page === '내 콘텐츠 관리' ? 'contents' : page === '나의 앱' ? 'myApp' : 'storyApp';

        if(nextPage) {
            dispatch({
                type: "SET_CURRENT_PAGE",
                payload: {
                    currentPage: nextPage
                }
            });
            
            console.log("menuclick:",nextPage)

            navigate(`/${nextPage}`)
        }
    }

  return (
    <div style={{ height:'60px', display:'flex', alignItems:'center', marginBottom:'15px'}}>
        { currentPage === 'home' 
            ? <ul style={{boxSizing:'border-box', listStyle:'none', display:'flex', height:'100%', margin:'0', alignItems:'center', justifyContent:'space-around', width:'100%', background:'#deebf7', padding:'10px 20px'}}>
                {
                    menus.map((menu) => {
                        return(
                            <li style={{border:'1px solid lightgrey', padding:'10px 20px', background:'white'}} onClick={() => handleMovePage(menu)}>{menu}</li>
                        )
                    })
                }
              </ul>
            : <ul style={{boxSizing:'border-box', listStyle:'none', display:'flex', height:'100%', margin:'0', alignItems:'center', justifyContent:'space-around', width:'100%', background:'#deebf7', padding:'10px 0px'}}>
                <div style={{border:'1px solid', display:'flex', justifyContent:'space-around', background:'#fff2cc', width:'450px', padding:'10px 0'}}>
                    {menus[0].map((menu) => {
                        return(
                            <li style={{border:'1px solid lightgrey', padding:'10px 20px', background:'white', width:'130px'}}>{menu}</li>
                        )
                    })}
                </div>
                <div style={{border:'1px solid', display:'flex', justifyContent:'space-around', background:'#fff2cc', width:'calc(100% - 480px)', padding:'10px 0'}}>
                    {menus[1].map((menu) => {
                        return(
                            <li style={{border:'1px solid lightgrey', padding:'10px 20px', background:'white', width:'130px'}}>{menu}</li>
                        )
                    })}
                </div>
              </ul>
        }
    </div>
  )
}

export default Menu
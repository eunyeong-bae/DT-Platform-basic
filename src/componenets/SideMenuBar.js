import React from 'react'

const SideMenuBar = ({currentPage}) => {
    const sideMenus = currentPage === 'contents' ? ['내 서비스 목록 관리','공공 개방 서비스 연계 등록','URL 지정 서비스 연계 등록','공유 관리'] : ['내 스토리 목록 관리', '내 스토리 작성'];
  
    return (
        <>
            {
                currentPage === 'myApp' 
                ?   <div  style={{width:'200px', border:'1px solid', background:'#fff2cc'}}>
                        <div style={{padding:'20px 10px'}}>
                            <p>
                                서비스  레이어 
                                <button style={{marginLeft:'5px', borderRadius:'50%', width:'20px', height:'20px', border:'1px solid'}}>+</button>
                            </p>
                            <p style={{width:'100%'}}>-------------------------</p>
                        </div>
                        <div style={{padding:'0 10px'}}>
                            <div style={{padding:'10px', textAlign:'left'}}>
                                <input type="checkbox" id="scales" name="scales" checked />
                                <label for="scales" style={{marginLeft:'8px'}}>레이어1</label>
                            </div>
                            <div style={{padding:'10px', textAlign:'left'}}>
                                <input type="checkbox" id="horns" name="horns"  />
                                <label for="horns" style={{marginLeft:'8px'}}>레이어2</label>
                            </div>
                            <div style={{padding:'10px', textAlign:'left'}}>
                                <input type="checkbox" id="test" name="test"  />
                                <label for="test" style={{marginLeft:'8px'}}>레이어3</label>
                            </div>
                        </div>
                    </div>
                :   <div style={{width:'200px'}}>
                        { sideMenus.map((menu) => {
                            return(
                                <button style={{background:'white', width:'100%', margin:'10px 0', height:'40px'}}>{menu}</button>
                            )
                        })}
                    </div>
            }
        </>
  )
}

export default SideMenuBar
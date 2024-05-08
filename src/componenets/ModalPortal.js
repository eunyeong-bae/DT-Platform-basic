import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux'

const ModalPortal = () => {
    const {selectedMenu, isOpenModal} = useSelector(state => state.modalInfo);
    
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch({
            type: "SET_MODAL_INFO",
            payload: {
                selectedMenu: null,
                isOpenModal: false,
            }
        })    
    }

  return (
    <div>
        {
            isOpenModal && createPortal(
                <ModalContent selectedMenu={selectedMenu} onClose={onClose} />, document.body
            )
        }
    </div>
  )
}

export default ModalPortal

function ModalContent({selectedMenu, onClose}) {
    return (
        <div className="modal" style={{width:'400px', height:'350px', position:'absolute', top: '30%', left:'40%', border:'1px solid', background:'white'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:'20px 10px'}}>
                <div style={{display:'flex', width:'100%', height:'40px', justifyContent:'center', alignItems:'center'}}>
                    <h3>{selectedMenu}</h3>
                    <button style={{marginLeft:'5px', width:'20px', height:'20px'}} onClick={onClose}>X</button>
                </div>
                <div style={{border:'1px solid', width: 'calc(100% - 50px)', background:'black', marginTop:'10px'}}></div>
                <div style={{width:'100%', height:'calc(100% - 61px)', padding:'20px'}}>
                    {
                        selectedMenu === '사용자 등록정보' ?
                            <UserInfo />
                        :
                            <UseApp />
                    }
                </div>
            </div>
        </div>
    )
}

function UserInfo() {
    const userData = useSelector(state => state.userData);

    return (
        <>
            <p style={{padding:'10px 0'}}>사용자 ID : <span>{userData && userData.id}</span></p>
            <p style={{padding:'10px 0'}}>사용자 이름 : <span>{userData && userData.userName}</span></p>
            <p style={{padding:'10px 0'}}>소속 조직 : <span>{userData && userData.company}</span></p>
            <p style={{padding:'10px 0'}}>이메일 : <span>{userData && userData.email}</span></p>
            <p style={{padding:'10px 0'}}>전화번호 : <span>{userData && userData.phone}</span></p>
        </>
    )
}

function UseApp() {
    return(
        <></>
    )
}

function Logout() {
    return(
        <></>
    )
}
import React from 'react'
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux'
import './Style/style.css';

const ModalPortal = () => {
    const {selectedMenu, isModalOpen} = useSelector(state => state.modalInfo);
    
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch({
            type: "SET_MODAL_INFO",
            payload: {
                selectedMenu: null,
                isModalOpen: false,
            }
        })    
    }

  return (
    <div>
        {
            isModalOpen && createPortal(
                <ModalContent selectedMenu={selectedMenu} onClose={onClose} />, document.body
            )
        }
    </div>
  )
}

export default ModalPortal

function ModalContent({selectedMenu, onClose}) {
    return (
        <div className="modal-wrap modal">
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:'20px 10px'}}>
                <div style={{display:'flex', width:'100%', height:'40px', justifyContent:'center', alignItems:'center'}}>
                    <h3 style={{width:'calc(100% - 20px)', textAlign:'center'}}>{selectedMenu}</h3>
                    <button style={{marginLeft:'5px', width:'20px', height:'20px'}} onClick={onClose}>X</button>
                </div>

                <div style={{border:'1px solid', width: '100%'}}></div>

                <div style={{width:'100%', height:'calc(100% - 41px)', padding:'10px 20px'}}>
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
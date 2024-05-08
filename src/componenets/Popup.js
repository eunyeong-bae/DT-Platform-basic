// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Popup = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div style={{border:'1px solid red', width:'400px', height:'500px', zIndex:5}}>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button onClick={closeModal}>close</button>
                
            </Modal>
        </div>
    );
}

export default Popup
// <Popup trigger={selectSubMenu} style={{border:'1px solid red'}}>
//     {/* <div style={{border:'1px solid red', width:'300px', height:'300px', display:'flex', justifyContent:'center', alignItems:'center'}}>Popup content here !!</div> */}
// </Popup>
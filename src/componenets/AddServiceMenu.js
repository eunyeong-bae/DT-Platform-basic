import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const styles = {
    container: {
        border: '1px solid pink',
        width: '400px',
        height: '350px',
    },
    header: {
        width: '100%',
        height: '40px',
        alignContent: 'center',
        background: '#eee',
        borderBottom: '1px solid',
    },
    content: {
        width: '100%',
        height: 'calc(100% - 40px)',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff',
        padding: '10px 0',
    },
    serviceListHeader: {
        width: '100%',
        height: '35px',
        padding: '5px 0',
        alignContent: 'center',
    },
    serviceItem: {
        border: '1px solid',
        width: '100%',
        height: '45px',
        alignContent: 'center',
        background: '#eee',
        cursor: 'pointer',
    },
    serviceListContainer: {
        width: 'calc(100% - 40px)',
    },
};

const AddServiceMenu = ({layer, setLayer}) => {
    const myAssetDatas = useSelector(state => state.myAssetDatas);
    const dispatch = useDispatch();

    const onClickService = (selectedService) => {

        const updatedLayer = { ...selectedService, checked: layer?.checked ? !layer.checked : true};
        setLayer(updatedLayer)
        
        dispatch({
            type:"ADD_SERVICE_LISTS",
            payload: {
                serviceList: selectedService
            }
        }) 
    }

    return (
        <div style={styles.container}>
            <p style={styles.header}>내 서비스 목록 추가</p>
            <div style={styles.content}>
                <div style={styles.serviceListHeader}>
                    Cesium 자가 호스팅 서비스 목록 추가
                </div>
                <div style={styles.serviceListContainer}>
                    {myAssetDatas?.map((serviceList) => (
                        <p
                            key={serviceList.id}
                            style={styles.serviceItem}
                            onClick={() => onClickService(serviceList)}
                        >
                            {serviceList.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AddServiceMenu
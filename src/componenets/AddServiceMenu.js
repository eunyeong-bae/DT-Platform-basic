import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const AddServiceMenu = () => {
    const myAssetDatas = useSelector(state => state.myAssetDatas);

    const dispatch = useDispatch();

    const onClickService = (addServiceList) => {

        dispatch({
            type:"ADD_SERVICE_LISTS",
            payload: {
                serviceList: addServiceList
            }
        })    
    }

  return (
    <div style={{border:'1px solid', width:'400px', height:'300px'}}>
        <p style={{ width:'100%', height:'40px', alignContent:'center', background:'#eee', borderBottom:'1px solid'}}>내 서비스 목록 추가</p>

        <div style={{width:'100%', height:'100%', overflowY:'scroll', display:'flex', flexDirection:'column', alignItems:'center', background:'#fff'}}>
            <li style={{width:'100%', height:'35px', padding:'5px 0', alignContent:'center'}}>Cesium 자가 호스팅 서비스 목록 추가</li>
            <div style={{width:'calc(100% - 40px)', height:'calc(100% - 60px)'}}>
                {
                    myAssetDatas?.map((serviceList) => {
                        return (
                            <p key={serviceList.id}
                                style={{border:'1px solid', width:'100%', height:'45px', alignContent:'center', background:'#eee'}}
                                onClick={() => onClickService(serviceList)}
                            >
                                {serviceList.name}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default AddServiceMenu
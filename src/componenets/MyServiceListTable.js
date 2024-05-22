import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const tableStyle = {
    content: {
        border:'1px solid', 
        padding:'10px 0',
        height:'35px', 
        width:'130px', 
    },
    selectedRow: {
        display:'flex',
        flexDirection: 'row',
        alignContent:'center'
    }
}
const MyServiceListTable = (props) => {
    const {serviceLayers, setServiceLayers} = props;
    const [selectedDelBtn, setSelectedDelBtn] = useState(null);
    
    const currentPage = useSelector(state => state.currentPage);
    const addServiceLists = useSelector(state => state.addServiceLists);
    
    const dispatch = useDispatch();
    
    const onClickAddLayer = (selectLayer) => {
        //내 콘텐츠 관리와 나의 앱 페이지 로직 분기
        if(currentPage === 'contents'){
            const updatedLayer = { ...selectLayer, checked: serviceLayers?.checked ? !serviceLayers.checked : true};
    
            setServiceLayers(updatedLayer)

        } else if(currentPage === 'myApp'){
            setServiceLayers([...serviceLayers, selectLayer]);
        }
        
    }

    const onMouseOverEvent = (layerId) => {
        setSelectedDelBtn(layerId)
    }

    const onDeleteLayer = (layer) => {
        const newServiceLists = [...addServiceLists];
        newServiceLists = newServiceLists.filter(data => data.id !== layer.id);
        
        if(layer) {
            dispatch({
                type:"REMOVE_SERVICE_LISTS",
                payload: {
                    newServiceLists
                }
            })
        }
    }

  return (
    <table style={{background:'#fff', borderCollapse:'collapse', margin:'5px'}}>
        <thead>
            <tr style={{background:'#EEE'}}>
                <th style={tableStyle.content}>서비스 ID</th>
                <th style={tableStyle.content}>서비스 이름</th>
                <th style={tableStyle.content}>콘텐츠 유형</th>
                <th style={tableStyle.content}>등록 일자</th>
            </tr>
        </thead>
        <tbody>
            {
                addServiceLists?.map((data) => {
                    return (
                        <tr key={data.id + data.name} 
                            onClick={() => onClickAddLayer(data)} 
                            onMouseEnter={() => onMouseOverEvent(data.id)}
                            onMouseLeave={() => onMouseOverEvent(null)}
                        >
                            <td style={tableStyle.content}>{data.id}</td>
                            <td style={tableStyle.content}>{data.name}</td>
                            <td style={tableStyle.content}>{data.type}</td>
                            <td style={{border:'1px solid', height:'35px', padding:'10px 0', position:'relative'}}>
                                {data.dateAdded?.split('T')[0]}
                                {
                                    selectedDelBtn === data.id && 
                                    <p style={{border:'1px solid red', position:'absolute', zIndex:'5', top:'0', right:'50px', }} 
                                        onClick={() => onDeleteLayer(data)}>삭제</p>
                                }
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default MyServiceListTable
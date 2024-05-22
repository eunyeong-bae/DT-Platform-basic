import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const tableStyle = {
    content: {
        border:'1px solid', 
        padding:'10px 0',
    },
    selectedRow: {
        display:'flex',
        flexDirection: 'row',
        alignContent:'center'
    }
}

const MyServiceListTable = (props) => {
    const {serviceLayers, setServiceLayers} = props;
    const [mouseOverLayerId, setMouseOverLayerId] = useState(null);
    const [selectLayer, setSelectLayer] = useState(null);

    const currentPage = useSelector(state => state.currentPage);
    const addServiceLists = useSelector(state => state.addServiceLists);
    
    const dispatch = useDispatch();
    
    const onClickAddLayer = (layer) => {
        //내 콘텐츠 관리와 나의 앱 페이지 로직 분기
        if(currentPage === 'contents'){
            const updatedLayer = { ...layer, checked: serviceLayers?.checked ? !serviceLayers.checked : true};
    
            setServiceLayers(updatedLayer)
            setSelectLayer({...layer, checked: layer?.checked ? !layer.checked : true})

        } else if(currentPage === 'myApp'){
            setServiceLayers([...serviceLayers, layer]);
        } 
    }

    const onMouseOverEvent = (layerId) => {
        setMouseOverLayerId(currentPage === 'contents' ? layerId : null)
    }

    const onDeleteLayer = (layer) => {
        let newServiceLists = [...addServiceLists];
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
    <div style={{height:'auto'}}>
        <table style={{background:'#fff', borderCollapse:'collapse'}}>
            <thead>
                <tr style={{background:'#EEE'}}>
                    <th style={{padding:'10px', border:'1px solid'}}>서비스 ID</th>
                    <th style={{padding:'10px', border:'1px solid'}}>서비스 이름</th>
                    <th style={{padding:'10px', border:'1px solid'}}>콘텐츠 유형</th>
                    <th style={{padding:'10px', border:'1px solid'}}>등록 일자</th>
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
                                <td style={{border:'1px solid', height:'35px', padding:'10px 0', position:'relative', width: (mouseOverLayerId === data.id || selectLayer?.id === data.id) && '120px' }}>
                                    <p style={{width:'85px'}}>{data.dateAdded?.split('T')[0]}</p>
                                    {
                                        (mouseOverLayerId === data.id || selectLayer?.id === data.id) && 
                                        <p style={{ position:'absolute', zIndex:'5', top:'0', right: '0', alignContent:'center', height:'100%' }} 
                                            onClick={() => onDeleteLayer(data)}>삭제</p>
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default MyServiceListTable
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const tableStyle = {
    content: {
        border:'1px solid', 
        padding:'10px 0',
        height:'35px', 
        width:'100px' 
    }
}

//내 콘텐츠 관리와 나의 앱 페이지 용(분기 처리 필요)
const MyServiceListTable = (props) => {
    const {serviceLayers, setServiceLayers} = props;

    // const currentPage = useSelector(state => state.currentPage);
    const addServiceLists = useSelector(state => state.addServiceLists);

    const onClickAddLayer = (layer) => {
        setServiceLayers([...serviceLayers, layer]);
    }
    
    useEffect(() => {
        // console.log("after adding layers :", serviceLayers)
    }, [serviceLayers])

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
                        <tr key={data.id + data.name} onClick={() => onClickAddLayer(data)}>
                            <td style={tableStyle.content}>{data.id}</td>
                            <td style={tableStyle.content}>{data.name}</td>
                            <td style={tableStyle.content}>{data.type}</td>
                            <td style={tableStyle.content}>{data.dateAdded.split('T')[0]}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default MyServiceListTable
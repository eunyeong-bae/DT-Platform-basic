import React from 'react'
import { useSelector } from 'react-redux'

const tableStyle = {
    content: {
        border:'1px solid', 
        padding:'10px 0',
        height:'35px', 
        width:'100px' 
    }
}
const MyServiceListTable = () => {
    const addServiceLists = useSelector(state => state.addServiceLists);

  return (
    <table style={{background:'#fff', borderCollapse:'collapse'}}>
        <tr style={{background:'#EEE'}}>
            <th style={tableStyle.content}>서비스 ID</th>
            <th style={tableStyle.content}>서비스 이름</th>
            <th style={tableStyle.content}>콘텐츠 유형</th>
            <th style={tableStyle.content}>등록 일자</th>
        </tr>
        {
            addServiceLists?.map((data) => {
                return (
                    <tr key={data.id}>
                        <td style={tableStyle.content}>{data.id}</td>
                        <td style={tableStyle.content}>{data.name}</td>
                        <td style={tableStyle.content}>{data.type}</td>
                        <td style={tableStyle.content}>{data.dateAdded.split('T')[0]}</td>
                    </tr>
                )
            })
        }
    </table>
  )
}

export default MyServiceListTable
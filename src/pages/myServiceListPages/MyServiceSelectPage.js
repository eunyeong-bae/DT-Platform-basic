import React, { useState } from 'react'
import MyServiceListTable from '../../componenets/MyServiceListTable'
import AssetPreview from '../../componenets/AssetPreview'

const MyServiceSelectPage = () => {
  const [layer, setLayer] = useState(null); //tilesetvisibility에 전달할 layers 용

  return (
    <div style={{display:'flex', justifyContent:'space-around', height:'100%'}}>
        <MyServiceListTable serviceLayers={layer} setServiceLayers={setLayer}/>

        <AssetPreview currentPage='serviceSelectPg' layer={layer}/>
    </div>
  )
}

export default MyServiceSelectPage
import React, { useEffect, useState } from 'react'
import MyServiceListTable from '../../componenets/MyServiceListTable'
import AssetPreview from '../../componenets/AssetPreview'

const MyServiceSelectPage = () => {
  const [layer, setLayer] = useState(null); //tilesetvisibility에 전달할 layers 용

  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
        <MyServiceListTable serviceLayers={layer} setServiceLayers={setLayer}/>

        <AssetPreview currentPage='serviceSelectPg' layer={layer} setLayer={setLayer} />
    </div>
  )
}

export default MyServiceSelectPage
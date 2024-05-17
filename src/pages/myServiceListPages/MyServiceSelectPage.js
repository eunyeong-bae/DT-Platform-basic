import React, { useEffect, useState } from 'react'
import MyServiceListTable from '../../componenets/MyServiceListTable'
import AssetPreview from '../../componenets/AssetPreview'

const MyServiceSelectPage = () => {
  const [serviceLayers, setServiceLayers] = useState([]);
  const [layers, setLayers] = useState([]); //tilesetvisibility에 전달할 layers 용

  
  useEffect(() => {
    setLayers(serviceLayers);
  }, [serviceLayers])

  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
        <MyServiceListTable 
          serviceLayers={serviceLayers} 
          setServiceLayers={setServiceLayers}
        />
        <AssetPreview 
          layers={layers}
          setTilesets={setServiceLayers}
        />
    </div>
  )
}

export default MyServiceSelectPage
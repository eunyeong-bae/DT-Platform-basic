import React, { useEffect, useState } from 'react'
import AddServiceMenu from '../../componenets/AddServiceMenu'
import AssetPreview from '../../componenets/AssetPreview'

const MyServiceAddPage = () => {
  const [layer, setLayer] = useState(null); //tilesetvisibility에 전달할 layers 용
    
  return (
    <div style={{height:'100%', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>    
        <AddServiceMenu layer={layer} setLayer={setLayer} />
        
        <AssetPreview layer={layer} setLayer={setLayer} />
    </div>
  )
}

export default MyServiceAddPage
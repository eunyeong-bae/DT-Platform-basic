import React from 'react'
import TilesetVisibilityUpdater from './TilesetVisibilityUpdater';

const AssetPreview = ({layers, setTilesets}) => {

  return (
    <div style={{border:'1px solid', width:'400px', background:'#ffffff'}}>
        <p style={{borderBottom:'1px solid #eeeeee', height:'40px', alignContent:'center'}}>서비스 이름</p>
        <div id="cesiumContainer" style={{borderBottom:'1px solid #eeeeee'}}>
            <TilesetVisibilityUpdater 
              layers={layers}
              setTilesets={setTilesets}
            />
        </div>
        <div style={{height:'300px', border:'1px solid red'}}>
            서비스 내용 설명
        </div>
    </div>
  )
}

export default AssetPreview;
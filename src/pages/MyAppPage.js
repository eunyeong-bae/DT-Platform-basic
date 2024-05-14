import React, { useEffect, useState } from 'react'
import NavBarMenu from '../componenets/NavBarMenu'
import MyServiceListTable from '../componenets/MyServiceListTable'
import TilesetVisibilityUpdater from '../componenets/TilesetVisibilityUpdater';

const MyAppPage = () => {
    const [layerTable, setLayerTable] = useState(false); //table on off

    const [layerCheckbox, setLayerCheckbox] = useState(false); //table on off

    const [serviceLayers, setServiceLayers] = useState([]); //서비스 레이어에서 선택한 레이어들 데이터

    const [layers, setLayers] = useState([]); //tilesetvisibility에 전달할 layers 용
    const [tilesets, setTilesets] = useState([]); //tilesetvisibility에서 데이터 셋하는 함수 용
    
    const onClickAddLayer = () => setLayerTable(prev => !prev);

    const handleLayer = (id) => {
        //api 쏘기
        // console.log("layer id: ", id);
        setLayerCheckbox(prev => !prev);
    }

    useEffect(() => {
        setLayers(serviceLayers);

        // console.log("user add layers: ", serviceLayers)
    }, [serviceLayers])

  return (
    <div style={{display:'flex', flexDirection:'column', width:'100%', height:'100%', background:'#deebf7', padding:'10px 0' }}>
        <NavBarMenu />

        <div style={{width:'100%', height:'calc(100% - 70px)', display:'flex',  justifyContent:'space-around'}}>
            <div  style={{width:'200px', border:'1px solid', background:'#fff2cc'}}>
              <div style={{padding:'20px 10px'}}>
                  <p>
                      서비스  레이어 
                      <button style={{marginLeft:'5px', borderRadius:'50%', width:'20px', height:'20px', border:'1px solid'}}
                        onClick={onClickAddLayer}>+</button>
                  </p>
                  <p style={{width:'100%'}}>-------------------------</p>
              </div>
              
              <div style={{padding:'0 10px'}}>
                {
                    serviceLayers?.map((layer) => {
                        return (
                            <div key={layer.id} 
                                style={{padding:'10px', textAlign:'left'}}
                                onClick={() => handleLayer(layer.id)}
                            >
                                <input type="checkbox" id="scales" name="scales" defaultChecked={layerCheckbox ? true : false} />
                                <label htmlFor="scales" style={{marginLeft:'8px'}}>{layer.name}</label>
                            </div>
                        )
                    })
                }
              </div>
            </div>

            <div style={{border:'1px solid', width:'calc(100% - 240px)', background:'#fff2cc', alignContent:'center'}}>
                {
                    (layerTable && !layerCheckbox) && 
                    <MyServiceListTable 
                        serviceLayers={serviceLayers} 
                        setServiceLayers={setServiceLayers}
                    />
                }
                {
                    layerCheckbox &&
                    <div id="cesiumContainer">
                        <TilesetVisibilityUpdater 
                            layers={layers}
                            setTilesets={setTilesets}
                        />
                    </div>
                }
            <div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default MyAppPage
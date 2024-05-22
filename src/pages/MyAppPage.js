import React, { useEffect, useState, useRef } from 'react';
import NavBarMenu from '../componenets/NavBarMenu';
import MyServiceListTable from '../componenets/MyServiceListTable';
import TilesetVisibilityUpdater from '../componenets/TilesetVisibilityUpdater';
import { Ion, Viewer, CesiumTerrainProvider } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMGFlMjAxNi1iMWJhLTRkN2MtOTYzYy1iMGY2YTc5Yzg1YTkiLCJpZCI6MjEyNjkyLCJpYXQiOjE3MTUzMDI0MDJ9.s678GHASYCJ8H8fyyTb79jsnFaDrWh-o7Xe8ig0XDqs';

const MyAppPage = () => {
    const [layerTable, setLayerTable] = useState(false); // 테이블 on/off 상태
    const [serviceLayers, setServiceLayers] = useState([]); // 선택한 서비스 레이어 데이터
    const [changedLayer, setChangedLayer] = useState(null); // 변경된 레이어 정보
    const viewerRef = useRef(null); // 뷰어 상태 useRef로 관리

    const onClickAddLayer = () => setLayerTable(prev => !prev);

    const handleLayer = (id) => {
        setServiceLayers(prevLayers =>
            prevLayers.map(layer => {
                if (layer.id === id) {
                    const updatedLayer = { ...layer, checked: !layer.checked };
                    setChangedLayer(updatedLayer);
                    return updatedLayer;
                }
                return layer;
            })
        );
    };

    useEffect(() => {
        // 뷰어 초기화
        const initializeViewer = async () => {
            const terrainProvider = await CesiumTerrainProvider.fromIonAssetId(1);
            const viewer = new Viewer("cesiumContainer", {
                terrainProvider: terrainProvider
            });
            viewer.scene.globe.depthTestAgainstTerrain = true;
            viewerRef.current = viewer; // useRef로 뷰어 객체에 대한 참조 저장
        };
        initializeViewer();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: '#deebf7', padding: '10px 0' }}>
            <NavBarMenu />

            <div style={{ width: '100%', height: 'calc(100% - 70px)', display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '200px', border: '1px solid', background: '#fff2cc' }}>
                    <div style={{ padding: '20px 10px' }}>
                        <p>
                            서비스 레이어
                            <button style={{ marginLeft: '5px', borderRadius: '50%', width: '20px', height: '20px', border: '1px solid' }} onClick={onClickAddLayer}>+</button>
                        </p>
                        <p style={{ width: '100%' }}>-------------------------</p>
                    </div>

                    <div style={{ padding: '0 10px' }}>
                        {serviceLayers?.map((layer) => (
                            <div key={layer.id} style={{ padding: '10px', textAlign: 'left' }}>
                                <input
                                    type="checkbox"
                                    id={`layer-${layer.id}`}
                                    name={`layer-${layer.id}`}
                                    checked={layer.checked || false}
                                    onChange={() => handleLayer(layer.id)}
                                />
                                <label htmlFor={`layer-${layer.id}`} style={{ marginLeft: '8px' }}>{layer.name}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ border: '1px solid', width: 'calc(100% - 240px)', background: '#fff2cc', alignContent: 'center' }}>
                    {layerTable && (
                        <div style={{ position: 'absolute', zIndex: 1 }}>
                            <MyServiceListTable serviceLayers={serviceLayers} setServiceLayers={setServiceLayers} />
                        </div>
                    )}
                    <div id="cesiumContainer" style={{ width: '100%', height: '100%' }}>
                        {viewerRef.current && changedLayer && (
                            <TilesetVisibilityUpdater viewer={viewerRef.current} layer={changedLayer} />
                        )}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default MyAppPage;

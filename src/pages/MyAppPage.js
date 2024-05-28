import React, { useEffect, useState, useRef} from 'react';
import NavBarMenu from '../componenets/NavBarMenu';
import MyServiceListTable from '../componenets/MyServiceListTable';
import TilesetVisibilityUpdater from '../componenets/TilesetVisibilityUpdater';
import { Ion, Viewer, CesiumTerrainProvider} from 'cesium';
import TilesetCompareUpdater from '../componenets/TilesetCompareUpdater';
import "cesium/Build/Cesium/Widgets/widgets.css";
import './style/style.css';

Ion.defaultAccessToken = process.env.REACT_APP_CESIUM_ACCESS_TOKEN;
// Ion.defaultServer = process.env.REACT_APP_SELF_HOSTED_SERVER_URL;

const MyAppPage = () => {
    const [isClickSplitViewBtn, setIsClickSplitViewBtn] = useState(false); //화면분할 버튼 클릭 체크용
    const [isSplitViewOpen, setIsSplitViewOpen] = useState(false); //화면분할 닫기 체크용
    const [splitViewLayers, setSplitViewLayers] = useState([]);//1차 서비스 레이어에서 선택한 레이어 중 체크박스한 서비스 레이어 데이터
    const [selectLayer, setSelectLayer] = useState([]); //화면분할 보기로 선택된 레이어 - [] 배열로 선택 값 두 개 받기

    const [layerTable, setLayerTable] = useState(false); // 테이블 on/off 상태
    const [serviceLayers, setServiceLayers] = useState([]); // 선택한 서비스 레이어 데이터
    const [changedLayer, setChangedLayer] = useState(null); // 변경된 레이어 정보
    const viewerRef = useRef(null); // 뷰어 상태 useRef로 관리

    const onClickAddLayer = () => setLayerTable(prev => !prev);

    const handleLayer = (selectLayer) => {
        setServiceLayers(prevLayers =>
            prevLayers.map(layer => {
                if (layer.id === selectLayer.id) {
                    const updatedLayer = { ...layer, checked: !layer.checked };
                    setChangedLayer(updatedLayer);
                    return updatedLayer;
                }
                return layer;
            })
        );
        
        setSplitViewLayers(prevLayers => {
            const isSelected = prevLayers.some(layer => layer.id === selectLayer.id);

            return isSelected ? prevLayers : [...splitViewLayers, selectLayer]
        });
    };

    //화면분할 레이어 선택 모달창에서 비교할 대상 두 개 선택
    const onChangeLayer = (splitLayer) => {      
        setSplitViewLayers(prevLayers => {
            const isSelected = prevLayers.some(layer => layer.id === splitLayer.id && layer.checked);

            if (selectLayer.length >= 2 && !isSelected) {
                return prevLayers;
            }

            const updatedLayers = prevLayers.map(layer => {
                if (layer.id === splitLayer.id) {
                    const updatedLayer = { ...layer, checked: !layer.checked };
                    if (updatedLayer.checked) {
                        setSelectLayer(prevSelected => {
                            if (!prevSelected?.some(l => l.id === updatedLayer.id)) {
                                return [...prevSelected, updatedLayer];
                            }
                            return prevSelected;
                        });
                    } else {
                        setSelectLayer(prevSelected => prevSelected.filter(l => l.id !== splitLayer.id));
                    }
                    return updatedLayer;
                }
                return layer;
            });

            return updatedLayers;
        });
    }

    const resetViewer = () => {
        if (viewerRef.current) {
            viewerRef.current.scene.primitives.removeAll();
        }
    };

    //화면분할 최종 선택 버튼 확인
    const onClickSplitView = () => {
        if(isSplitViewOpen){
            setSplitViewLayers(prevLayers =>
                prevLayers.map(layer => {
                    if (layer?.checked) {
                        const updatedLayer = { ...layer, checked: !layer.checked };
                        return updatedLayer;
                    }
                    return layer;
                })
            );
            
            setSelectLayer([]);
            
        }
        resetViewer(); // Reset the viewer when closing the split view

        setIsClickSplitViewBtn(prev => !prev);

        setIsSplitViewOpen(prev => !prev);
    }

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

    }, [ ]);

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
                                    onChange={() => handleLayer(layer)}
                                />
                                <label htmlFor={`layer-${layer.id}`} style={{ marginLeft: '8px' }}>{layer.name}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ border: '1px solid', width: 'calc(100% - 240px)', background: '#fff2cc', alignContent: 'center', position:'relative', overflow:'hidden'}}>
                    {layerTable && (
                        <div style={{ position: 'absolute', zIndex: 1 }}>
                            <MyServiceListTable serviceLayers={serviceLayers} setServiceLayers={setServiceLayers} />
                        </div>
                    )}

                    <div id="cesiumContainer" style={{ width: '100%', height: '100%' }}>
                        <div style={{position:'absolute', zIndex:1, top:'45px', right:'7px'}}>
                            <button style={{padding:'5px'}} onClick={() => setIsClickSplitViewBtn(prev => !prev)}>화면분할</button>
                        </div>

                        {viewerRef.current && changedLayer && (
                            <TilesetVisibilityUpdater viewer={viewerRef.current} layer={changedLayer} />
                        )}
                        
                        {viewerRef.current && isSplitViewOpen && 
                            <div id="slider">
                                <TilesetCompareUpdater viewer={viewerRef.current} layer={selectLayer}/>
                            </div>
                        }
                    </div>

                    { isClickSplitViewBtn && 
                        <SplitViewModal 
                            isSplitViewOpen={isSplitViewOpen} 
                            splitViewLayers={splitViewLayers} 
                            onChangeLayer={onChangeLayer} 
                            onClickSplitView={onClickSplitView} 
                            setIsClickSplitViewBtn={setIsClickSplitViewBtn}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default MyAppPage;

function SplitViewModal(props) {
    const {isSplitViewOpen, splitViewLayers, onChangeLayer, onClickSplitView, setIsClickSplitViewBtn} = props;

    return (
        <div style={{border:'1px solid',zIndex:'5', position:'absolute', background:'#ffffff', top:'35%', right:'40%', width:'250px', height:'auto'}}>
            <p style={{padding:'5px', borderBottom:'1px solid', background:'#eeeeee', fontWeight:'bold'}}>{isSplitViewOpen ? '화면분할 비교보기 중지' : '화면분할 레이어 선택'}
                {!isSplitViewOpen && <p style={{fontSize:'11px', color:'blue', padding:'5px 0'}}>※ 비교할 레이어 2개만 선택하세요</p>}
            </p>
            {
                isSplitViewOpen ? 
                    <p style={{borderBottom:'1px solid', height:'100px', alignContent:'center'}}>화면분할 비교보기를 중지합니다.</p>
                :
                    splitViewLayers?.map(layer => (
                        <div key={layer.id} style={{ borderBottom:'1px solid', display:'flex', justifyContent:'space-around', background: layer.checked && '#ffff00'}} onClick={() => onChangeLayer(layer)}>
                            <label htmlFor={`splitLayer-${layer.id}`} style={{ borderRight:'1px solid',padding: '10px', width:'calc(100% - 40px)'}}>{layer.name}</label>
                            <p style={{width:'40px', alignContent:'center'}}> {layer?.checked && '✓'}</p>
                        </div>
                    ))
            }
            <div style={{ padding:'10px 5px', display:'flex', justifyContent:'space-around'}}>
                <button style={{width:'70px', padding:'2px'}} onClick={onClickSplitView}>확인</button>
                <button style={{width:'70px', padding:'2px'}} onClick={() => setIsClickSplitViewBtn(prev => !prev)}>취소</button>
            </div>
        </div>
    )
}
import React, { useEffect, useRef } from 'react'
import TilesetVisibilityUpdater from './TilesetVisibilityUpdater';
import { Ion, Viewer, CesiumTerrainProvider } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMGFlMjAxNi1iMWJhLTRkN2MtOTYzYy1iMGY2YTc5Yzg1YTkiLCJpZCI6MjEyNjkyLCJpYXQiOjE3MTUzMDI0MDJ9.s678GHASYCJ8H8fyyTb79jsnFaDrWh-o7Xe8ig0XDqs';

const styles = {
  container: {
      width: '500px',
      height: 'fit-content',
      background: '#ffffff',
  },
  header: {
      border: '1px solid #dddddd',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  cesiumContainer: {
      height: '350px',
  },
  contentContainer: {
      height: '300px',
      background: '#ffffff',
      border: '1px solid #dddddd',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  content: {
      height: 'calc(100% - 35px)',
      width: '100%',
      padding: '10px',
  },
};

const AssetPreview = ({currentPage, layer}) => {
  const viewerRef = useRef(null); // 뷰어 상태 useRef로 관리

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
      <div style={styles.container}>
          <p style={styles.header}>{layer ? layer.name : 'Cesium World Terrain'}</p>
          <div id="cesiumContainer" style={styles.cesiumContainer}>
              <TilesetVisibilityUpdater viewer={viewerRef.current} layer={layer} />
          </div>
          {currentPage && (
              <div style={styles.contentContainer}>
                  <button>내용 수정</button>
                  <div style={styles.content}>
                      <p>제목 : {layer? layer.name : 'Cesium World Terrain'}</p>
                      <p>내용 : {layer? layer.description : ''}</p>
                      <p>타입 : {layer? layer.type : ''}</p>
                      <p>날짜 : {layer? layer.dateAdded.split('T')[0] : ''}</p>
                  </div>
              </div>
          )}
      </div>
  );
}

export default AssetPreview;
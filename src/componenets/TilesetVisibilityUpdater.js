import React, { useEffect, useRef, useState } from 'react';
import { Ion, Viewer, Cesium3DTileset, Cesium3DTileStyle, defined, CesiumTerrainProvider, Terrain } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

// window.CESIUM_BASE_URL = '/static/Cesium/';
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMGFlMjAxNi1iMWJhLTRkN2MtOTYzYy1iMGY2YTc5Yzg1YTkiLCJpZCI6MjEyNjkyLCJpYXQiOjE3MTUzMDI0MDJ9.s678GHASYCJ8H8fyyTb79jsnFaDrWh-o7Xe8ig0XDqs';

const TilesetVisibilityUpdater = ({ layers, setTilesets }) => {
  const [viewerLoaded, setViewerLoaded] = useState(false); // 뷰어 로딩 상태를 추적합니다.
  const viewerRef = useRef(null);

  useEffect(() => {
    const initializeViewer = async () => {
      const viewer = new Viewer("cesiumContainer", {
        terrainProvider: await CesiumTerrainProvider.fromIonAssetId(1)
      });
      viewer.scene.globe.depthTestAgainstTerrain = true;
      viewerRef.current = viewer;
      setViewerLoaded(true); // 뷰어가 로딩되었음을 표시합니다.
    };

    initializeViewer();
  }, []);

  useEffect(() => {
    // 뷰어가 로딩되었고 레이어가 변경되었을 때 타일셋을 로딩합니다.
    if (viewerLoaded && layers.length > 0) {
      loadTileset(layers[0]?.id);
    }
  }, [viewerLoaded, layers]);

  const loadTileset = async (assetId) => {
    if (!viewerRef.current) return; // 뷰어가 초기화되지 않았으면 종료합니다.
    try {
      const tileset = await Cesium3DTileset.fromIonAssetId(assetId);
      viewerRef.current.scene.primitives.add(tileset);
      await viewerRef.current.zoomTo(tileset);
    } catch (error) {
      console.log("loadTileset error:", error);
    }
  };

  return null; // 렌더링할 내용이 없으므로 null을 반환합니다.
};

export default TilesetVisibilityUpdater;

import React, { useEffect } from 'react';
import { Ion, Viewer, Cesium3DTileset, Cesium3DTileStyle, defined, CesiumTerrainProvider, Terrain } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMGFlMjAxNi1iMWJhLTRkN2MtOTYzYy1iMGY2YTc5Yzg1YTkiLCJpZCI6MjEyNjkyLCJpYXQiOjE3MTUzMDI0MDJ9.s678GHASYCJ8H8fyyTb79jsnFaDrWh-o7Xe8ig0XDqs';

const TilesetVisibilityUpdater = ({ layers, setTilesets }) => {
  
  const loadTileset = async (assetId) => {
    const viewer = new Viewer("cesiumContainer");
    // viewer.scene.globe.depthTestAgainstTerrain = true;
    
    try {
      const tileset = await Cesium3DTileset.fromIonAssetId(assetId);
      console.log("djflsjfksldfjklsjfklsdjfklsdjfklsd", tileset)
      viewer.scene.primitives.add(tileset);
      await viewer.zoomTo(tileset);

      // Apply the default style if it exists
      // const extras = tileset.asset.extras;
      // console.log("dddddddddd33333333333333: ", extras)

      // if (
      //   defined(extras) &&
      //   defined(extras.ion) &&
      //   defined(extras.ion.defaultStyle)
      // ) {
      //   tileset.style = new Cesium3DTileStyle(extras.ion.defaultStyle);
      // }

      // return tileset;

    } catch (error) {
      console.log("loadTileset's : ", error);
      return null;
    }
  };

  useEffect( () => {    
    loadTileset(layers[0]?.id);

    // cleanup 함수
    return () => {
      // 리소스 해제 등 정리 작업
    };
  }, [layers, setTilesets]);

  return null; // 이 컴포넌트는 실제로 렌더링할 필요가 없으므로 null을 반환합니다.
};

export default TilesetVisibilityUpdater;
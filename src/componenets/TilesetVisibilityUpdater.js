import React, { useEffect } from 'react';
import { Ion, Viewer, Cesium3DTileset, Cesium3DTileStyle, defined, CesiumTerrainProvider, Terrain } from 'cesium';

Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMGFlMjAxNi1iMWJhLTRkN2MtOTYzYy1iMGY2YTc5Yzg1YTkiLCJpZCI6MjEyNjkyLCJpYXQiOjE3MTUzMDI0MDJ9.s678GHASYCJ8H8fyyTb79jsnFaDrWh-o7Xe8ig0XDqs";

const TilesetVisibilityUpdater = ({ layers, setTilesets }) => {
  
  useEffect( () => {    
    const loadTileset = async (assetId) => {
      const viewer = new Viewer("cesiumContainer");
      
      try {
        
        const tileset = await Cesium3DTileset.fromIonAssetId(assetId);
        viewer.scene.primitives.add(tileset);
        await viewer.zoomTo(tileset);
  
        // Apply the default style if it exists
        const extras = tileset.asset.extras;
        console.log("dddddddddd33333333333333: ", extras)
  
        if (
          defined(extras) &&
          defined(extras.ion) &&
          defined(extras.ion.defaultStyle)
        ) {
          tileset.style = new Cesium3DTileStyle(extras.ion.defaultStyle);
        }
  
        // return tileset;
  
      } catch (error) {
        console.log("loadTileset's : ", error);
        return null;
      }
    };
    
    loadTileset(layers[0].id);

    // const updateTilesetVisibility = async () => {
    //   const updatedTilesets = {};

    //   for (const layer of layers) {
    //     console.log("ddddd1111111111111111", layer)
    //     //테스트 소스
    //     const tileset = await loadTileset(layer.id);
    //     if (tileset) {
    //       updatedTilesets[layer.id] = tileset;
    //     }
    //     console.log("ddddd5444444444444444", tileset)
    //     console.log("ddddd555555555555555", updatedTilesets)
    //    /**
    //     * 원본소스
    //     *  if (layer.checked) {
    //       // 해당 레이어의 assetId를 사용하여 Tileset을 로드하고 상태에 추가
    //       const tileset = await loadTileset(layer.id);
    //       if (tileset) {
    //         updatedTilesets[layer.id] = tileset;
    //       }
    //     } else {
    //       // 레이어가 체크되지 않은 경우, 상태에서 해당 Tileset 제거
    //       delete updatedTilesets[layer.id];
    //     }
    //     */
    //   }
    //   setTilesets(updatedTilesets);
    // };

    // updateTilesetVisibility();

    // cleanup 함수
    return () => {
      // 리소스 해제 등 정리 작업
    };
  }, [layers, setTilesets]);

  return null; // 이 컴포넌트는 실제로 렌더링할 필요가 없으므로 null을 반환합니다.
};

export default TilesetVisibilityUpdater;
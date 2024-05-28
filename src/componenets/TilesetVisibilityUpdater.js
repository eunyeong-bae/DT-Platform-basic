import React, { useEffect, useState } from 'react';
import { Ion, Cesium3DTileset } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

Ion.defaultAccessToken = process.env.REACT_APP_CESIUM_ACCESS_TOKEN;
// Ion.defaultServer = process.env.REACT_APP_SELF_HOSTED_SERVER_URL;

const TilesetVisibilityUpdater = ({ viewer, layer }) => {
  const [tileset, setTileset] = useState(null);

  useEffect(() => {
    console.log("test", layer)
    const updateTileset = async () => {
      if (!viewer) return;

      if (layer?.checked) {
        // 레이어가 체크된 경우 타일셋을 추가
        try {
          const newTileset = await Cesium3DTileset.fromIonAssetId(layer.id);
          viewer.scene.primitives.add(newTileset);
          await viewer.zoomTo(newTileset);
          setTileset(newTileset);
        } catch (error) {
          console.log("loadTileset error:", error);
        }
      } else if (tileset) {
        // 레이어가 체크 해제된 경우 타일셋을 제거
        viewer.scene.primitives.remove(tileset);
        setTileset(null);
      }
    };

    updateTileset();

    return () => {
      // 컴포넌트 언마운트 시 타일셋 제거
      if (tileset) {
        viewer?.scene?.primitives.remove(tileset);
      }
    };
  }, [viewer, layer]);

  return null; // 렌더링할 내용이 없으므로 null을 반환합니다.
};

export default TilesetVisibilityUpdater;

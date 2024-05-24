import React, { useEffect, useState } from 'react'
import { Ion, Cesium3DTileset, createOsmBuildingsAsync, SplitDirection, ScreenSpaceEventHandler, ScreenSpaceEventType } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

// Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMGFlMjAxNi1iMWJhLTRkN2MtOTYzYy1iMGY2YTc5Yzg1YTkiLCJpZCI6MjEyNjkyLCJpYXQiOjE3MTUzMDI0MDJ9.s678GHASYCJ8H8fyyTb79jsnFaDrWh-o7Xe8ig0XDqs';
Ion.defaultServer = 'http://172.18.247.14:31587';

const TilesetCompareUpdater = ({viewer, layer}) => {
    const [tileset, setTileset] = useState(null);

    useEffect(() => {
      const updateTileset = async () => {
        if (!viewer || layer.length === 0) return;

        let leftLayer = layer[0];
        let rightLayer = layer[1];
  
        if (leftLayer.checked && rightLayer.checked) {
          // 레이어가 체크된 경우 타일셋을 추가
          try {
            const leftTileset = await Cesium3DTileset.fromIonAssetId(leftLayer.id);
            viewer.scene.primitives.add(leftTileset);
            leftTileset.splitDirection = SplitDirection.LEFT;

            viewer.zoomTo(leftTileset);
            setTileset(leftTileset);
            
            const rightTileset = await Cesium3DTileset.fromIonAssetId(rightLayer.id);
            viewer.scene.primitives.add(rightTileset);
            rightTileset.splitDirection = SplitDirection.RIGHT;
            
            // setTileset([...tileset, rightTileset]);

          } catch (error) {
            console.log(`Error loading tileset: ${error}`);
          }

          initializeSlider(viewer);
          
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

const initializeSlider = (viewer) => {
  const slider = document.getElementById('slider');
  if (!slider) return;

  viewer.scene.splitPosition = slider.offsetLeft / slider.parentElement.offsetWidth;

  const handler = new ScreenSpaceEventHandler(slider);
  let moveActive = false;

  const move = (movement) => {
      if (!moveActive) return;

      const relativeOffset = movement.endPosition.x;
      const splitPosition = (slider.offsetLeft + relativeOffset) / slider.parentElement.offsetWidth;
      slider.style.left = `${100.0 * splitPosition}%`;
      viewer.scene.splitPosition = splitPosition;
  };

  handler.setInputAction(() => { moveActive = true; }, ScreenSpaceEventType.LEFT_DOWN);
  handler.setInputAction(() => { moveActive = true; }, ScreenSpaceEventType.PINCH_START);
  handler.setInputAction(move, ScreenSpaceEventType.MOUSE_MOVE);
  handler.setInputAction(move, ScreenSpaceEventType.PINCH_MOVE);
  handler.setInputAction(() => { moveActive = false; }, ScreenSpaceEventType.LEFT_UP);
  handler.setInputAction(() => { moveActive = false; }, ScreenSpaceEventType.PINCH_END);
};

export default TilesetCompareUpdater
import { useEffect, useRef } from "react";
import { CesiumTerrainProvider, Viewer } from "cesium";

//viewer 하나만 띄우고 유지하기 위해서
const useViewerRef = () => {
    const viewerRef = useRef(null);

    const TilesetViewer = async() => {
        const viewer = new Viewer ("cesiumContainer", {
                terrainProvider: await CesiumTerrainProvider.fromIonAssetId(
                1,
            )
        });
        viewer.scene.globe.depthTestAgainstTerrain = true;
      
        return viewer;
    };

    useEffect(() => {
        const initializeViewer = async() => {
        const viewer = await TilesetViewer();
        viewerRef.current = viewer;
        };

        initializeViewer();
    }, [])

    return {
        viewerRef
    }
}

export default useViewerRef;
import { useEffect, useRef } from "react";
import TilesetViewer from "../componenets/TilesetViewer";

//viewer 하나만 띄우고 유지하기 위해서
const useViewerRef = () => {
    const viewerRef = useRef(null);

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
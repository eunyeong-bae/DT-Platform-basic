import axios from "axios";

const CESIUM_ACCESS_TOKEN = process.env.REACT_APP_CESIUM_ACCESS_TOKEN;

export const getAssets = async() => {
    try{
        const response = await axios.get('https://api.cesium.com/v1/assets', {
            baseURL: 'https://api.cesium.com/v1/assets',
            headers: { Authorization: `Bearer ${CESIUM_ACCESS_TOKEN}` },
        })

        return response.data;
        
    }catch(error) {
        console.log("ddd",error)
    }
}

/**
 * cesium self-hosted 서버 연결하는 api 통신
 * 
 * 
    export const getAssets = async() => {
        try{
            const response = await axios.get('http://172.18.247.14:31587/v1/assets',{
                baseURL: 'https://api.cesium.com/v1/assets',
                // headers: { Authorization: `Bearer ${accessToken}` },
            });
            // console.log("success self hosted data : 121212", response.data)
            return response.data;
            
        }catch(error) {
            console.log("ddd",error)
        }
    }
 * 
 */

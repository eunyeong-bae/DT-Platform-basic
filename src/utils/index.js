import axios from "axios";

//비동기 통신에서 공통적으로 사용하는 axios 인스턴스 생성
const axiosAssetApi = (options) => {
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    const instance = axios.create({
        baseURL: 'https://api.cesium.com/v1/assets',
        headers: { Authorization: `Bearer ${accessToken}` },
    })

    return instance
}

export const assetsInstance = axiosAssetApi();
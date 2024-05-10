import axios from "axios";

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMGFlMjAxNi1iMWJhLTRkN2MtOTYzYy1iMGY2YTc5Yzg1YTkiLCJpZCI6MjEyNjkyLCJpYXQiOjE3MTUzMDI0MDJ9.s678GHASYCJ8H8fyyTb79jsnFaDrWh-o7Xe8ig0XDqs';

export const getAssets = async() => {
    try{
        // const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
        const response = await axios.get('https://api.cesium.com/v1/assets', {
            baseURL: 'https://api.cesium.com/v1/assets',
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        // console.log("dd", response.data)
        return response.data;
        
    }catch(error) {
        console.log("ddd",error)
    }
}
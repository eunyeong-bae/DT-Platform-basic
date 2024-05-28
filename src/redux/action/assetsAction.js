import axios from 'axios';

const CESIUM_ACCESS_TOKEN = process.env.REACT_APP_CESIUM_ACCESS_TOKEN;

function getAssetLists () {
    return async(dispatch, getState) => {
        const result = await axios.get('https://api.cesium.com/v1/assets', 
                        {
                            headers: {Authorization: `Bearer ${CESIUM_ACCESS_TOKEN}` }
                    })
                    .then((res) => {
                        return res.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
        
        dispatch({
            type: "GET_ASSETS_SUCCESS", payload:{ result}
        })
    
    }    

}

export {getAssetLists}
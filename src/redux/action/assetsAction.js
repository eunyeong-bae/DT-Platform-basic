import axios from 'axios';

function getAssetLists () {
    // const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMGFlMjAxNi1iMWJhLTRkN2MtOTYzYy1iMGY2YTc5Yzg1YTkiLCJpZCI6MjEyNjkyLCJpYXQiOjE3MTUzMDI0MDJ9.s678GHASYCJ8H8fyyTb79jsnFaDrWh-o7Xe8ig0XDqs';

    return async(dispatch, getState) => {
        const result = await axios.get('https://api.cesium.com/v1/assets', 
                        {
                            headers: {Authorization: `Bearer ${accessToken}` }
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
let initialState = {
    currentPage: 'home',
    subBarMenuInfo: {
        isSubMenuOpen: false,
        selectedSubMenu: null,
    },
    modalInfo: {
        isModalOpen: false,
        selectedMenu: null,
    },
    userData: {
        id:'',
        password:'',
        authenticate: false,
        userName: 'eunyeong',
        company: '신한항업',
        email: 'adcadcad@naver.com',
        phone: '010-1234-5678',
    },
    myAssetDatas: [],
    addServiceLists: [
        //my assets 데이터에서 사용자가 선택한 데이터 저장소
        //현재 임의의 데이터 삽입
        { id: 1, name: 'Cesium World Terrain', type: 'TERRAIN', dateAdded: '2024-05-10' },
        { id: 2, name: 'Bing Maps Aerial', type: 'IMAGERY', dateAdded: '2024-05-10' },
        { id: 3, name: 'Bing Maps Aerial with Labels', type: 'IMAGERY', dateAdded: '2024-05-10' },
        { id: 4, name: 'Bing Maps Road', type: 'IMAGERY', dateAdded: '2024-05-10' },
        { id: 96188, name: 'Cesium OSM Buildings', type: '3DTILES', dateAdded: '2024-05-10' },
        { id: 2275207, name: 'Google Photorealistic 3D Tiles', type: '3DTILES', dateAdded: '2024-05-10' },
        { id: 2562681, name: '3dmodel_citygml', type: '3DTILES', dateAdded: '2024-05-10' },
        { id: 2562865, name: 'new_building_denver', type: 'GEOJSON', dateAdded: '2024-05-10' },
        { id: 2562911, name: 'PSFS', type: '3DTILES', dateAdded: '2024-05-10' }
    ],
    
}

function reducer(state = initialState, action) {
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {
                ...state,
                userData: {
                    ...state.userData,
                    id: action.payload.id,
                    password: action.payload.password,
                    authenticate: true,
                }
            }
        case "LOGOUT_SUCCESS":
            return {
                ...state,
                currentPage: 'home',
                subBarMenuInfo: {
                    isSubMenuOpen: false,
                    selectedSubMenu: null,
                },
                modalInfo: {
                    selectedMenu: null,
                    isModalOpen: false,
                },
                userData: {
                    ...state.userData,
                    id: '',
                    password: '',
                    authenticate: false,
                },
                myAssetDatas: [],
                addServiceLists: [],
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        case "SET_MODAL_INFO":
            return {
                ...state,
                modalInfo: {
                    selectedMenu: action.payload.selectedMenu,
                    isModalOpen: action.payload.isModalOpen,
                }
            }
        case "SET_SUBBAR_INFO":
            return {
                ...state,
                subBarMenuInfo: {
                    isSubMenuOpen: action.payload.isSubMenuOpen,
                    selectedSubMenu: action.payload?.selectedSubMenu,
                }
            }
        case "GET_ASSETS_SUCCESS":
            return {
                ...state,
                myAssetDatas : action.payload.myAssetDatas
            }
        case "ADD_SERVICE_LISTS":
            return {
                ...state,
                addServiceLists: [...state.addServiceLists, action.payload.serviceList]
            }
        default:
            return {...state};
    }
}

export default reducer;
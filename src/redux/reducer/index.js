const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_MODAL_INFO = "SET_MODAL_INFO";
const SET_SUBBAR_INFO = "SET_SUBBAR_INFO";
const GET_ASSETS_SUCCESS = "GET_ASSETS_SUCCESS";
const ADD_SERVICE_LISTS = "ADD_SERVICE_LISTS";
const REMOVE_SERVICE_LISTS = "REMOVE_SERVICE_LISTS";

const initialState = {
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
        id: '',
        password: '',
        authenticate: false,
        userName: 'eunyeong',
        company: '신한항업',
        email: 'adcadcad@naver.com',
        phone: '010-1234-5678',
    },
    myAssetDatas: [],
    addServiceLists: [], // 내 콘텐츠 관리 데이터 = 내 서비스 목록 선택 + 공공 개방 + URL
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    id: action.payload.id,
                    password: action.payload.password,
                    authenticate: true,
                },
            };
        case LOGOUT_SUCCESS:
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
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage,
            };
        case SET_MODAL_INFO:
            return {
                ...state,
                modalInfo: {
                    selectedMenu: action.payload.selectedMenu,
                    isModalOpen: action.payload.isModalOpen,
                },
            };
        case SET_SUBBAR_INFO:
            return {
                ...state,
                subBarMenuInfo: {
                    isSubMenuOpen: action.payload.isSubMenuOpen,
                    selectedSubMenu: action.payload.selectedSubMenu,
                },
            };
        case GET_ASSETS_SUCCESS:
            return {
                ...state,
                myAssetDatas: action.payload.myAssetDatas,
            };
        case ADD_SERVICE_LISTS:
            //중복 선택 방지
            const exists = state.addServiceLists.some(service => service.id === action.payload.serviceList.id);
            return {
                ...state,
                addServiceLists: exists ? state.addServiceLists : [...state.addServiceLists, action.payload.serviceList],
            };
        case REMOVE_SERVICE_LISTS:
            return {
                ...state,
                addServiceLists: action.payload.newServiceLists,
            };
        default:
            return state;
    }
}

export default reducer;
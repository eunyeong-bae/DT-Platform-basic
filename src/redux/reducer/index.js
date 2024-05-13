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
    assets: []
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
                assets: []
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
                assets : action.payload.assets
            }
        default:
            return {...state};
    }
}

export default reducer;
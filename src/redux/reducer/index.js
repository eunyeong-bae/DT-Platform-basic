let initialState = {
    currentPage: 'home',
    modalInfo: {
        selectedMenu: null,
        isOpenModal: false,
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
                modalInfo: {
                    selectedMenu: null,
                    isOpenModal: false,
                },
                userData: {
                    ...state.userData,
                    id: '',
                    password: '',
                    authenticate: false,
                }
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
                    isOpenModal: action.payload.isOpenModal,
                }
            }
        default:
            return {...state};
    }
}

export default reducer;
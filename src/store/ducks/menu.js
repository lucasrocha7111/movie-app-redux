export const Types = {
    SET_ACTIVE_MENU: 'menu/SET_ACTIVE_MENU'
}

const INITIAL_STATE = {
    options: [{title: 'Movie', value: 'movie'}, {title: 'TV', value: 'tv'}],
    typeSelected: 'movie'
}

function reducer(state = INITIAL_STATE, action) {
    if(action.type === Types.SET_ACTIVE_MENU) {
        return {
            ...state, typeSelected: action.typeSelected
        }
    }
    return state
}

export default reducer

export const Creators = {
    setMenu: (typeSelected) => (
        {
            type: Types.SET_ACTIVE_MENU,
            typeSelected
        }
    )
}



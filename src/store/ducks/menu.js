import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
    setMenu: ['typeSelected']
})

const INITIAL_STATE = {
    options: [{title: 'Movie', value: 'movie'}, {title: 'TV', value: 'tv'}],
    typeSelected: 'movie'
}

const setMenu = (state = INITIAL_STATE, action) => (
    {
        ...state, typeSelected: action.typeSelected
    }
)

export default createReducer(INITIAL_STATE, {
        [Types.SET_MENU]: setMenu
    }
)
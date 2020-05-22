import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
    setMenu: ['typeSelected'],
    setIsFetching: ['isFetching'],
    setSearchText: ['searchText']
})

const INITIAL_STATE = {
    options: [{title: 'Movie', value: 'movie'}, {title: 'TV', value: 'tv'}],
    typeSelected: 'movie',
    isFetching: true,
    searchText: ''
}

const setMenu = (state = INITIAL_STATE, action) => (
    {
        ...state, typeSelected: action.typeSelected
    }
)

// Action to change loader status
const setIsFetching = (state = INITIAL_STATE, action) => (
    {
        ...state, isFetching: action.isFetching
    }
)

const setSearchText = (state = INITIAL_STATE, action) => (
    {
        ...state, searchText: action.searchText
    }
)

export default createReducer(INITIAL_STATE, {
        [Types.SET_MENU]: setMenu,
        [Types.SET_IS_FETCHING]: setIsFetching,
        [Types.SET_SEARCH_TEXT]: setSearchText
    }
)
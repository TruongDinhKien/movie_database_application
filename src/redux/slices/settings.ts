import { createSlice } from "@reduxjs/toolkit"

type TSetting = {
  sortedBy: string
  category: string
  search: string
  searchable: boolean
}

const initialState: TSetting = {
  sortedBy: 'title.desc',
  category: 'now_playing',
  search: '',
  searchable: false
}

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSortMovieBy(state, action) {
      state.sortedBy = action.payload
    },
    setCategory(state, action) {
      state.category = action.payload
      state.searchable = true
    },
    setSearch(state, action) {
      state.search = action.payload
      state.searchable = true
    },
    setSearchable(state, action) {
      state.search = action.payload
    },
  },
})

export const { setSortMovieBy, setCategory, setSearch, setSearchable } = settingSlice.actions
export default settingSlice.reducer
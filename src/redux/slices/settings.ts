import { createSlice } from "@reduxjs/toolkit"

type TSetting = {
  sortedBy: string
  category: string
}

const initialState: TSetting = {
  sortedBy: 'by_alp_odr',
  category: 'now_playing',
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
    },
  },
})

export const { setSortMovieBy, setCategory } = settingSlice.actions
export default settingSlice.reducer
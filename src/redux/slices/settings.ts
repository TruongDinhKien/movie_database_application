import { createSlice } from "@reduxjs/toolkit"

type TSetting = {
  sortedBy: string
}

const initialState: TSetting = {
  sortedBy: 'now_playing',
}

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSortMovieBy(state, action) {
      const sortBy = action.payload
      state.sortedBy = sortBy
    }
  },
})

export const { setSortMovieBy } = settingSlice.actions
export default settingSlice.reducer
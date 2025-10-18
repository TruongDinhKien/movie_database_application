import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiGet } from "api"
import { Alert } from "react-native"
import { RootState } from "redux/store"

type TApp = {
  loading: boolean
  movies: Movie[]
  page: number
}

const initialState: TApp = {
  loading: false,
  movies: [],
  page: 1
}

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false
        state.movies = action.payload?.results || []
      })
      .addCase(getMovies.rejected, (state) => {
        state.loading = false
      })
      .addCase(getMovies.pending, (state) => {
        state.loading = true
      })
  }
})

export const getMovies = createAsyncThunk(
  'movie/getMovies',
  async (filter: any, thunkAPI) => {
    const state = (thunkAPI.getState() as RootState)
    const app = state.app
    const settings = state.settings

    try {
      const res = await apiGet(`movie/${settings.category}?language="en-US"&page=${app.page}`)
      return res

    } catch (error) {
      Alert.alert('Error get movie list', JSON.stringify(error))
    }

  }
)

export const { setPage } = settingSlice.actions
export default settingSlice.reducer
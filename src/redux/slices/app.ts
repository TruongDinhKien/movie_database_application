import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiGet } from "api"
import { Alert } from "react-native"
import { RootState } from "redux/store"

type TApp = {
  loading: boolean
  movies: Movie[]
  page: number
  currentMovieId: null | number
}

const initialState: TApp = {
  loading: false,
  movies: [],
  page: 1,
  currentMovieId: null
}

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    resetPage(state) {
      state.page = 1
      state.movies = []
    },
    setCurrentMovieId(state, action) {
      state.currentMovieId = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false
        const movies = action.payload.results || []
        state.movies = action.payload.page === 1 ? movies : [...state.movies, ...movies]
        state.page = state.page + 1
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
  async (options: any, thunkAPI) => {
    const state = (thunkAPI.getState() as RootState)
    const app = state.app
    const settings = state.settings
    const searchTerm = settings.search
    const page = options.page || app.page
    let endpoint: string;
    try {
      if (searchTerm.length) {
        const encodedQuery = encodeURIComponent(searchTerm);
        endpoint = `search/movie?query=${encodedQuery}&page=${page}&language=en-US`;
      } else {
        endpoint = `movie/${settings.category}?language=en-US&page=${page}&sort_by=${settings.sortedBy}`;
      }
      const res = await apiGet(endpoint);
      return { ...res, page }

    } catch (error) {
      Alert.alert('Error get movie list', JSON.stringify(error))
    }

  }
)

export const { resetPage, setCurrentMovieId } = settingSlice.actions
export default settingSlice.reducer
import {
	createSlice,
	PayloadAction,
	createAsyncThunk,
	ActionReducerMapBuilder,
} from '@reduxjs/toolkit'
import { fetchCategories, fetchJoke } from '../../graphql'
import { Joke, JokeState } from '../../types'

export const getCategories = createAsyncThunk(
	'jokes/getCategories',
	async (_, { rejectWithValue }) => {
		try {
			const data = await fetchCategories()
			return data
		} catch (err: any) {
			return rejectWithValue(err.message)
		}
	}
)

export const getJoke = createAsyncThunk(
	'jokes/getJoke',
	async (category: string, { rejectWithValue }) => {
		try {
			const data = await fetchJoke(category)
			return data
		} catch (err: any) {
			return rejectWithValue(err.message)
		}
	}
)

const initialState = {
	categories: [''],
	selectedCategory: '',
	joke: null,
	loading: false,
	error: '',
} as JokeState

const jokeSlice = createSlice({
	name: 'jokes',
	initialState,
	reducers: {
		setSelectedCategory(state, action: PayloadAction<string>) {
			state.selectedCategory = action.payload
		},
		setJoke(state, action: PayloadAction<Joke>) {
			state.joke = action.payload
		},
		setCategories(state, action: PayloadAction<string[]>) {
			state.categories = action.payload
		},
	},
	extraReducers: (builder: ActionReducerMapBuilder<JokeState>) => {
		builder.addCase(getCategories.pending, (state) => {
			state.loading = true
			state.error = ''
		})

		builder.addCase(getCategories.fulfilled, (state, { payload }) => {
			state.loading = false
			state.error = ''
			state.categories = payload.categories
      state.joke = payload.joke
		})

		builder.addCase(getCategories.rejected, (state, { payload }) => {
			state.loading = false
			state.error = payload as string
		})

		builder.addCase(getJoke.pending, (state) => {
			state.loading = true
			state.error = ''
		})

		builder.addCase(getJoke.fulfilled, (state, { payload }) => {
			state.loading = false
			state.joke = payload.joke
			console.log('payload', payload)
		})

		builder.addCase(getJoke.rejected, (state, { payload }) => {
			state.loading = false
			state.error = payload as string
		})
	},
})

export const { setCategories, setJoke, setSelectedCategory } = jokeSlice.actions
export default jokeSlice.reducer

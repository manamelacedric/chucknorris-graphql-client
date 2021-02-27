
export type IconMap = {
	[key: string]: JSX.Element
}

export type Joke = {
	categories: string[]
	created_at: string
	icon_url: string
	id: string
	updated_at: string
	url: string
	value: string
}

export type JokeState = {
	categories: string[]
	selectedCategory: string
	joke: Joke | null
	loading: boolean
	error: string
}

import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { AppDispatch, RootState } from '../state'
import { getJoke, setSelectedCategory } from '../state/slices/jokes'


const Container = styled.main`
	font-family: 'Poppins', sans-serif;
	padding: 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`

const Error = styled.p`
	color: #ff0000;
`

const Image = styled.img`
	width: 200px;
	height: 200px;
`

const Tags = styled.div`
	display: flex;
	p {
		margin: 5px;
		color: #fe5f55;
	}
`

const Bold = styled.span`
	font-weight: bold;
`

type Props = {}

const Joke: FC<Props> = (props) => {
	const dispatch = useDispatch<AppDispatch>()
	const { category } = useParams()
	const navigate = useNavigate()
	const { loading, error, joke, categories } = useSelector(
		(state: RootState) => state.jokeState
	)

	useEffect(() => {
		if (!categories.includes(category)) {
			navigate('/', { replace: true })
		}
		dispatch(setSelectedCategory(category))
		dispatch(getJoke(category))
	}, [category, categories, dispatch, navigate])

	if (loading) {
		return <Container>Loading your joke, Please wait ...</Container>
	}

	if (error) {
		return (
			<Container>
				<p>
					An Error has occuring while getting your joke. Please try again later
				</p>
				<Error>{error}</Error>
			</Container>
		)
	}

	return joke ? (
		<Container>
			<Image src={joke.icon_url} alt="chuck norris" />
			<h2>{joke.value}</h2>
			<Tags>
				<p>Created <Bold>{format(new Date(joke.created_at), 'dd-MM-yyyy')}</Bold></p>
				<p>Category <Bold>{joke.categories[0]}</Bold></p>
				<p></p>
			</Tags>
		</Container>
	) : (
		<Container />
	)
}

export default Joke

import React, { useEffect, FC } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
	FaCat,
	FaBriefcase,
	FaStar,
	FaCode,
	FaExclamationCircle,
	FaUtensils,
	FaTshirt,
	FaHistory,
	FaDollarSign,
  FaFilm,
  FaHeadphones,
  FaLandmark,
  FaPlaceOfWorship,
  FaMicroscope,
  FaFutbol,
  FaSuitcase,
} from 'react-icons/fa'
import { AppDispatch, RootState } from '../state'
import { setSelectedCategory } from '../state/slices/jokes'
import { IconMap } from '../types'

const Container = styled.aside`
	font-family: 'Poppins', sans-serif;
	width: 200px;
	display: absolute;
	flex-direction: column;
	height: 100vh;
  overflow-y: scroll;
	background-color: #011936;
`

const CategoryTitle = styled.h2`
	line-height: 0;
	text-align: center;
	background-color: #fe5f55;
	height: 5rem;
	padding: 2rem;
	box-shadow: 0px 3px 0px 0px rgba(0,0,0,0.75);
`

const CategoryList = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
`

const ListItem = styled.li`
	cursor: pointer;
`

const CustomLink = styled(Link)`
	display: flex;
	padding: 0.3rem;
	&:hover {
		background-color: #fe5f55;
		border-left: 10px solid #fff;
		font-weight: bold;

	}
	div {
		margin-right: 5px;
		padding: 2px;
	}
`

const NavBar: FC = () => {
	const { categories, selectedCategory } = useSelector((state: RootState) => state.jokeState) 
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	useEffect(() => {
		if (categories.length) navigate('/dev')
	}, [navigate, categories])

	const handleCategoryClick = (e: any) => {
		e.preventDefault()

		const newCategory = e.currentTarget.innerText

		if (selectedCategory !== newCategory) {
			dispatch(setSelectedCategory(newCategory))
		}
	}

	const iconMap: IconMap = {
		animal: <FaCat />,
		career: <FaBriefcase />,
		celebrity: <FaStar />,
		dev: <FaCode />,
		explicit: <FaExclamationCircle />,
		fashion: <FaTshirt />,
		food: <FaUtensils />,
		history: <FaHistory />,
		money: <FaDollarSign />,
		movie: <FaFilm />,
		music: <FaHeadphones />,
		political: <FaLandmark />,
		religion: <FaPlaceOfWorship />,
		science: <FaMicroscope />,
		sport: <FaFutbol />,
		travel: <FaSuitcase />,
	}

	return (
		<Container>
			<CategoryTitle>Categories</CategoryTitle>
			<CategoryList>
				{categories.map((category: string) => (
					<ListItem key={category} onClick={handleCategoryClick}>
						<CustomLink to={category}>
							<div>{ iconMap[category] }</div>
							{category}
						</CustomLink>
					</ListItem>
				))}
			</CategoryList>
		</Container>
	)
}

export default NavBar

import React, { FC, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import theme from './theme'

import MainLayout from './layouts/MainLayout'
import Joke from './components/Joke'
import { RootState } from './state'
import { getCategories } from './state/slices/jokes'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #082c5c;
    color: #fff;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    display: block;
    width: 100%;
    color: #fff;
  }
`
const  App: FC = () => {
  const { categories } = useSelector((state: RootState) => state.jokeState)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

	return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path=":category" element={<Joke />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
	)
}

export default App

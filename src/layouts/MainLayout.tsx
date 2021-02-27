import React, { FC } from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

const Container = styled.div`
	display: flex;
	flex-direction: row;
`
const Main = styled.main`
	display: flex;
  flex-direction: column;
  flex: 1;
`

const MainLayout: FC = () => {
	return <Container>
    <NavBar />
    <Main>
      <Header />
      <Outlet />
    </Main>
  </Container>
}

export default MainLayout

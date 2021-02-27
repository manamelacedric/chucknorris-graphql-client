import React, { FC } from 'react'
import styled from 'styled-components'

const TitleBar = styled.header`
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 0px 0px rgba(0,0,0,0.75);
  height: 5rem;
`

const Title = styled.h1``

const Header: FC = () => {
  return (
    <TitleBar>
      <Title>Chuck Norris Jokes</Title>
    </TitleBar>
  )
}

export default Header

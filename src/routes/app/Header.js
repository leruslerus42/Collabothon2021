import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fff;
`

const Header = () => {
  return (
    <Wrapper>
      <h1>Green coins</h1>
    </Wrapper>
  )
}

export default Header

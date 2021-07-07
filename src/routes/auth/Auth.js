import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: yellowgreen;
`

const Login = ({ value }) => {
  return <Wrapper>Login page</Wrapper>
}

export default Login

import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: yellowgreen;
`

const Login = ({ value }) => {
  return <Wrapper>Login page</Wrapper>
}

export default Login

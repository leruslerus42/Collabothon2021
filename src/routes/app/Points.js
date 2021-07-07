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

/*
 Example usage:
 <Points value={5000} />
*/
const Points = ({ value }) => {
  return (
    <Wrapper>
      <h2>Points</h2>
      <div>{value}</div>
    </Wrapper>
  )
}

export default Points

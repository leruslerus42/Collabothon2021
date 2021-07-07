import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: yellowgreen;
`

const mockPoints = [
  {
    product: 'Almond Milk',
    points: 100,
  },
  {
    product: 'Almond Milk',
    points: 100,
  },
]

const Points = ({ points }) => {
  return (
    <Wrapper>
      <div>Last earned points</div>
      {mockPoints.map(item => (
        <div key={item.product}>
          {item.product} - {item.points}
        </div>
      ))}
    </Wrapper>
  )
}

export default Points

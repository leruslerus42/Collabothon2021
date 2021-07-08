import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'

const mockPoints = [
  {
    product: 'Almond Milk',
    points: 100,
  },
  {
    product: 'Peanut Butter',
    points: 100,
  },

  {
    product: 'Almond Milk',
    points: 100,
  },
  {
    product: 'Peanut Butter',
    points: 100,
  },

  {
    product: 'Almond Milk',
    points: 100,
  },
  {
    product: 'Peanut Butter',
    points: 100,
  },

  {
    product: 'Almond Milk',
    points: 100,
  },
  {
    product: 'Peanut Butter',
    points: 100,
  },

  {
    product: 'Almond Milk',
    points: 100,
  },
  {
    product: 'Peanut Butter',
    points: 100,
  },

  {
    product: 'Almond Milk',
    points: 100,
  },
  {
    product: 'Peanut Butter',
    points: 100,
  },
]

const App = () => (
  <div>
    <Page>
      <div>Product</div>

      {mockPoints.map(item => (
        <div key={item.product}>
          Product: {item.product} Points: {item.points}
        </div>
      ))}
    </Page>
  </div>
)

export default App

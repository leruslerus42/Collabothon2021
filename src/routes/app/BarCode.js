import React from 'react'
import styled from 'styled-components/macro'
import BarCode from 'react-barcode'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 400px;
`

const QRCodeComponent = props => (
  <Wrapper>
    <BarCode {...props} />
  </Wrapper>
)

export default QRCodeComponent

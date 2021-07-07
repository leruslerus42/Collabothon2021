import React from 'react'
import styled from 'styled-components/macro'
import BarCode from 'react-barcode'

const CodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const QRCodeComponent = props => (
  <CodeWrapper>
    <BarCode {...props} />
  </CodeWrapper>
)

export default QRCodeComponent

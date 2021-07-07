import React from 'react'
import styled from 'styled-components/macro'
import QRCode from 'react-qr-code'

const CodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const QRCodeComponent = props => (
  <CodeWrapper>
    <QRCode {...props} />
  </CodeWrapper>
)

export default QRCodeComponent

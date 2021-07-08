import React, { useState } from 'react'
import styled from 'styled-components/macro'
import BarCode from 'react-barcode'

import { Modal } from '@material-ui/core'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 400px;
  cursor: pointer;
`

const ModalWrapper = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

/*
  Generated based on user id.
*/
const QRCodeComponent = props => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper>
      <div onClick={() => setIsOpen(!isOpen)}>
        <BarCode {...props} />
      </div>
      <ModalWrapper
        onClick={() => setIsOpen(false)}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <BarCode width={5} height={400} {...props} />
      </ModalWrapper>
    </Wrapper>
  )
}

export default QRCodeComponent

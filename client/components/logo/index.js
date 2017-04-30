import React from 'react'
import styled from 'styled-components'

import RokkakuSvg from './rokkaku'

const Center = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
`

const Logo = () => (
	<Center>
    <div>⬢ Rokkaku</div>
    <div>
      <RokkakuSvg />
    </div>
 </Center>
)

export default Logo

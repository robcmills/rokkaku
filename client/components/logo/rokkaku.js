import React from 'react'
import styled from 'styled-components'

const pathStyle = `
  fill: none;
  stroke:#000000;
  stroke-width:4;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-miterlimit:10;
`
const Path = styled.path`${pathStyle}`
const Polyline = styled.polyline`${pathStyle}`
const Polygon = styled.polygon`${pathStyle}`

const RokkakuLogo = () => (
  <svg
    x="0px" y="0px"
    width="323.333px" height="102.667px"
    viewBox="0 0 323.333 102.667"
    style={{ enableBackground: 'new 0 0 323.333 102.667' }}
  >

    <Path d="M274.332,71.587c0.25,27.518,39.25,28,40,0" />
    <Polyline points="231.631,8.476 231.637,50.977 266.644,28.69 " />
    <Polyline points="231.631,91.396 231.637,50.977 266.644,71.181 "/>
    <Polyline points="147.661,7.593 147.667,50.977 182.673,27.808 "/>
    <Polyline points="147.661,91.396 147.667,50.977 182.673,70.298 "/>
    <Polyline points="103.411,7.343 103.417,50.977 138.423,27.558 "/>
    <Polyline points="103.411,91.396 103.417,50.977 138.423,70.048 "/>
    <Path d="M9.911,91.396c0,0,0.219-31.646,0.005-54.896C9.667,9.25,50.472,10.747,50.167,37
     c-0.25,21.5-20,23.5-29.75,18.25c9.25,5.25,24.507,13.965,24.507,13.965"/>
    <Polygon points="180.452,91.396 200.667,54.75 220.881,91.396 "/>
    <Path d="M94.667,70c0-11.042-8.958-20-20-20c-11.046,0-20,8.958-20,20s8.954,21.396,20,21.396
     C85.708,91.396,94.667,81.042,94.667,70z"/>

  </svg>
)

export default RokkakuLogo


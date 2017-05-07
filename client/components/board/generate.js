import defaultSettings from './default'

const generateHexagonBoard = () => {
  return {
    hexes: [{
      type: 'neutral1',
      xIndex: 0,
      yIndex: 0,
    }]
  }
}

const shapeFunctions = {
  HEXAGON: generateHexagonBoard,
}

export const generateBoard = ({
  radius,
  shape,
}) => shapeFunctions[shape]({ radius })

export const generateDefaultBoard = () => generateBoard(defaultSettings)

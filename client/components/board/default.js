import { assign, map } from 'lodash'
import { hexColors, HEX_RADIUS } from '../modules/constants'

const hexTypes = [
  ['empty'],
  ['empty', 'empty', 'neutral'],
  ['empty', 'empty', 'neutral2', 'neutral2'],
  ['empty', 'neutral3', 'neutral3', 'water'],
  ['empty', 'neutral', 'neutral', 'neutral', 'neutral'],
  ['neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2'],
  ['neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3'],
  ['neutral', 'neutral', 'neutral', 'neutral', 'neutral'],
  ['neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2'],
  ['neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3'],
  ['neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral'],
  ['neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2'],
  ['neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3'],
  ['neutral', 'neutral', 'neutral', 'neutral', 'neutral'],
  ['neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2'],
  ['neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3'],
  ['neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral'],
  ['neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2'],
  ['empty', 'neutral3', 'neutral3', 'neutral3', 'neutral3'],
  ['empty', 'neural', 'neutral', 'neural'],
  ['empty', 'empty', 'neutral2', 'neutral2'],
  ['empty', 'empty', 'neutral3'],
]

export default {
  hexes: map(hexTypes, (row, y) => (
    map(row, (type, x) => assign({}, {
      color: hexColors[type],
      type,
      xIndex: x,
      yIndex: y,
    }))
  )),
  offset: HEX_RADIUS * 2,
  height: HEX_RADIUS * 23,
  width: HEX_RADIUS * 19,
}

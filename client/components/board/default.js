import { map } from 'lodash'
import { HEX_RADIUS } from '../../modules/constants'

const hexTypes = [
  ['empty'],
  ['empty', 'empty', 'neutral1'],
  ['empty', 'empty', 'neutral2', 'neutral2'],
  ['empty', 'neutral3', 'neutral3', 'neutral3'],
  ['empty', 'neutral1', 'neutral1', 'neutral1', 'neutral1'],
  ['neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2'],
  ['neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3'],
  ['neutral1', 'neutral1', 'neutral1', 'neutral1', 'neutral1'],
  ['neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2'],
  ['neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3'],
  ['neutral1', 'neutral1', 'neutral1', 'neutral1', 'neutral1', 'neutral1'],
  ['neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2'],
  ['neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3'],
  ['neutral1', 'neutral1', 'neutral1', 'neutral1', 'neutral1'],
  ['neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2'],
  ['neutral3', 'neutral3', 'neutral3', 'neutral3', 'neutral3'],
  ['neutral1', 'neutral1', 'neutral1', 'neutral1', 'neutral1', 'neutral1'],
  ['neutral2', 'neutral2', 'neutral2', 'neutral2', 'neutral2'],
  ['empty', 'neutral3', 'neutral3', 'neutral3', 'neutral3'],
  ['empty', 'neutral1', 'neutral1', 'neutral1'],
  ['empty', 'empty', 'neutral2', 'neutral2'],
  ['empty', 'empty', 'neutral3'],
]

export default {
  hexes: map(hexTypes, row => (
    map(row, type => ({ type })
  ))),
  offset: HEX_RADIUS * 2,
  height: HEX_RADIUS * 23,
  width: HEX_RADIUS * 19,
}

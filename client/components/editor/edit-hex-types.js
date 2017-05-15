import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { map } from 'lodash'

import Label from '../inputs/label'

import { hexTypes } from '../../modules/constants'
import * as actions from './action-creators'

const EditHexTypes = ({ selectHexType, selectedHexType }) => (
  <div>
    <Label>Hex Types:</Label>
    {
      map(hexTypes, (color, type) => (
        <div>{type},{color}</div>
      ))
    }
  </div>
)

EditHexTypes.propTypes = {
  selectHexType: PropTypes.func,
  selectedHexType: PropTypes.func,
}

const mapStateToProps = ({ editor }) => ({ ...editor })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
  selectHexType: actions.selectHexType,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToActionCreators)(EditHexTypes)

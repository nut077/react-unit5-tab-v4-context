import React from 'react'
import PropTypes from 'prop-types'
import {compose, withContext, setPropTypes} from 'recompose'

const Tabs = ({children, selectedIndex}) => (
  <div>
    {children}
  </div>
);

export default compose(
  setPropTypes({
    children: PropTypes.node.isRequired,
    selectedIndex: PropTypes.number.isRequired
  }),
  withContext(
    {selectedIndex: PropTypes.number.isRequired},
    ({selectedIndex}) => ({selectedIndex})
  )
)(Tabs)
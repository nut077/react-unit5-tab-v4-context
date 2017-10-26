import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  withContext,
  setPropTypes,
  withState,
  withHandlers
} from 'recompose'

const Tabs = ({children}) => (
  <div>
    {children}
  </div>
);

export default compose(
  withState('selectedIndex', 'setSelectedIndex', ({selectedIndex}) => selectedIndex),
  withHandlers({
    onTabChange: ({setSelectedIndex}) => (tabIndex) => {
      setSelectedIndex(tabIndex)
    }
  }),
  setPropTypes({
    children: PropTypes.node.isRequired
  }),
  withContext(
    {selectedIndex: PropTypes.number.isRequired},
    ({selectedIndex}) => ({selectedIndex})
  ),
  withContext(
    {onTabChange: PropTypes.func},
    ({onTabChange}) => ({onTabChange})
  )
)(Tabs)
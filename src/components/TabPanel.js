import React from 'react'
import {compose, getContext, setPropTypes} from 'recompose'
import PropTypes from 'prop-types'

const TabPanel = ({children, tabIndex, selectedIndex}) => (
  <div className='tab-content'>
    {
      tabIndex === selectedIndex && (
        <div className='tab-pane active'>{children}</div>
      )
    }
  </div>
);

export default compose(
  setPropTypes({
    children: PropTypes.node.isRequired,
    tabIndex: PropTypes.number.isRequired
  }),
  getContext({
    selectedIndex: PropTypes.number.isRequired,
  })
)(TabPanel)
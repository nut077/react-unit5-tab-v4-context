import React from 'react'
import {compose, getContext, setPropTypes} from 'recompose'
import className from 'classname'
import PropTypes from 'prop-types'

const linkClasses = (tabIndex, selectedIndex) => (
  className('nav-link', {active: tabIndex === selectedIndex})
);

const Tab = ({children, tabIndex, selectedIndex}) => (
  <li className='nav-item'>
    <a className={linkClasses(tabIndex, selectedIndex)}>{children}</a>
  </li>
);

export default compose(
  setPropTypes({
    children: PropTypes.node.isRequired,
    tabIndex: PropTypes.number.isRequired
  }),
  getContext({
    selectedIndex: ({selectedIndex}) => selectedIndex
  })
)(Tab)
import React from 'react'
import {compose, getContext, setPropTypes} from 'recompose'
import className from 'classname'
import PropTypes from 'prop-types'

const linkClasses = (tabIndex, selectedIndex) => (
  className('nav-link', {active: tabIndex === selectedIndex})
);

const cursorPointer = {
  cursor: 'pointer'
};

const tabChange = (onTabChange, tabIndex) => {
  return () => onTabChange(tabIndex)
};

const Tab = ({children, tabIndex, selectedIndex, onTabChange}) => (
  <li className='nav-item'>
    <a
      className={linkClasses(tabIndex, selectedIndex)}
      onClick={tabChange(onTabChange, tabIndex)}
      style={cursorPointer}
    >{children}</a>
  </li>
);

export default compose(
  setPropTypes({
    children: PropTypes.node.isRequired,
    tabIndex: PropTypes.number.isRequired
  }),
  getContext({
    selectedIndex: PropTypes.number.isRequired,
    onTabChange: PropTypes.func.isRequired
  })
)(Tab)
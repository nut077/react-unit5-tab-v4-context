import React from 'react'
import PropTypes from 'prop-types'

const TabList = ({children}) => (
  <ul className='nav nav-tabs'>
    {children}
  </ul>
);

TabList.propTypes = {
  children: PropTypes.node.isRequired
};

export default TabList
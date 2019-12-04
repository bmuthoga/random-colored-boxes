import React from 'react'
import PropTypes from 'prop-types'
import './ColoredBox.css'

function ColoredBox({color}) {
  return (
    <div className="box" style={{ backgroundColor: color }} />
  )
}

ColoredBox.defaultProps = {
  color: '#000'
}

ColoredBox.propTypes = {
  color: PropTypes.string.isRequired
}

export default ColoredBox

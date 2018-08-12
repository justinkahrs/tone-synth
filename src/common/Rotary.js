import React from 'react'
import { Knob } from 'react-rotary-knob'

const Rotary = ({ label, onChange, range = { min: 0, max: 1 }, value }) => (
  <div>
    <label for={label}>{label}:</label>
    <div id={label}>{`${Math.floor(value * 100)}%`}</div>
    <Knob
      onChange={val => onChange(label, val)}
      min={range.min}
      max={range.max}
      unlockDistance={50}
      value={value}
    />
  </div>
)

export default Rotary

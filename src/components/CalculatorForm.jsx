'use client'

import { useState } from 'react'
import { calculate } from '../lib/calc'

export default function CalculatorForm({ calculator }) {
  const [values, setValues] = useState({ a: '', b: '', c: '', d: '' })
  const keys = ['a','b','c','d']
  function change(key, value) { setValues(Object.assign({}, values, { [key]: value })) }
  const result = calculate(calculator.type, values)
  return (
    <div className="card">
      {calculator.inputs.map(function(label, index){
        const key = keys[index]
        return <label key={label}>{label}<input className="input" value={values[key] || ''} onChange={function(e){change(key, e.target.value)}} placeholder="Enter value" /></label>
      })}
      <div className="result">{result}</div>
      <p className="muted">This result is an estimate for planning and education. Replace assumptions with your real numbers whenever possible.</p>
    </div>
  )
}

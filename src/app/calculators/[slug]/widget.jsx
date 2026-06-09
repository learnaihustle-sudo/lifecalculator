'use client'
import { useState } from 'react'
import { calculate } from '../../../lib/calc'

export default function CalculatorForm({ calculator }){
  const [values,setValues] = useState({})
  const result = calculate(calculator.type, values)
  function setVal(key,value){ setValues(Object.assign({}, values, { [key]: value })) }
  return <section className="card"><h2>Enter your numbers</h2>{calculator.inputs.map(function(label,index){ const key = ['a','b','c','d'][index] || String(index); return <label key={label}>{label}<input className="input" onChange={function(e){setVal(key,e.target.value)}} placeholder={label}/></label> })}<div className="result">{result}</div><button className="btn" onClick={function(){navigator.clipboard && navigator.clipboard.writeText(result)}}>Copy result</button></section>
}

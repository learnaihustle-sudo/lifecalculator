import { calculators } from '../../../data/calculators'
import CalculatorForm from '../../../components/CalculatorForm'

export function generateStaticParams() { return calculators.map(function(c){ return { slug: c.slug } }) }

export function generateMetadata({ params }) {
  const c = calculators.find(function(item){ return item.slug === params.slug })
  return { title: (c ? c.name : 'Calculator') + ' | The Life Calculator', description: c ? c.description : 'Calculator page' }
}

export default function CalculatorPage({ params }) {
  const c = calculators.find(function(item){ return item.slug === params.slug })
  if (!c) return <main className="wrap"><h1>Calculator not found</h1></main>
  const related = calculators.filter(function(item){ return item.category === c.category && item.slug !== c.slug }).slice(0,4)
  return (
    <main className="wrap">
      <span className="badge">{c.category}</span>
      <h1 className="section-title">{c.name}</h1>
      <p className="muted">{c.description}</p>
      <CalculatorForm calculator={c} />
      <section className="card">
        <h2>How this calculator works</h2>
        <p>This tool uses simple planning math and common estimation logic. For financial, medical, legal, or tax decisions, verify with a qualified source before making big moves.</p>
        <h3>Inputs</h3>
        <ul>{c.inputs.map(function(i){ return <li key={i}>{i}</li> })}</ul>
      </section>
      <div className="affiliate"><b>Affiliate placeholder:</b> {c.affiliate}. Replace this with a real offer that matches the calculator intent.</div>
      <h2 className="section-title">Related calculators</h2>
      <div className="grid">{related.map(function(r){ return <a className="card" href={'/calculators/' + r.slug} key={r.slug}><h3>{r.name}</h3><p className="muted">{r.description}</p></a> })}</div>
    </main>
  )
}

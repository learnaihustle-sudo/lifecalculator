import { calculators } from '../../data/calculators'

export const metadata = { title: 'All Calculators | The Life Calculator', description: 'Browse all Life Calculator tools.' }

export default function CalculatorsPage() {
  return (
    <main className="wrap">
      <h1 className="section-title">All calculators</h1>
      <p className="muted">Pick a calculator and turn life into numbers.</p>
      <div className="grid">
        {calculators.map(function(c){ return <a className="card" href={'/calculators/' + c.slug} key={c.slug}><span className="badge">{c.category}</span><h3>{c.name}</h3><p className="muted">{c.description}</p></a> })}
      </div>
    </main>
  )
}

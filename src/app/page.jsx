import { calculators, categories } from '../data/calculators'

export default function Home() {
  const popular = calculators.slice(0, 12)
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <span className="badge">Useful, weird, and built for traffic</span>
          <h1>Calculate Everything Life Throws At You</h1>
          <p>Money, health, home projects, creator income, parenting dates, and the strange little lifetime numbers that make people click share.</p>
          <a className="btn" href="/calculators">Explore calculators</a>
        </div>
      </section>
      <section className="wrap">
        <h2 className="section-title">Popular calculators</h2>
        <div className="grid">
          {popular.map(c => <a className="card" href={`/calculators/${c.slug}`} key={c.slug}><span className="badge">{c.category}</span><h3>{c.name}</h3><p className="muted">{c.description}</p></a>)}
        </div>
        <h2 className="section-title">Categories</h2>
        <div className="grid">
          {categories.map(cat => <a className="card" href={`/categories/${cat.toLowerCase().replaceAll(' ','-')}`} key={cat}><h3>{cat}</h3><p className="muted">Calculators for {cat.toLowerCase()}.</p></a>)}
        </div>
        <div className="affiliate"><b>Monetization ready:</b> affiliate placeholders are built into calculator pages so you can replace them with real links later.</div>
      </section>
    </main>
  )
}

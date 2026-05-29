import { categories, calculators } from '../../data/calculators'

export const metadata = { title: 'Calculator Categories | The Life Calculator', description: 'Browse calculator categories.' }

export default function CategoriesPage() {
  return (
    <main className="wrap">
      <h1 className="section-title">Calculator categories</h1>
      <div className="grid">
        {categories.map(function(cat){
          const count = calculators.filter(function(c){ return c.category === cat }).length
          return <a className="card" href={'/categories/' + cat.toLowerCase().replaceAll(' ','-')} key={cat}><h3>{cat}</h3><p className="muted">{count} calculators</p></a>
        })}
      </div>
    </main>
  )
}

import { categories, calculators } from '../../../data/calculators'

function slugify(text) { return text.toLowerCase().replaceAll(' ','-') }
export function generateStaticParams() { return categories.map(function(cat){ return { slug: slugify(cat) } }) }

export function generateMetadata({ params }) {
  const cat = categories.find(function(c){ return slugify(c) === params.slug })
  return { title: (cat || 'Category') + ' Calculators | The Life Calculator', description: 'Browse calculators for ' + (cat || 'this category') }
}

export default function CategoryPage({ params }) {
  const cat = categories.find(function(c){ return slugify(c) === params.slug })
  const list = calculators.filter(function(c){ return c.category === cat })
  return (
    <main className="wrap">
      <h1 className="section-title">{cat} calculators</h1>
      <div className="grid">
        {list.map(function(c){ return <a className="card" href={'/calculators/' + c.slug} key={c.slug}><h3>{c.name}</h3><p className="muted">{c.description}</p></a> })}
      </div>
    </main>
  )
}

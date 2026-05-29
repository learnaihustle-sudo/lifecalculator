export const metadata = { title: 'Calculator Growth Blog | The Life Calculator', description: 'Traffic ideas and calculator guides.' }

export default function BlogPage() {
  const posts = ['How to use weird calculators for viral traffic','Best money calculators to add affiliate links to','How lifetime stats calculators create shareable content','The first 100 calculator keywords to target']
  return <main className="wrap"><h1 className="section-title">Blog and traffic ideas</h1><div className="grid">{posts.map(function(p){return <article className="card" key={p}><h3>{p}</h3><p className="muted">Draft article placeholder for SEO growth.</p></article>})}</div></main>
}

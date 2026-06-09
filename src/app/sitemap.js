import { calculators, categories } from '../data/calculators'

const base = 'https://thelifecalculator.com'
function slugify(text) { return text.toLowerCase().replaceAll(' ','-') }

export default function sitemap() {
  const staticPages = ['', '/calculators', '/categories', '/blog', '/about', '/contact', '/privacy', '/terms', '/affiliate-disclosure']
  const calculatorPages = calculators.map(function(c){ return '/calculators/' + c.slug })
  const categoryPages = categories.map(function(c){ return '/categories/' + slugify(c) })
  return staticPages.concat(calculatorPages).concat(categoryPages).map(function(path){ return { url: base + path, lastModified: new Date() } })
}

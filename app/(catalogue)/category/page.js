import Link from 'next/link'

import { getCategories } from '@/lib/api/categories'

export default async function Category() {
  const categories = await getCategories()

  return (
    <>
      <h1>LISTADO DE CATEGORÍAS</h1>

      {!!categories?.length && (
        <nav>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={`/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

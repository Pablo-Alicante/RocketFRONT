import Link from 'next/link'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex container mx-auto">
      <nav className="w-1/4">
        <ul>
          <li><Link href="/dashboard">Mis datos</Link></li>
          <li><Link href="/dashboard/comments">Mis comentarios</Link></li>
          <li><Link href="/dashboard/deliveries">Mis pedidos</Link></li>
          <li><Link href="/dashboard/favourites">Mis favoritos</Link></li>
        </ul>
      </nav>
      <section>
        {children}
      </section>
    </div>
  )
}

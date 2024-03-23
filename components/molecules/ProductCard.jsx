import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/atoms/Button'

const ProductCard = ({ product, order }) => {
  return (
    <article className="relative row-span-2">
      <Link href={`/product/${product.id}`}>
        <div className="bg-neutral-100">
          <Image
            className="w-full transition hover:scale-125"
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            priority={order === 1}
          />
        </div>
        <div className="absolute top-4 left-0 bg-red-500 text-sm text-white px-3 lowercase -rotate-45">Oferta</div>
        <h3 className="mt-2 font-semibold font-title">{order} {product.title}</h3>
      </Link>
      <p className="text-sm text-slate-400 mb-2">{product.description}</p>
      <p className="text-sm text-slate-400 mb-2">3 colores</p>
      <p className="font-bold text-lg text-green-500">{product.price} €</p>
      <Button>Añadir al carrito</Button>
    </article>
  )
}

export default ProductCard

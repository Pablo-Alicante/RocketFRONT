import Link from 'next/link'

const classMain = 'inline-block p-4 rounded'
const classVariant = {
  primary: 'bg-rose-500 text-white hover:bg-rose-800',
  secondary: 'text-rose-500 border border-rose-500',
}

const Button = ({ children, href, variant = 'primary' }) => {
  const classFinal = `${classMain} ${classVariant[variant]}`

  return (
   <>
     {href
       ? <Link href={href} className={classFinal}>{children}</Link>
       : <button className={classFinal}>{children}</button>
     }
   </>
  )
}

export default Button

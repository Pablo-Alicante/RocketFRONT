import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return(
    <Link href="/">
        <Image src="/FavMagic.png" alt="Logo" width="40" height="40" />
    </Link>
  )
}

export default Logo;
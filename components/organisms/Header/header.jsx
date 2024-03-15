// haremos const o funciones

import Search from "@/app/(catalogue)/search/page";
import Logo from "@/components/atoms/Logo/Logo";
import HeaderMenu from "@/components/molecules/HeaderMenu/HeaderMenu";
import Link from "next/link";

// podría haber puest const Header = () => (Micomponente)

const Header = ({menu}) => { // al poner llaver voy a poner mas de una linea de codigo
  return ( /* tiene que tener un elemento raiz, en este caso pongo <header> </header> pero en otros casos
  lo que haré será poner <> </> que se llama fragment */

    <header className="container mx-auto">
        <div className="flex justify-between my-4 p-4">
            <Link href="/">Magic Merch</Link>
            <Logo/>
            <Search/>

            <div className="flex justify-end gap-6">
                <Link href="/Login">Login</Link>
                <Link href="/Register">Registrate</Link>
                <Link href="/Cart">Carrito</Link>
            </div>
        </div>

        <HeaderMenu menu={menu} />
    </header>
  );
}

export default Header; // exporto el componente para poder usarlo en otros archivos
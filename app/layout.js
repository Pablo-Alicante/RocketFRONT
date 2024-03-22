import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header/header";
import Footer from "@/components/organisms/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat'
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/*
1º.- Compler el layout primero principal, se repite siempre
1.1.- Vamos a hacer el header y el footer.

2º.- Extraer el listado de categorias de primer nivel en el layout principal
2.1.- Vamos a pasarlo a la cabecera
2.2.- 
*/


const getCategories = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`,
  { cache: 'no-cache'})
  return response.json()
}

export default async function RootLayout({ children }) {

const categories = await getCategories();
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Header menu={categories.categories}/>
          <main>
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}

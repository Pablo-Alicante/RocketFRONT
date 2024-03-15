import Link from "next/link";

/*
layout
- header
- - header menu
*/



const HeaderMenu = ({menu = []}) => {
    console.log(menu);
    return(
    <nav>
        <div class="container flex items-center justify-between">
            <ul className="flex gap-6 items-center justify-between;">
                {!!menu?.length && menu.map((category) => (
                    <li className="flex gap-6 justify-between;" key={category.id}>
                    <Link href={`/category/${category.url}`}>{category.name}</Link>
                </li>
                ))}
            </ul>
        </div>
    </nav>
    )
}

export default HeaderMenu;
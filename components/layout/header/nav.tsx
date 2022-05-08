import Link from "next/link"
import { navHeaderSetting } from "~/settings/header.setting"
import style from "~/styles/components/layout/header.module.css"

const Nav = () => {

    return (
        <nav>
            <ul className={style.navUl}>
                {navHeaderSetting.map((nav, i) => (
                    <li key={`header-nav-li-${i}`} className={`${style.navItem} ${nav.backgroud ? style.navItemFill : ""}`.trim()}>
                        <Link href={nav.link}>
                            <a>{nav.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;
import Head from "next/head"
import React from "react"
import { navHeaderSetting } from "~/settings/header.setting"
import { HeaderLayoutPropsI } from "../../interfaces/components/layout/layout.interface"
import style from "~/styles/components/layout/header.module.css"

import Logo from "../svg/logo.svg"
import Link from "next/link"

const Header = ({title}: HeaderLayoutPropsI) => {

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>]
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <header className={`container ${style.container}`}>
                <div className={style.row}>
                    <div className={style.boxLeft}>
                        <div>
                            <Logo />
                        </div>
                    </div>
                    <div className={style.boxRight}>
                        <nav>
                            <ul className={style.navUl}>
                                {navHeaderSetting.map((nav, i) => (
                                    <li key={`header-nav-li-${i}`} className={`${style.navItem} ${nav.backgroud ? style.navItemFill : ""}`.trim()}>
                                        <Link href={nav.link}>
                                            <a>
                                                {nav.title}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;
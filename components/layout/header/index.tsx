import Nav from "./nav"
import React from "react"
import Head from "next/head"
import ButtonMenuToggle from "./menu-mobile"
import Logo from "~/components/svg/logo.svg"
import style from "~/styles/components/layout/header.module.css"
import { HeaderLayoutPropsI } from "~/interfaces/components/layout/layout.interface"

const Header = ({ title }: HeaderLayoutPropsI) => {
    
    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>]
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <header className={style.container}>
                <div className="container">
                    
                    <div className={style.row}>
                        <div className={style.boxLeft}>
                            <div>
                                <Logo />
                            </div>
                        </div>
                        <div className={style.boxRight}>
                            {/* Desktop */}
                            <div className={style.navDesktop}>
                                <Nav />
                            </div>

                            {/* Mobile */}
                            <ButtonMenuToggle />
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
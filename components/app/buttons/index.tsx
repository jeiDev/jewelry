import Link from "next/link"
import { ButtonPropsI } from "~/interfaces/components/app/button/button.interface";
import style from "~/styles/components/app/buttons/button.module.css"

const Button = ({children, background, color, link}: ButtonPropsI) => {

    return (
        <button className={style.button} style={{backgroundColor: background || "transparent"}}>
            <Link href={link}>
                <a style={{color: color || "black"}}>
                    {children}
                </a>
            </Link>
        </button>
    )
}

export default Button;
import Nav from "../nav"
import MenuTogglePath from "./path"
import { motion, useCycle } from "framer-motion"
import style from "~/styles/components/layout/header.module.css"
import { itemsNavHeaderSetting, menuTogglePathSettingAnimation } from "~/settings/animations/nav.animation"

const ButtonMenuToggle = () => {
    const [isOpen, setIsOpen] = useCycle(false, true);

    const handleToggle = () => {
        setIsOpen()
    }

    return (
        <motion.div
            animate={isOpen ? "open" : "closed"}
        >
            <motion.div className={style.boxNavMobile} variants={itemsNavHeaderSetting}>
                <div className={style.boxFixedNavMobile}>
                    <Nav />
                </div>
            </motion.div>
            <button onClick={handleToggle} className={style.buttonMenuToggle}>
                <svg width="23" height="23" viewBox="0 0 23 23">
                    {menuTogglePathSettingAnimation.map((props, i) => (
                        <MenuTogglePath
                            {...props}
                            stroke={isOpen ? "white" : "var(--bg-secondary-color)"}
                            key={`header-nav-menu-toggle-path-${i}`}
                        />
                    ))}
                </svg>
            </button>
        </motion.div>
    )
}

export default ButtonMenuToggle;
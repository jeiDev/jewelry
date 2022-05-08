import * as React from "react"
import { motion } from "framer-motion"
import { MenuTogglePathPropsI } from "~/interfaces/components/layout/layout.interface"

const MenuTogglePath = (props: MenuTogglePathPropsI) => {

  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      {...props}
    />
  )
}

export default MenuTogglePath
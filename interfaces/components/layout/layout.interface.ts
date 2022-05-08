import { MotionProps } from "framer-motion"
import { ReactNode } from "react"

export interface LayoutPropsI{
    title?: string
    children: ReactNode
}

export interface HeaderLayoutPropsI{
    title?: string
}

export interface HeaderNavItemI{
    title: string
    link: string
    backgroud?: boolean
}

export interface MenuTogglePropsI{
    classNameNav?: string
    classNameBox?: string
    isOpen?: boolean
}

export interface MenuTogglePathPropsI extends MotionProps{
    d?: string
    stroke?: string
}

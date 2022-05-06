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
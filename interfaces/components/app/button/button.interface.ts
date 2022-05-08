import { ReactNode } from "react";
import { ColorType } from "~/interfaces/color/color.type";

export interface ButtonPropsI{
    children: ReactNode
    color?: ColorType
    background?: ColorType
    link: string
}
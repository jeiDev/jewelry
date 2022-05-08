export interface ImageContainerGrid4x4PropsI{
    src: string
    description: string
}

export interface ButtonContainerGrid4x4PropsI{
    title: string
    link: string
}

export interface ContainerGrid4x4PropsI{
    title: string
    description: string
    image: ImageContainerGrid4x4PropsI
    button: ButtonContainerGrid4x4PropsI
    reverse?: boolean
}
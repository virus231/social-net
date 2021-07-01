import React from 'react'
import { Container } from "@chakra-ui/react"


type LayoutProps = {
    children?: React.ReactNode | React.ReactNodeArray
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <Container maxW="container.xl">{children}</Container>
    )
}
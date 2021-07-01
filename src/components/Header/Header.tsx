import React from "react"
import { Flex, Box, Button, Spacer, Heading } from "@chakra-ui/react"
import {Link} from 'react-router-dom'
import {Layout} from "../Layout";

export const Header = () => {
    return (
        <Box bg='red' py='15px'>
            <Layout>
                <Flex>
                    <Box p="2">
                        <Heading size="md">Chakra App</Heading>
                    </Box>
                    <Spacer />
                    <Box>
                        <Button colorScheme="teal" mr="4">
                            <Link to='/register'>
                                Sign Up
                            </Link>
                        </Button>
                        <Button colorScheme="teal">
                            <Link to='/'>
                                Log in
                            </Link>
                        </Button>
                    </Box>
                </Flex>
            </Layout>
        </Box>

    )
}
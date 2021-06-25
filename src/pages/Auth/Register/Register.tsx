import React from "react";
import { Center, Image, Box, Flex, FormControl, FormLabel, Input, FormHelperText, Stack, RadioGroup, HStack, Checkbox, Text, Button, Spacer } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Layout } from "../../../components/Layout";
import {Link} from 'react-router-dom'
import bg from '../../../assets/img-auth.png'
import logo from '../../../assets/logo.svg'

export const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (values: any) => {
        console.log(values)
    }

    return (
        <Box h='100vh' display='flex' alignItems='center'>
            <Layout>
                <Center  h='100vh' display='flex' alignItems='center'>
                    <Box h='90vh'>
                        <Image
                            boxSize="90vh"
                            objectFit="cover"
                            src={bg}
                            onLoad={(event) => console.log(event)}
                            alt="Picture"
                        />
                    </Box>
                    <Box w='70%' bg='white' h='90vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Box mb='35px'>
                            <Link to="/register">
                                <Image
                                    src={logo}
                                />
                            </Link>
                        </Box>
                        <Text fontSize="3xl">Sign Up</Text>
                        <Stack spacing={3} w='50%'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl>
                                    <FormLabel>Email address</FormLabel>
                                    <Input variant="filled" type="email" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Password</FormLabel>
                                    <Input variant="filled" type="password"  />
                                </FormControl>
                                <Box my='15px'>
                                    <Checkbox>Remember Me</Checkbox>
                                </Box>
                                <Button width="100%"
                                        color='white'
                                        _hover={{ bg: "#a12f81" }}
                                        bg='#7B2464'
                                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                        borderRadius="3px"
                                        // colorScheme="teal"
                                        size="lg">
                                    Sign Up
                                </Button>
                            </form>
                        </Stack>


                        {/*<form onSubmit={handleSubmit(onSubmit)}>*/}

                        {/*    /!* register your input into the hook by invoking the "register" function *!/*/}
                        {/*    <input defaultValue="test" {...register("example")} />*/}

                        {/*    /!* include validation with required or other standard HTML validation rules *!/*/}
                        {/*    <input {...register("exampleRequired", { required: true })} />*/}
                        {/*    /!* errors will return when field validation fails  *!/*/}
                        {/*    {errors.exampleRequired && <span>This field is required</span>}*/}

                        {/*    <input type="submit" />*/}
                        {/*</form>*/}
                    </Box>
                </Center>
            </Layout>
        </Box>
    )
}
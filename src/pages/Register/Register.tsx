import React from "react";
import { Center, Image, Box, Flex, FormControl, FormLabel, Input, FormHelperText, Stack, RadioGroup, HStack, Checkbox, Text, Button, Spacer } from "@chakra-ui/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Layout } from "../../components/Layout";
import {Link} from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import bg from '../../assets/img-auth.png'
import logo from '../../assets/logo.svg'
import { IFormInputs } from "../../utils/interfaces";
import { useDispatch } from "react-redux";
import { registerUser } from "../../api/authApi";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    acceptTerms: Yup.bool()
});

// const schema =

export const Register = () => {
    const dispatch = useDispatch()
    const { register,control, handleSubmit, watch,reset, formState: { errors } } = useForm({resolver: yupResolver(validationSchema)});

    const onSubmit: SubmitHandler<IFormInputs> = (values: IFormInputs) => {
        const data = {
            email: values.email,
            password: values.password,
            rememberMe: values.acceptTerms
        }
        registerUser(data)
        console.log(values)
        // reset()
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
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <Input
                                            {...register('email')}
                                            {...field}
                                            variant="filled"
                                            type="email" />}
                                    />
                                    <FormHelperText>{!!errors.email?.message && errors.email?.message}</FormHelperText>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Password</FormLabel>
                                    <Controller
                                        name="password"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <Input
                                            {...register('password')}
                                            {...field}
                                            variant="filled"
                                            type="password"/>}
                                    />
                                    <FormHelperText>{!!errors.email?.message && errors.email?.message}</FormHelperText>
                                </FormControl>
                                <Box my='15px'>
                                    <Checkbox
                                        {...register('acceptTerms')}
                                    >Remember Me</Checkbox>
                                    {/*<FormHelperText>{!!errors.email?.message && errors.email?.message}</FormHelperText>*/}
                                </Box>
                                <Button
                                    type="submit"
                                    width="100%"
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
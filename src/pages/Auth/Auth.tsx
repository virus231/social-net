import React from "react"
import {Layout } from "../../components/Layout"
import { Login } from "./Login/Login"
import { Register } from "./Register/Register"

export const Auth = () => {
    return (
        <Layout>
            <Login/>
            <Register/>
        </Layout>
    )
}
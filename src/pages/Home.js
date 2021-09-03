import React from 'react'
import Form from "../components/Form"
import Filter from '../components/Filter'
import Display from '../components/Display'

export default function Home() {
    return (
        <div>
            <h2>Hello, welcome to my little art land!</h2>
            <Form />
            <Filter />
            <Display />
        </div>
    )
}

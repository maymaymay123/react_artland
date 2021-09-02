import React from 'react'
import Form from "../components/Form"
import Filter from '../components/Filter'
import Display from '../components/Display'

export default function Home() {
    return (
        <div>
            <p>Hello, welcome to my little art land!</p>
            <Form />
            <Filter />
            <Display />
        </div>
    )
}

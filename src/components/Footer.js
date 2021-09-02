import React, {useState} from 'react'
import styles from './styles.css'

export default function Footer() {

    const [inputText, setInputText] = useState("")

    const handleSignUpInput = (event) =>{
        setInputText(event.target.value)
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }

    const signUpSubmit = (event) => {
        event.preventDefault();
        if (!(inputText)){
            alert("Input must not be empty")
            return;
        } 
        if (!(validateEmail(inputText))){
            alert(inputText+" is not valid.")
            return;
        }
        alert("Thank you for joining us.")

    }
    return (
        <div className="footer">
            <p>Join our newsletter</p>
            <input type="text" placeholder="email" onChange={handleSignUpInput} value={inputText}/>
            <button onClick={signUpSubmit}>sign up</button>
        </div>
    )
}

import React from 'react';
import {Link, NavLink} from "react-router-dom"
import styles from "./NavBar.module.css"

export default function NavBar() {
    return (
        <header className={styles.navbar}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={styles.navbar} to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.navbar} to="/inspirations">Insprirations</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.navbar} to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

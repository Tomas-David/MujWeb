//CSS
import classes from './nav.module.css'
//Next
import Link from 'next/link'
import Image from 'next/image'
//Images
import logo from '@/public/logo.svg'

export default function NavBar(){
    return<nav className={classes.navbar}>
        <Link href='/'><Image src={logo} alt='Logo' /></Link>
        <menu className={classes.navbar__list}>
            <li>
                <Link className={classes.navbar__link} href='/kontakt'>Kontakt</Link>
            </li>
        </menu>
    </nav>
}
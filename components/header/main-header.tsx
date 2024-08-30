//CSS
import classes from './main-header.module.css'
//IMAGES
import profileImg from '@/public/images/profile.webp'
//NEXT
import Image from 'next/image'
import NavBar from '../navbar/nav'
import Link from 'next/link'
//Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


export default function MainHeader(){
    return<header className={classes.header}>
        <NavBar />
        <h1 className={classes.header__heading}>Tomáš David</h1>
        <h2>Web Developer</h2>
        <div className={classes.header__wrapper}>
            <article>
                <p>Jsem student, který hledá možnost jak si rozšířit své webařské portfolio. Zaměřuji se na vývoj <span className={classes.highlight}>Frontendu</span> a <span className={classes.highlight}>Backendu</span>, ale věnuji se i web <span className={classes.highlight}>designu</span>.</p>
            </article>
            <Link className={classes.header__btn} href="/kontakt">Kontaktujte mě</Link>
            <div className={classes.social}>
                <ul className={classes.social__list}>
                    <li className={classes.social__item}><Link className={classes.social__link} href="https://github.com/Tomas-David"><FaGithub size={28} /></Link></li>
                    <li className={classes.social__item}><Link className={classes.social__link} href="https://www.instagram.com/tomas.webp/"><FaInstagram size={28} /></Link></li>
                    <li className={classes.social__item}><Link className={classes.social__link} href="/kontakt"><FaEnvelope size={28} /></Link></li>
                </ul>
            </div>
            <div className={classes.profileImage}>
                <Image className={classes.profileImage__Img} src={profileImg} alt='Tomáš David profilová fotka'/>
            </div>
        </div>
        
        
    </header>
}
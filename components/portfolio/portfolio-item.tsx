//NEXT
import Link from "next/link";
//CSS
import classes from './portfolio-item.module.css';
interface PortfolioItemProps{
    name: string
    href: string
}

export default function PortfolioItem({name, href}: PortfolioItemProps){
    return<li className={classes.portfolio}>
        <Link className={classes.portfolio__item} href={href}>{name}</Link>
    </li>
}
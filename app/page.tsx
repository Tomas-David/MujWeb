import MainHeader from "@/components/header/main-header";
import classes from './page.module.css'
import PortfolioItem from "@/components/portfolio/portfolio-item";
export default function Home() {
  return (
    <>
      <MainHeader />
      <h2 className={classes.heading}>Portfolio</h2>
      <ul className={classes.portfolio}>
        <PortfolioItem name={"Satky od verky"} href={"#"}/>
        <PortfolioItem name={"Satky od verky"} href={"#"}/>

      </ul>
    </>
    
  );
}

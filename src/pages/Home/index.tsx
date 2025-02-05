import style from "./style.module.css"
import image from "../../assets/images/main.gif"
import About from "../../components/About"
import Contact from "../../components/Contact"
//import Header from "../../components/Header"

const Home = () => {
    return (
        <>
            {/*<Header />*/}
            <div className={style.home_container}>
                <div className={style.marker} id="home"></div>
                <div className={style.imgWrapper}>
                    <img src={image} alt="Jelly Belly Wiki gif" />
                </div>
                <div className={style.info}>
                    <h1>Welcome to the World of Jelly Belly</h1>
                    <h2>A Rainbow of flavors Awaits!</h2>
                    <p>The User Interface of this website makes full use of the API's database,
                         showcasing one approach to design by utilizing all the endpoints and their various options.
                          Check out the API documentation
                    </p>
                </div>
            </div>
            <About />
            <Contact />
        </>
    )
}

export default Home
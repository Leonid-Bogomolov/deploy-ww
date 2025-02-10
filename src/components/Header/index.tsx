import Logo from "../Logo/Logo"
import Nav from "../Nav"
import style from './style.module.css'
import SwitchTheme from "../SwitchTheme"
import { HashLink } from "react-router-hash-link"

const Header = () => {
    return (
        <header className={style.container}>
            <Logo />
            <Nav />
            <div className={style.btns}>
                <HashLink smooth to="/#contact" className={style.contact}>Contact us</HashLink>
                <div className="switchTheme">
                    <SwitchTheme />
                </div>
            </div>
        </header>
    )
}

export default Header

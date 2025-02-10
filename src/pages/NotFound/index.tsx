import style from "./style.module.css"
import minor_bean from "../../assets/images/minor_bean.png"
import { HashLink } from 'react-router-hash-link'

const NotFound = () => {
    return (
        <>
            <div className={style.container}>
                <h1>Page not found</h1>
                <img src={minor_bean} alt="minor bean" className={style.minor_bean}></img>
                <HashLink smooth to="/#home">Go to main page</HashLink>
            </div>
        </>
    )
}

export default NotFound

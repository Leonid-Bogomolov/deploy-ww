import style from "./style.module.css"
import minor_bean from "../../assets/images/minor_bean.png"

const NotFound = () => {
    return (
        <>
            <div className={style.container}>
                <h1>Page not found</h1>
                <img src={minor_bean} alt="minor bean" className={style.minor_bean}></img>
            </div>
        </>
    )
}

export default NotFound

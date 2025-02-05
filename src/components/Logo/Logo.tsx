import { Link } from 'react-router-dom'
import logo_img from '../../assets/images/logo.png'
//import './style.css'      при такой записи стиль будет объявляться глобально
import style from './style.module.css'          // при модульной записи css в каждом модуле для style будет присавиваться дополннительно свой идентификатор,
//                                                  но className уже нужно определять через переменную (см ниже в return)

const Logo = () => {
    return (
        <Link to="/"  className={style.logo}>           
            <img src={logo_img} alt=""/>        {/* В отличии от стандартного HTML при использовании React путь до картинки должен указываться через импортированую переменную */}
            <span>Jelly Belly</span>
        </Link>
    )
}

export default Logo
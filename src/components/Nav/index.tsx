import style from './style.module.css'
import Modal from '../Modal'
import { useState } from 'react'
import { Link } from 'react-router-dom'                     // обращение к библиотеке 'react-router-dom' для перехода между страницами
import { HashLink } from 'react-router-hash-link'           // обращение к библиотеке 'react-router-hash-link' необходимой для перехода по ссылкам на "id" внутри страниц
//import SwitchTheme from '../SwitchTheme'

const Nav = () => {
    const [isModal, setIsModal] = useState(false)                   // создаём состояние для модального окна в этом уровне и передаём текущее состояние в компонент
    //                                                                 (если true, то окно будет открытым при каждом обновлении браузера)

    return (
        <nav className={style.container}>
                <Link to="/beans">Beans</Link>                       {/* Когда используется библиотеку React-Router-DOM, то уже не используются теги «a», используется
//                                                                          тег link импортируемый из библиотеки React-Router-DOM для перехода по странице  */}     
                <Link to="/facts">Facts</Link>
                <Link to="/recipes">Resipes</Link>
                <Link to="/combinations">Combinations</Link>
                <Link to="/history">History</Link>
                {/*<Link to="#аbout">About</Link>*/}
                <HashLink smooth to="/#about">About</HashLink>        {/* обращение к библиотеке 'react-router-hash-link' необходимой для перехода по ссылкам на "id" внутри страниц */}
                {/*<SwitchTheme />*/}                                           {/* Вынесли в Header */}
                <Modal isModal={isModal} onClick={() => setIsModal(false)}/>    {/*  передаём функцию изменения состояния в обработчик onClick, причем она будет функцией
//                                                                                   обратного вызова (callback), при вызове которой состояние будет изменяться на false 
//                                                                                   и передадим тип атриббута в пропс (см Modal.index.tsx), таким образом, при клике на
//                                                                                   задний фон, она отработает */}
        </nav>
    )
}

export default Nav

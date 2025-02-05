import { useContext } from "react"
import { ThemeContext } from "../../App"
import style from "./style.module.css"

const SwitchTheme = () => {
    const currentTheme = useContext(ThemeContext)           // текущее значение
    //console.log("currentTheme:", currentTheme)              // выводитcя объект {theme: 'light', setTheme: f()}
    const handleClick = () => {                             // функция обработчика события
        if (currentTheme?.theme === "dark") {               // если значение события "dark", то в функцию изменения события вносится параметр "light"
            currentTheme.setTheme("light")
        } else {
            currentTheme?.setTheme("dark")                  // Вопросительный знак означает, что у нас не могут существовать ключи setTheme и theme, когда у нас тип здесь null
        }
    }
    //return <div onClick={handleClick}>theme</div>                                             // добавим событие и обработчик события
    //return <div className={style.theme} onClick={handleClick}>{currentTheme?.theme}</div>     // поменяем theme на {currentTheme?.theme} , чтобы на странице менялся текст названия темы
    return (
        <div className={style.div_theme}>
            <div className={style.theme} onClick={handleClick}>
                <div className={style.dark_theme}></div>
                <p>/</p>
                <div className={style.light_theme}></div>
            </div>
        </div>
    )
}

export default SwitchTheme
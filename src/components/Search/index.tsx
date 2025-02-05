import { ChangeEvent, Dispatch, FC, useState } from "react"
import style from "./style.module.css"


type Props = {                                                  // props передаётся в компонент (служат как параметры функции(свойство))
    setFilterValue: Dispatch<React.SetStateAction<string>>
}

const Search: FC<Props> = ({ setFilterValue }) => {               // FC — это сокращённый вариант интерфейса FunctionComponent.
    //                                                              Он используется, чтобы указать TypeScript, что это функциональный компонент React, а не просто обычная функция.

    const [inputValue, setInputValue] = useState("")                        // функция состояния для обработчика событий в input              
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {        // Создаём событие в input и обработчик события(const handleChange),
        //                                                                         а по требованию TypeScript указываем тип взятый из подсказки
        //console.log(event)                                                // для проверки, что событие происходит (выводится ввод в поле каждого последнего знака)
        //console.log(event.target.value)                                   // выводится целиком содержание поля после каждого ввода очередного знака
        setInputValue(event.target.value)                                   // вызываем функцию изменения состояния для оработчика событий
    }
    // console.log(inputValue)                                                 // выводим в консоль ‘inputValue’, чтобы посмотреть доступность

    const handleClick = () => {                             // функция события на кнопке
        //alert(inputValue)                                 // для тестирования теперь видим текущее состояние при клике по кнопке
        //                                                  теперь чтобы производить фильтрацию карточек по значению в input, нужно перейти на уровень компонента Cards, т.е. в App
        //                                                  и там создать ф-цию состояния [filterValue, setFilterValue] = useState()
        setFilterValue(inputValue)                          // изменённое, в соответствии со значением в поле input,  сотояние фильтра
    }
    return (
        <div className={style.container}>
            <div className={style.formContainer}>
                {/*<input type="text" onChange={handleChange} />    // Чтобы взять значение из input, добавим событие ‘onChange’ и напишем обработчик событий ‘handleChange’ */}
                <input
                    //value={inputValue}                              // фиксируем текущее значение в поле input, которое затем и будет выводиться при клике по кнопке формы
                    type="text"
                    onChange={(event) => handleChange(event)} />   {/* но нужно определить, что мы принимаем ‘event’ внутри нашего обработчика событий */}
                <button onClick={handleClick}>Найти</button>
            </div>
        </div>
    )
}

export default Search
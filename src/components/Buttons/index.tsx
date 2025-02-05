import { Dispatch, FC } from "react"

type Props = {
    value: number
    setValue: Dispatch<React.SetStateAction<number>>   // не забываем импортировать  Dispatch
}

const Buttons: FC<Props> = ({value, setValue}) => {
    //console.log('buttons:', value, ', ', setValue)
    const handleClick = (num: number) => {
        setValue(value + num)                         // в функцию изменения состояния в качестве аргумента передаём сумму текущего значения "value" и значения num генерируемое кнопками
        //console.log(num)
    }
    return(
        <div className="buttons">
            <button onClick={() => handleClick(-1)}>prev</button>
            <button onClick={() => handleClick(1)}>next</button>
        </div>
    )
}

export default Buttons
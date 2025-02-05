import { useRef } from "react"

const Example = () => {                                     // постоянная взятая нами в качестве теста для демонстрации работы хука useRef

    const pRef = useRef<HTMLParagraphElement | null>(null)  // переменная равная хуку useRef(null), тип указываем по подскказке при наведении: в нашей переменной pRef может храниться HTMLInputElement или null 
    //console.log(pRef)

    const inputRef =useRef<HTMLInputElement | null>(null)   // другая переменная для примера с полем ввода input, тоже с использованием useRef. Проверяем его тип: в нашей переменной inputRef может храниться HTMLInputElement или null 

    const handleClick = () => {                             // функция события повешенного на кнопку
        //console.log(pRef.current)                           // в консоле выводится тег <p>Новое значение</p> с новым значением контекста
        //console.dir(pRef.current?.textContent)              // -"-"-"-"-"-"-"-"-"-  только контекст тега "р" без изменения контекста
        //console.dir(pRef.current?.focus)                    // -"-"-"-"-"-"-"-"-"- сообщение, что применена функция "focus"
    
        if (pRef.current) {                                 // если pRef.current не null
            pRef.current.textContent = "Новое значение"     // применнить .current.textContent = "Новое значение"
        }

        if (inputRef.current) {                             // если inputRef.current не null
            inputRef.current.focus()                        // применнить inputRef.current.focus()
        }
    }

    return (
        <>
            <p ref={pRef}>text</p>                          {/* к тегу "р" применили атрибут с переменной состояния pRef */}
            <button onClick={handleClick}>click</button>    {/* на кнопку повесили функцию события  */}
            <input ref={inputRef} type="text" />            {/* к input применили атрибут с переменной состояния inputRef */}
        </>
    )
}

export default Example
import style from './style.module.css'
import Card from '../Card'
import { FC, useEffect, useState } from 'react'
import { Bean } from '../../types/bean'

type Props = {
    filterValue : string
}

const Cards: FC<Props> = ({filterValue}) => {                               // передадим Cards текущее значение

    const [initialBeans, setInitialBeans] = useState<null | Bean[]>(null)   // объявим функцию состояния(предыдущего) и пропишим в ней тип <null | Bean[]>;
    //                                                                           первый член массива - имя функции состояния, второй - функция изменения состояния
    const [updateBeans, setUpdateBeans] = useState<null | Bean[]>(null)     // обновлённые данные

    const [isLoading, setIsLoading] = useState(false)              // если запрос упал, то нужно вывести ошибку для этого вводим ещё два буленговых состояния, одно отвечает за запрос,
    const [isError, setIsError] = useState(true)                   // другое за ошибку

    const getData = async()=>{                          // Для начала напишем функцию ‘getData’ – это будет асинхронная функция, которая выполняет запрос. 
        try{                                            // В этой функции сразу описываем конструкцию ‘try{}catch’, чтобы в случае не успешного запроса отловить ошибку
            setIsError(false)
            setIsLoading(true)                          // если true, то продолжаем ждать и в return выводится запис "загрузка"
            const req = await fetch("https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=100")  // внутри fetch укажем адрес, откуда мы возьмём данные наших
            //                                                                                                         карточек; последне число указывает на количество выводимы карточек
            const data = await req.json()                                                                         // после получения данных переведём их в json
            //   console.log(data)                            
            setIsLoading(false)                         // как только ответ получен появляются карточки
            setInitialBeans(data.items)                 // нужно указать на ключ items, т.к. в объекте data много клчей, а перебираем только по items
            setUpdateBeans(data.items)
        }catch(e){                            
            console.log("EROR->", e)
            setIsError(false)
            setIsError(true)
        }
    }

    useEffect(() => {           // чтобы обойти бесконечного монтирования getData (выполнения следующего запроса после каждого выполненного) вставим её в хук useEffect
        //                            и вторым аргументом объявим пустой массив
        getData()
    }, [])

    useEffect(() => {           // чтобы обновить используем хук useEffect
        if (filterValue) {
            const newArray = initialBeans?.filter((item)=> item.flavorName.includes(filterValue))
            // !!!  Внимание! При удалении закоммиченной строки ниже, TypeScript возмущается ?
            //      eslint-disable-next-line @typescript-eslint/no-unused-expressions  
            newArray && setUpdateBeans(newArray)        // Перезаписываем отфильтрованные данные ‘updateBean’, при этом налогаем условие, что newArray существует
            console.log("newArray:", newArray)
        } else {
            setUpdateBeans(initialBeans)                // если поле ввода обнулено, то возвращаем первоначальный список карточек
        }
    }, [filterValue, initialBeans])

    return <div className={style.container}>
        {isLoading && <p>...loading</p>}
        {isError && <p>Перезагрузите страницу!</p>}
        {updateBeans && updateBeans.map((/deploy-ww/bean)=>{   // updateBeans - обновлённые текущие данные; используем условный рендеринг, т.к. updateBeans может быть null;
         //                                             т.е. если существует тогда выполняем map
          console.log(bean)
            return <Card data = {bean} key={bean.beanId}/> // вместе с данными data необходимо передать ещё уникальный атрибут карточки(key), что бы можно было их сортировать, фильтровать
         {/* {updateBeans && updateBeans.map((bean)=> <Card data={bean key={bean.beanId}} />       // укороченная запись map */}    
        })}
    </div>
}

export default Cards

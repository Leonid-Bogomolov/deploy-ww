import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Bean } from "../../types/bean"
//import Header from "../../components/Header"
import style from "./style.module.css"

/*type Ingredient = {
    id: number,
    value: string
}*/

const BeanPage = () => {
    const params = useParams()      // хук из библиотеки "react-router-dom"; Params это объект, в котором есть различные ключи. Ключи определяются по названию того значения,
    //                                которое мы передали. В route мы определили их как id, значит у нас создался ключ id, но можем создавать не один ключ: path: "/bean/:id/:name/:text"
    //console.log(params)
    const [beanData, setBeanData] = useState<Bean | null>(null)                 // создаём состояние
    useEffect(() => {
        const getData = async () => {                                                                       // создаём переменную для для получения данных одной из карт      
            try {                                                                                               // обработка запроса с помощью конструкции для отлова ошибок
                const req = await fetch(`https://jellybellywikiapi.onrender.com/api/beans/${params.id}`)        // первая часть в запросе адреса карточки, которую мы взяли с сайта с которым
                //                                                                                                  работаем - общая для всех карточек, а id это beanId конкретной карточки
                const data = await req.json()                                       // дожидаемся и прочитываем запрос
                setBeanData(data)                                                   // вызываем функцию изменения состояния и передаём преобразованные данные
                //console.log(req) 
                console.log(data)
            }
            catch (e) {
                console.log("Error->", e)
            }
        }
        getData()                                          // вызываем фукцию для отправки запроса
    }, [params.id])

    //const ingredient(type: Ingredient) = beanData?.ingredients.id
    //console.log(ingres)

    return (                                               // возвращаем html разметку
        <div>
            {/*<Header />*/}
            {beanData && (                                 // выполним проверку на существование beanData перед тем как произвести отрисовку и саму отрисовку, подставим значения из beanData
                <div key={beanData.beanId} className={style.container}>
                    <h1>{beanData.flavorName}</h1>
                    <div className={style.content}>
                        <img src={beanData.imageUrl} alt="" />
                        <div className={style.essence}>
                            <p className={style.bold}>{beanData.description}</p>
                            <div className={style.details}>
                                <div className={style.ingredients}>
                                    <p className={style.bold}>Ingredients:</p>
                                    {beanData.ingredients && beanData.ingredients.map((item) => { return <p>{item}</p> })}
                                </div>
                                <div className={style.attention}>
                                    <p className={style.bold}>Attention:</p>
                                    {beanData.seasonal ? <p>Seasonal</p> : <p>Not seasonal</p>}
                                    {beanData.kosher ? <p>kosher</p> : <p>Not kosher</p>}
                                    {beanData.glutenFree ? <p>Not gluten</p> : <p>With gluten</p>}
                                    {beanData.sugarFree ? <p>Not sugar</p> : <p>With sugar</p>}
                                </div>
                            </div>
                            <div className={style.groupName}>
                                <p>Group names:</p>
                                <div>
                                    {beanData.groupName && beanData.groupName.map((item) => { return <p>&ensp;{item}<br></br></p> })}
                                </div>
                            </div>
                            {/*<p className={style.bold}>
                                Group names:
                                {beanData.groupName && beanData.groupName.map((item, index: number) => {
                                    return {if (index = 0) {
                                        {<span>&ensp{item[index]}</span>}
                                    } else {
                                        {<span>;&ensp{item[index]}
                                    }
                                }
                                })
                                }
                            </p> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BeanPage

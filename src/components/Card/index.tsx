import { Link } from 'react-router-dom'
import { Bean } from '../../types/bean'
import style from './style.module.css'
import { FC } from 'react'              // FC — это сокращённый вариант интерфейса FunctionComponent.
//                                         Он используется, чтобы указать TypeScript, что это функциональный компонент React, а не просто обычная функция.

// первый способ прописать тип через type (не наследуемый способ объявления типа):
//type Props = {          // props передаётся в компонент (служат как параметры функции(свойство))
//    title: string
//    image?: string      // в качестве атрибута в пропсах можно прописать картинку, знак ? означает, ели мы хотим прописать не обязательность того или иного атрибута
//}

// другой способ прописат тип через интерфейс:
//interface Props {
//    title: string
//    image?: string
//}

//const Card : FC<Props> = ({title, image}) => {        // «props» - объект, в котором есть ключ (название атрибута) в нашем случае "title" и то значение, которое мы ему присвоили "jelly Bob 1" 
    //console.log(props.title)                 // т.е. взяли карту по её названию переданного с помощью ключа "title", но в TypeScript необходимо прописать тип переменной носителя ключа 
    //console.log({title})                 // такой вариант прописать прорс тоже возможен, но в TypeScript необходимо прописать тип переменной носителя ключа 
//    return (
//        <div className={style.card}>
//            <h2>{title}</h2>
//            <img src={image} alt='' />
//        </div>
//    )
//}

type Props = {
    data : Bean  // после того, как мы прописали типы свойств объекта в отдельной папке мы будем передавать их в виде объекта с названием data, т.е. не прописывая отдельно каждое свойство
}

const Card : FC<Props> = ({data}) => {
    return (
        {/*<Link to={`/bean/${data.beanId}`} className={style.card}>                   {/* в router.tsx передастся /bean/:id ; где id это beanId */}*/}
    <Link to={`/deploy-www/bean/${data.beanId}`} className={style.card}>                   {/* в router.tsx передастся /bean/:id ; где id это beanId */}
        <h2>{data.flavorName}</h2>
        <img src={data.imageUrl} alt=''/>
        <p>{data.description}</p>
        {/*{data.sugarFree === true ? <p>Not sugar</p> : <p>Whith sugar</p>}     // тернарный оператор (условный рендеринг)*/} 
        {data.sugarFree ? <p>Not sugar</p> : <p>With sugar</p>}                 {/* сокращённая запись тернарного оператора(когда выбор из двух значений, то строгое сравнение можно убрать) */}
    </Link>
)}

export default Card

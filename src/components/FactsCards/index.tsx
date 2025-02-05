import style from './style.module.css'
import facts from '../../data/facts.json'               // В отличии от Cards, где использовались динамические запросы по каждой карте на прямую из протатипа "Jelly Belly",
//                                                          реализованно статическое решение, все данные скачены в файл src/data/facts.json
import FactCard from '../FactCard'
import happy_bean from '../../assets/images/happy_bean.png'

const FactsCards = () => {
    //console.log(facts.items)
    return (
        <div className={style.container}>
            <h1>Explore All Facts ...</h1>
            <div className={style.flexContainer}>
                <div className={style.imgContainer}>
                <img src={happy_bean} alt="happy bean" className={style.happy_bean}></img>
                </div>
                {facts.items.map((fact) => {
                    //console.log(fact)
                    return <FactCard data={fact} key={fact.factId} />
                })}
            </div>
        </div>
    )
}

export default FactsCards

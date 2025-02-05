import style from './style.module.css'
import combinations from '../../data/combinations.json'
import CombinationCard from '../CombinationCard/index'
import happy_bean from '../../assets/images/happy_bean.png'

const CombinationsCards = () => {
    //console.log(combinations.items)
    return (
        <div className={style.container}>
            <h1>Explore Combinations ...</h1>
            <div className={style.flexContainer}>
                <div className={style.imgContainer}>
                <img src={happy_bean} alt="happy bean" className={style.happy_bean}></img>
                </div>
                {combinations.items.map((combination) => {
                    //console.log(fact)
                    return <CombinationCard data={combination} key={combination.combinationId} />
                })}
            </div>
        </div>
    )
}

export default CombinationsCards

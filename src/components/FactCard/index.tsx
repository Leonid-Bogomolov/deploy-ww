import style from './style.module.css'
import { fact } from '../../types/fact'
import { FC } from 'react'

type Props = {
    data: fact
}

const FactCard: FC<Props> = ({ data }) => {
    return (
        <div className={style.fact}>
            <div className={style.title}>
                <h2>
                    <span className={style.spanH3}>{data.factId}</span>
                    <span>{data.title}</span>
                </h2>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default FactCard

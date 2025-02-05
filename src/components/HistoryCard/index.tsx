import style from  './style.module.css'
import { history } from '../../types/history'
import { FC } from 'react'

type Props = {
    data: history
}

const HistoryCard: FC<Props> = ({ data }) => {
    return (
        <div className={style.history}>
            <div className={style.title}>
                <h2>
                    <span>{data.year}</span>
                </h2>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default HistoryCard

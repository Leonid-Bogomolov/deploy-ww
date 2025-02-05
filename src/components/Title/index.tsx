import { FC } from "react"                      // (alias) type FC<P React.FunctionComponent<P>

type Props = {
    data: number                                // a подразумевается value
}

const Title: FC<Props> = ({data}) => {         // прописываем тип value и принимаем его внутри компонента value как параметр data
    return (
        <div className="title">
            <h1>{data}</h1>
        </div>
    )
}

export default Title
import { FC } from 'react'
import style from './style.module.css'
import { createPortal } from 'react-dom'

type Props = {
    isModal: boolean                        // определим пропс состояния (тип boolean); либо false, либо true - текущее состояние setIsModal  задаётся при
    //                                         объявлеии в компоненте-сборщике (здесь в Nav.index.tsx)
    onClick: () => void                       // тип: функция, которая ничего не возвращает
}

const Modal: FC<Props> = ({ isModal, onClick }) => {                // компонент функциональный

    if (!isModal) {                                              // если false то null, соответственно если true, то элемент появляется в разметке
        return null
    }
    const modalRoot = document.getElementById("modal")
    //console.log(modalRoot)

    if (!modalRoot) { return null}                              // добавляем условие на случай, если modalRoot не существует
    //if (modalRoot) {                                            // и условие на случай, если modalRoot существует
        return createPortal(
            <div className={style.container} onClick={onClick}>     {/* теперь при клике на задний фон, она отработает */}
                <div className={style.modal}>Text</div>
            </div>,
            modalRoot                                          // т.е. createPortal должен иметь два аргумента: первым, html-разметку, а вторым, элемент, куда нужно вставить эту разметку
        )
    //}
}

export default Modal
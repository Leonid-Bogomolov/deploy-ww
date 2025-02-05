import { SubmitHandler, useForm } from "react-hook-form"
import style from "./style.module.css"
import image from "../../assets/images/main.gif"

type FormType = {
    user_name: string,
    user_email: string,
    category: string
}

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormType>()   // для комментариев ошибок берём ключ "formState: {errors}"
    console.log(register)
    console.log(errors)                                                         // в консоле появятся налогаемые требования к полям ввода и сообщения об ошибках

    const onSubmit: SubmitHandler<FormType> = (data) => {   // тип SubmitHandler импортируем из библиотеки и через него передаём тип для data
        //console.log(123)                                  // событие сработало
        console.log(data)                                   // выводятся поля, которые мы указали в инпутах в register
    }
    return (
        <div className={style.container}>
            <div id="contact" className={style.marker}></div>
            <div className={style.content}>
                <div className={style.formContent}>
                    <h2>Contact us</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>    {/* handleSubmit берем из hook.useform (см выше: const {register, handleSubmit}); HandleSubmit - это некая обертка,
                        //                                          которая предотвращает перезагрузку страницы, определяет каждое из полей и работает по своей функциональности,
                        //                                          описанной внутри библиотеки */}

                        <label className={style.p_form}>                                                 {/* второй вариант записи без "id" */}
                            Имя <input type="text" {...register("user_name", { required: true, minLength: 3 })} />
                            {/* три точки означают ранее зарегистрированые поля, к которым добавляется еще какой-то новый элемент; дополнительно через запятую можем добавить необязательные
                     // атрибуты, здесь добавили "required" - "обязательное поле" и сработает валидация, форма отправлена не будет; добавили ещё минимальное количество символов */}
                        </label>

                        <label className={style.p_form}>
                            Email <input type="email" {...register("user_email", {
                                minLength: {
                                    value: 6,
                                    message: "В поле email недостаточно символов"
                                }
                            }         // для ошибок можно вывести подсказки
                            )} />
                            {errors.user_email && <p className={style.errors}>{errors.user_email.message}</p>}  {/* проверяем на наличие ошибки и если есть, то выводим сообщение о ней */}
                        </label>

                        <select {...register("category")}>
                            <option value="a">Select A</option>         {/* здесь значения в поле ввода уже предустановленны */}
                            <option value="b">Select B</option>
                            <option value="c">Select C</option>
                        </select>

                        <input className="btn" type="submit" />                         {/* "submit" - отправка формы ппо событию при клике на этой кнопке */}
                    </form>
                </div>
                <div className={style.imgWrapper}>
                    <img src={image} alt="Jelly Belly Wiki gif" />
                </div>
            </div>
        </div>
    )
}

export default Contact
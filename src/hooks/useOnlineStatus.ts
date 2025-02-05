import { useEffect, useState } from "react"

const useOnlineStatus = (): boolean => {                                // объявим кастомный хук: функцию useOnlineStatus, на всякий случай пропишем её тип boolean
    const [isOnline, setIsOnline] = useState(navigator.onLine)          // внутри функции задаём состояние с начальными значениями взятыми из
    //                                                                      devtools/console > navigator.(выбираем с ключом  onLine) (оно будет true)

    useEffect(() => {                                                 // для использования в качестве дополнительного эффекта при монтировании, изменении или размонтировании компонента
        const updateStatus = () => {                                  // вызываемая при прослушивании window функция
            setIsOnline(navigator.onLine)                             // при прослушивании будет менять значение состояния на то, что находится в навигаторе (online/offline)
        }
        window.addEventListener("online", updateStatus)     // поскольку речь идёт о пользователе online или offline, то "слушатель" вешаем на глобальный документ в браузере, 
        //                                                       с аргументами: событием "online" или offline соответственно и функцией, которая будет срабатывать
        window.addEventListener("offline", updateStatus)    
        
        return () => {                                      // при размонтировании нужно удалять события, по этому добавляем функцию return с соответствующим содержанием
            window.removeEventListener("online", updateStatus)
            window.removeEventListener("offline", updateStatus)
        }
    }, [])
    return isOnline                                                     // для нас актуально только само значение 
}

export default useOnlineStatus
import { useEffect, useState } from "react"

export enum DeviceType {                           // Чтобы улучшить код, применим enum - это тип в TypeScripte, который позволяет как определять тип данной переменной или зачения,
 //                                              так и использовать значение указанное в enum
    MOBILE = "MOBILE",
    TABLET = "TABLET",
    DESKTOP = "DESKT0P"
}

const useDeviceType = () => {                                       // объявим кастомный хук: функцию usуDeviceType,          
    const [deviceType, setDeviceType] = useState(getDeviceType())   // Используем функцию, как только записывается значение в состояние deviceType (см return deviceType)

    useEffect(() => {                                               // используем хук useEffect при монтировании компонента
        const updateWindowSize = () => {
            setDeviceType(getDeviceType)
        }
        window.addEventListener("resize", updateWindowSize)             // т.к. событие заключается в выборе размера окна, то по всплывающей подсказке выбираем resize
        return () => {
            window.removeEventListener("resize", updateWindowSize)      // размонтируем, чтобы не засорять память
        }
    }, [])

    return deviceType
}

export default useDeviceType

const getDeviceType = () => {

    const width = window.innerWidth        // вызываем из глобального Dom-элемента свойство, предназначеное для возвращения внутренней ширины окна влючая ширину прокрутки в пикселях

    if (width < 768) {
        //return "mobile"
        return DeviceType.MOBILE            // при испползовании enum 
    }     
    else if (width > 768 && width < 1024) {
        //return "tablet"
        return DeviceType.TABLET
    }
    else {
        //return "desktop"
        return DeviceType.DESKTOP
    }

}
import { RouterProvider } from 'react-router-dom'
import './App.css'
///import Header from './components/Header'
///import Search from './components/Search'
///import Cards from './components/Cards'                        // теперь данные массива карточек будут импортироваться в Cards
import { createContext, Dispatch, useState } from 'react'
import router from './router'
///import Example from './components/Example'
///import useOnlineStatus from './hooks/useOnlineStatus'
///import useDeviceType, { DeviceType } from './hooks/useDeviceType'

/////export const ThemeContext = createContext<{theme: string, setTheme: Dispatch<React.SetStateAction<string>>} | null>(null)  // переменная для смены цветовой темы на базе библиотеки
/////                                                                                                                            React, в угловых скобках тип переменной, здесь объект,
/////                                                                                                                            в круглых, исходное значение. Для лучшей читабельности,
/////                                                                                                                            тип можно прописать отдельно (см ниже)
type ContextType = {
  theme: string
  setTheme: Dispatch<React.SetStateAction<string>>
}

// !!!  Внимание! При удалении закоммиченной строки ниже, TypeScript возмущается ?
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ContextType | null>(null)

function App() {                                        // это компонент и одна из функций возвращающих нам разметку HTML, в нём мы собираем остальные компоненты
  ///const [filterValue, setFilterValue] = useState("")
  ///  
  ///  //  console.log("filterValue:", filterValue)            // видим, что функция состояния зафиксировалась, значит можем передавать её Cards

  const [theme, setTheme] = useState("light")             // создали состояние theme для смены цветовой темы с начальным зачением light
  ///  //console.log(ThemeContext)

  ///  const status = useOnlineStatus()                        // статус пользователя (true/false = online/offline)
  ///  console.log("status:", status)                          // для проверки имитируем offline: devtools/Network/No_thrttling/Offline

  ///  const windowSize = useDeviceType()                      // ширина окна монитора
  ///  //console.log("windowSize:", windowSize)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>    {/* обернув компоненты в тег ThemeContext со свойством Provider(подрядчик) получаем возможность
      //                                                           изменять их CSS свойства хуком useContext (см component/SwitchTheme/index.tsx) и будем передавать в провайдере не строку,
      //                                                           а состояние theme в виде объекта "{theme: theme, setTheme: setTheme}", в укороченной записи -{theme, setTheme}  */}
      {/*    <div className='container'>                         {/* для App стили обычно определяют не модульно, а глобально */}
      <div className={`container ${theme}`}>               {/* к классу container добавляем класс, который несёт имя функции состояния (либо "light", либо "dark") */}

        <RouterProvider router={router} />  {/*// тег из библиотеки 'react-router-dom'; для этого тега необходим атрибут router через который передаём всё,
    //                                       что находится в переменной router (объект с перечислением странниц) т.е. импортируем из router.tsx (см router.tsx)*/}
      </div>
    </ThemeContext.Provider>
  )
}

export default App

///    <ThemeContext.Provider value={{ theme, setTheme }}>    {/* обернув компоненты в тег ThemeContext со свойством Provider(подрядчик) получаем возможность
///      //                                                           изменять их CSS свойства хуком useContext (см component/SwitchTheme/index.tsx) и будем передавать в провайдере не строку,
///      //                                                           а состояние theme в виде объекта "{theme: theme, setTheme: setTheme}", в укороченной записи -{theme, setTheme}  */}
///      {/*    <div className='container'>                         {/* для App стили обычно определяют не модульно, а глобально */}
///      <div className={`container ${theme}`}>               {/* к классу container добавляем класс, который несёт имя функции состояния (либо "light", либо "dark") */}
///        <Header />
///        {windowSize === DeviceType.MOBILE && <h2>MOBILE</h2>}       {/* Вывели на страницу наименование размера девайса */}
///        {windowSize === DeviceType.TABLET && <h2>TABLET</h2>}
///        {windowSize === DeviceType.DESKTOP && <h2>DESKTOP</h2>}
///        <Example />
///        <Search setFilterValue={setFilterValue} />      {/* Внутри компонета Search функцией изменения состояния {setFilterValue} изменяем состояние самого компонента через
///                //                                                      атрибут setFilterValue теперь состояние может передаваться с помощью Props определяемого(задаваемого) в
///                //                                                      Search/index.tsx */}
///        <Cards filterValue={filterValue} />             {/* состояние может передаваться с помощью Props определяемого(задаваемого) в Cards/index.tsx */}
///      </div>
///    </ThemeContext.Provider>
